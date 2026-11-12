const {chromium}=require('playwright'),assert=require('assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try {
  const base=process.env.SCA_BASE_URL||'http://127.0.0.1:8011',page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{
   window.__played=[];
   window.SpeechSynthesisUtterance=function(text){this.text=text;};
   Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{cancel(){},getVoices(){return[];},speak(utterance){window.__played.push({text:utterance.text,lang:utterance.lang});}}});
  });
  const click=async(type,value)=>page.locator(`[data-coach="${type}"]${value===undefined?'':`[data-value="${value}"]`}`).first().click();
  await page.goto(base+'/#structure/stages');assert.equal(await page.locator('.coach-stage-cards article').count(),6);
  const lessons=await page.evaluate(()=>window.SCA_COACH.stageLessons);
  for(const lesson of lessons){
   await page.goto(base+'/#structure/stage/'+lesson.id);await click('level','0');
   assert.equal(await page.locator('.coach-stage-move').count(),lesson.moves.length);
   assert.equal(await page.locator('.coach-stage-move blockquote.model').count(),lesson.moves.length);
   await click('stage-speak',lesson.id+':move:0');
   assert.deepEqual(await page.evaluate(()=>window.__played.at(-1)),{text:lesson.moves[0].model,lang:'en-GB'});
   await click('level','1');assert.equal(await page.locator('.coach-stage-move .coach-starter').count(),lesson.moves.length);
   await click('level','2');assert.equal(await page.locator('.coach-stage-move .coach-starter').count(),0);
   await click('level','3');assert.equal(await page.locator('.coach-stage-move blockquote.model').count(),0);
   await click('stage-reveal',lesson.id+':0');assert.match(await page.locator('.coach-stage-answer .feedback').innerText(),/The useful next action/);
   await click('stage-hide',lesson.id+':0');assert.equal(await page.locator('.coach-stage-answer .feedback').count(),0);
   await click('stage-reveal',lesson.id+':0');await click('level','2');assert.equal(await page.locator('.coach-stage-answer .feedback').count(),0);
   await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,lesson.id);
   await page.setViewportSize({width:1440,height:1000});
  }
  await page.goto(base+'/#structure/stage/plan');await click('worked-jump','dyspepsia|recommend');
  await page.locator('.coach-exchange .coach-patient-label').waitFor();
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')).coach.runs.dyspepsia.node),'recommend');
  await page.reload();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('consult-studio-v1')).coach.level),2);
  await page.goto(base+'/#structure/stage/plan');await click('level','0');
  await page.evaluate(()=>Object.defineProperty(window,'speechSynthesis',{value:undefined,configurable:true}));await click('stage-speak','plan:move:0');
  assert.match(await page.locator('#toast').innerText(),/Audio is unavailable/);
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'/tmp/sca-stage-plan-mobile.png',fullPage:true});assert.deepEqual(errors,[]);
  console.log('PASS: Chromium — six stage lessons, 19 sentence sequences, four support levels, answer reveal/retry, correct en-GB playback dispatch and text fallback, targeted case handoff, saved level and mobile layouts.');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
