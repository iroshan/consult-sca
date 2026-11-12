const {chromium}=require('playwright'),assert=require('assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 try {
  const base=process.env.SCA_BASE_URL||'http://127.0.0.1:8011',page=await browser.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  const click=async(type,value)=>page.locator(`[data-coach="${type}"]${value===undefined?'':`[data-value="${value}"]`}`).first().click();
  await page.goto(base+'/#structure');await click('level','0');
  const branches=await page.evaluate(()=>window.SCA_COACH.cases.flatMap(c=>c.nodes.filter(n=>n.branch).map(n=>({caseId:c.id,source:n.id,ordinaryReply:n.reply,...n.branch}))));
  assert.equal(branches.length,6);
  for(const branch of branches){
   await page.goto(base+'/#structure/case/'+branch.caseId);await click('jump',branch.source);
   await page.locator('summary').filter({hasText:branch.label}).click();await click('branch',branch.next);
   let count=0;
   while(await page.locator('[data-coach="choose"]').count()){
    assert(!((await page.locator('.coach-context').textContent())||'').includes(branch.ordinaryReply),'Ordinary answer must not leak into the alternative path');
    await click('choose','0');await click('attempt');await page.locator('#coach-spoken').check();await click('compare');
    for(const item of await page.locator('[data-coach-check]').all())await item.check();
    await click('finish','cue');assert(++count<10);
   }
   assert.match(await page.locator('.coach-exchange').innerText(),/path is complete/);
   if(branch.caseId==='dyspepsia')assert.equal(count,2,'Choosing an empirical trial has its own two-exchange path');
   await page.reload();assert.match(await page.locator('.coach-exchange').innerText(),/path is complete/);
  }
  await page.goto(base+'/#structure/worked/dyspepsia');
  assert.equal(await page.locator('[data-coach="worked-jump"][data-value="dyspepsia|trial-close"]').count(),0,'The ordinary model must not concatenate the alternative ending');
  await page.locator('summary').filter({hasText:'Practise alternative patient answers'}).click();await click('worked-jump','dyspepsia|trial-choice');
  await page.waitForURL(url=>url.hash==='#structure/case/dyspepsia');await page.locator('.coach-exchange .coach-patient-label').waitFor();
  assert.match(await page.locator('.patient-quote').first().innerText(),/planned medicine trial/);
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.screenshot({path:'/tmp/sca-branch-mobile.png',fullPage:true});assert.deepEqual(errors,[]);
  console.log('PASS: Chromium — five emergency paths, two-exchange shared-choice branch, branch-specific facts, completed-path reload, worked-example handoff and mobile layout.');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
