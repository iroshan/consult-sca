// Run against a local static server: SCA_BASE_URL=http://127.0.0.1:8011 node scripts/browser-coach.cjs
// Requires the official Playwright package and an installed Chromium browser.
const {chromium}=require('playwright');
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),os=require('os');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try {
  const base=process.env.SCA_BASE_URL||'http://127.0.0.1:8011';
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const go=async route=>{await page.goto(base+'/'+route);await page.locator('#main h1').waitFor();};
  const click=async(type,value)=>{const selector=`[data-coach="${type}"]${value===undefined?'':`[data-value="${value}"]`}`;await page.locator(selector).first().click();};
  await go('#structure');assert.equal(await page.locator('a[href^="#structure/worked/"]').count(),12);
  await page.screenshot({path:path.join(os.tmpdir(),'sca-coach-overview.png'),fullPage:true});
  await go('#structure/case/headache');await click('choose','0');await click('attempt');
  await page.locator('#coach-attempt').fill('Hello, I am Dr Patel. Could I check your details and whether it is private to talk?');
  await page.reload();assert.match(await page.locator('#coach-attempt').inputValue(),/private/);
  await click('compare');await page.locator('[data-coach-check="0"]').check();await page.locator('[data-coach-check="1"]').check();
  await click('finish','independent');
  let state=await page.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')));
  assert.equal(state.coach.runs.headache.results.hello.rating,'again','A model-supported attempt must not become independent recall');
  await go('#structure');await click('level','3');await go('#structure/case/headache');await click('jump','hello');assert.equal(await page.locator('[data-coach="choose"]').count(),0);await click('unprompted');
  assert.equal(await page.locator('.coach-exchange blockquote.model').count(),0);
  await page.locator('#coach-spoken').check();await click('compare');
  await page.locator('[data-coach-check="0"]').check();await page.locator('[data-coach-check="1"]').check();await click('save','hello');await click('finish','independent');
  state=await page.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')));assert.equal(state.coach.runs.headache.results.hello.rating,'independent');
  assert(await page.locator('.coach-exchange').evaluate(e=>e.getBoundingClientRect().top>=-10),'New exchange scrolls into view');
  await click('jump','focus');await page.locator('summary').filter({hasText:'Practise a different patient answer'}).click();await click('branch','urgent');
  if(await page.locator('[data-coach="unprompted"]').count())await click('unprompted');else{await click('choose','0');await click('attempt');}await page.locator('#coach-spoken').check();await click('compare');
  await page.locator('[data-coach-check="0"]').check();await page.locator('[data-coach-check="1"]').check();await click('finish','cue');
  assert.match(await page.locator('.coach-exchange').innerText(),/path is complete/);
  // A complete ordinary path for every case, through the actual UI and persistence handlers.
  const ids=await page.evaluate(()=>window.SCA_COACH.cases.map(c=>c.id));
  for(const id of ids){
   await go('#structure/case/'+id);
   await click('jump','hello');
   for(let i=0;i<12;i++){
    if(await page.locator('[data-coach="unprompted"]').count())await click('unprompted');else{await click('choose','0');await click('attempt');}await page.locator('#coach-spoken').check();await click('compare');
    for(const input of await page.locator('[data-coach-check]').all())await input.check();
    await click('finish','cue');
   }
   assert.match(await page.locator('.coach-exchange').innerText(),/path is complete/,id);
  }
  await go('#structure/case/asthma');await click('jump','barrier');if(await page.locator('[data-coach="unprompted"]').count())await click('unprompted');else{await click('choose','0');await click('attempt');}await page.locator('#coach-spoken').check();await click('compare');await click('transfer');
  await page.waitForURL(url=>url.hash.includes('/case/')&&!url.hash.includes('/asthma'));
  state=await page.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')));const target=page.url().split('/').pop();assert.equal(state.coach.runs[target].node,'barrier');
  await go('#structure/phrases');await click('saved-filter');assert.match(await page.locator('#main').innerText(),/Start warmly/);assert.equal(await page.locator('.grid .card').count(),1);
  await go('#structure/review');await click('recall-start');await click('recall-reveal');await click('recall-rate','independent');
  await go('#structure/daily');await page.locator('#coach-reflection').fill('Next time I will explain the reason for my recommendation.');
  const suggested=await page.evaluate(()=>window.StructureCoach.recommendation().c.id);await click('guided-next');await page.waitForURL(url=>url.hash==='#structure/case/'+suggested);
  await go('#progress');const downloadEvent=page.waitForEvent('download');await page.locator('#export-progress').click();const download=await downloadEvent;
  const downloaded=JSON.parse(fs.readFileSync(await download.path(),'utf8'));assert.equal(downloaded.coach.saved[0],'hello');assert.match(downloaded.coach.reflection,/recommendation/);assert(downloaded.coach.runs.falls.results.check);
  // Import into a fresh browser profile via the real file input and async merge.
  const other=await browser.newPage();other.on('pageerror',e=>errors.push(e.message));await other.goto(base+'/#progress');
  await other.locator('#import-file').setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(downloaded))});
  await other.waitForFunction(()=>JSON.parse(localStorage.getItem('consult-studio-v1'))?.coach?.saved?.includes('hello'));
  const imported=await other.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')));assert.deepEqual(imported.coach.runs.falls.results,downloaded.coach.runs.falls.results);
  await other.goto(base+'/#structure/case/headache');await other.locator('[data-coach="jump"][data-value="hello"]').click();
  await other.locator('[data-coach="unprompted"]').click();await other.locator('#coach-attempt').fill('<img src=x onerror=alert(1)>');await other.reload();assert.equal(await other.locator('#coach-attempt').inputValue(),'<img src=x onerror=alert(1)>');assert.equal(await other.locator('#main img').count(),0);
  // Every view at a small mobile width, including longer examples and recovery sentences.
  await page.setViewportSize({width:390,height:844});
  for(const route of ['#structure','#structure/daily','#structure/phrases','#structure/review','#structure/trainer','#structure/worked/eczema','#structure/case/headache']){
   await go(route);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Horizontal overflow on '+route);
  }
  await page.screenshot({path:path.join(os.tmpdir(),'sca-coach-mobile.png'),fullPage:true});
  assert.deepEqual(errors,[]);
  console.log('PASS: Chromium — twelve complete case paths, emergency branch, four-level support tracking, spoken/typed practice, reload persistence, cross-case transfer, saved sentences, recall, real JSON export/import, escaping and mobile layouts.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
