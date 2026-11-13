const {chromium}=require('playwright'),assert=require('assert/strict'),fs=require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try {
  const base=process.env.SCA_BASE_URL||'http://127.0.0.1:8011',page=await browser.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{window.__played=[];window.SpeechSynthesisUtterance=function(text){this.text=text;};Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{cancel(){},getVoices(){return[];},speak(u){window.__played.push({text:u.text,lang:u.lang,rate:u.rate});}}});});
  for(const id of ['gi-ibs','gi-rectal-bleeding','gi-dyspepsia','msk-back-pain','msk-gout','msk-knee-oa','mh-depression','mh-gad','mh-panic','mh-sleep','mh-dependence','mh-minority-stress','mh-palliative','mh-adjustment','mh-ptsd','mh-bullying','mh-antenatal','mh-postnatal','mh-postpartum-psychosis','mh-young-person','mh-eating']){
   await page.goto(base+'/clinical/#case/'+id);await page.locator('[role="tab"][data-tab="discussion"]').click();
   const count=await page.locator('.discussion-model').count();assert(count>=1,id);
   assert.equal(await page.locator('.discussion-model[open]').count(),count);
   await page.locator('#discussion-attempt').fill('Fictional practice: <b>my own clear explanation</b>.');
   await page.locator('#toggle-discussion-models').click();assert.equal(await page.locator('.discussion-model[open]').count(),0);
   assert.equal(await page.locator('#toggle-discussion-models').getAttribute('aria-pressed'),'true');
   await page.locator('.discussion-model summary').first().click();assert.equal(await page.locator('.discussion-model[open]').count(),1);
   const item=await page.evaluate(id=>window.CLINICAL_ATLAS.flatMap(a=>a.cases).find(c=>c.id===id).discussion[0],id);
   await page.locator('[data-clinical-say="'+id+'|0|response"]').click();
   assert.deepEqual(await page.evaluate(()=>window.__played.at(-1)),{text:item.response,lang:'en-GB',rate:0.8});
   if(item.simple){await page.locator('#discussion-speed').selectOption('1');await page.locator('[data-clinical-say="'+id+'|0|simple"]').click();assert.deepEqual(await page.evaluate(()=>window.__played.at(-1)),{text:item.simple,lang:'en-GB',rate:1});}
   await page.locator('#toggle-discussion-models').click();assert.equal(await page.locator('.discussion-model[open]').count(),0);
   await page.locator('#toggle-discussion-models').click();assert.equal(await page.locator('.discussion-model[open]').count(),count);
   assert.match(await page.locator('#discussion-attempt').inputValue(),/my own clear explanation/);
   await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,id);await page.setViewportSize({width:1440,height:1000});
  }
  await page.reload();await page.locator('[role="tab"][data-tab="discussion"]').click();assert.match(await page.locator('#discussion-attempt').inputValue(),/my own clear explanation/);
  await page.goto(base+'/clinical/#progress');const pending=page.waitForEvent('download');await page.locator('#export-data').click();const download=await pending,backup=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
  const other=await browser.newPage();other.on('pageerror',error=>errors.push(error.message));await other.goto(base+'/clinical/#progress');await other.locator('#import-data').setInputFiles({name:'atlas.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});
  await other.waitForFunction(()=>JSON.parse(localStorage.getItem('consult-atlas-v1'))?.notes?.['discussion-msk-gout']);
  await other.goto(base+'/clinical/#case/msk-gout');await other.locator('[role="tab"][data-tab="discussion"]').click();assert.match(await other.locator('#discussion-attempt').inputValue(),/my own clear explanation/);
  await other.evaluate(()=>Object.defineProperty(window,'speechSynthesis',{value:undefined,configurable:true}));await other.locator('[data-clinical-say="msk-gout|0|response"]').click();assert.match(await other.locator('#toast').innerText(),/Audio is unavailable/);
  await other.goto(base+'/clinical/#language');await other.evaluate(()=>Object.defineProperty(window,'speechSynthesis',{value:undefined,configurable:true}));await other.locator('.language-card details summary').first().click();await other.locator('[data-say]').first().click();assert.match(await other.locator('#audio-status').innerText(),/Audio is unavailable/);
  await page.goto(base+'/clinical/#case/msk-knee-oa');await page.locator('[role="tab"][data-tab="discussion"]').click();await page.setViewportSize({width:390,height:844});await page.screenshot({path:'/tmp/sca-discussion-rehearsal-mobile.png',fullPage:true});assert.deepEqual(errors,[]);
  console.log('PASS: Chromium — discussion rehearsal with/without shorter wording, native reveal/hide, en-GB playback text and speed dispatch, unavailable audio, note persistence, actual Atlas backup round-trip and mobile layouts.');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
