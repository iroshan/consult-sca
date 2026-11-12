const {chromium}=require('playwright'),assert=require('assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try {
  const base=process.env.SCA_BASE_URL||'http://127.0.0.1:8011',page=await browser.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  const click=async(type,value)=>page.locator(`[data-coach="${type}"]${value===undefined?'':`[data-value="${value}"]`}`).first().click();
  const saved=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')));
  await page.goto(base+'/#structure');await click('level','3');await page.goto(base+'/#structure/case/headache');await click('jump','hello');await click('unprompted');
  await page.locator('#coach-attempt').fill('Hello, I am the GP. Could I check your details and privacy?');
  await page.goto(base+'/#structure/worked/asthma');assert.equal((await saved()).coach.runs.headache.used,3);
  await page.goto(base+'/#structure/worked/headache');assert.equal((await saved()).coach.runs.headache.used,0);
  await page.goto(base+'/#structure/case/headache');assert.match(await page.locator('#coach-attempt').inputValue(),/details and privacy/);await click('compare');
  assert.match(await page.locator('.coach-exchange').innerText(),/A model was opened during this attempt/);
  for(const checkbox of await page.locator('[data-coach-check]').all())await checkbox.check();
  await click('finish','independent');assert.equal((await saved()).coach.runs.headache.results.hello.rating,'again');
  await click('jump','hello');await click('unprompted');await page.locator('#coach-spoken').check();await click('compare');
  for(const checkbox of await page.locator('[data-coach-check]').all())await checkbox.check();await click('save-example','headache:hello');await click('finish','independent');
  assert.equal((await saved()).coach.runs.headache.results.hello.rating,'independent','A fresh retry may be independent');
  await click('jump','hello');await click('unprompted');await page.goto(base+'/#structure/phrases');assert.equal((await saved()).coach.runs.headache.used,0);
  await page.goto(base+'/#structure/case/dyspepsia');await click('jump','recommend');await click('unprompted');
  await page.goto(base+'/#structure/stage/plan');assert.equal(await page.locator('.coach-filled-example').count(),0);assert.equal((await saved()).coach.runs.dyspepsia.used,3);
  await click('level','0');assert.equal(await page.locator('.coach-filled-example').count(),1);assert.equal((await saved()).coach.runs.dyspepsia.used,0);
  await page.reload();assert.equal((await saved()).coach.runs.dyspepsia.used,0);assert.deepEqual(errors,[]);
  console.log('PASS: Chromium — related model exposure changes saved support, unrelated models do not, drafts survive, fresh retries can be independent, saved/filled examples and reload remain honest.');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
