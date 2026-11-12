const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');process.chdir(path.resolve(__dirname,'..')); 
const nodes=new Map();const get=k=>{if(!nodes.has(k))nodes.set(k,{innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){}},addEventListener(){},focus(){},scrollIntoView(){},setAttribute(){},click(){},showModal(){this.open=true},close(){this.open=false}});return nodes.get(k)};let saved='';
const context={document:{querySelector:get,querySelectorAll:()=>[],addEventListener(){},createElement:()=>get('created')},localStorage:{getItem:()=>null,setItem(k,v){saved=v}},location:{hash:'#home'},window:{addEventListener(){},scrollTo(){}},setInterval(){},setTimeout(){},clearTimeout(){},Intl,Date,crypto:require('crypto').webcrypto,Blob,URL,console,assert};vm.createContext(context);
vm.runInContext(fs.readFileSync('content.js','utf8')+'\n'+fs.readFileSync('coach-data.js','utf8')+'\n'+fs.readFileSync('coach-learning.js','utf8')+'\n'+fs.readFileSync('coach.js','utf8')+'\n'+fs.readFileSync('app.js','utf8')+`
assert.strictEqual(esc('<script>'), '&lt;script&gt;');
assert.strictEqual(formatTime(720),'12:00');
state=defaults();startReview();assert.strictEqual(reviewQueue.length,5);
const first=reviewQueue[0];reviewRevealed=true;$('#review-attempt').value='Test response';rateCard('good');assert.strictEqual(state.cards[first].interval,3);assert(state.cards[first].due>Date.now()+2.9*86400000);assert.strictEqual(state.cards[first].reviews,1);
reviewQueue=[first];reviewIndex=0;reviewRevealed=true;rateCard('again');assert(state.cards[first].due<=Date.now()+601000);assert.strictEqual(state.cards[first].reviews,2);
state.drafts['lab-p1']='A saved attempt';labId='p1';labRevealed=false;$('#lab-attempt').value='What matters most to you?';revealLab();assert(labRevealed);assert($('#lab-feedback').innerHTML.includes('Clinical')||$('#lab-feedback').innerHTML.includes('Action behind'));
$('#lab-rewrite').value='What has been happening, and what would you like help with today?';$('#lab-confidence').value='2';saveLab();assert(state.history.some(h=>h.type==='phrase'&&h.rewrite));
for(const c of CASES){caseTab='practice';assert(caseDetail(c.id).includes('DECISION POINT 2'));caseTab='debrief';assert(caseDetail(c.id).includes('WORKED MANAGEMENT PLAN'));}
for(const p of PHRASES)assert(phraseDetail(p).includes(esc(p.say)));
phraseQuery='kidneys';phraseFilter='All topics';assert(filteredPhrases().length>0);phraseQuery='zzzzzznoresult';assert.strictEqual(filteredPhrases().length,0);
console.log('PASS: escaping, timer formatting, review queue and scheduling, practice save, all case practice/debrief views, all phrase details, search.');
`,context);assert(JSON.parse(saved).history.length>0);console.log('PASS: progress serialises successfully.');
vm.runInContext(`
(async()=>{
const backup={version:1,completed:['m1','invalid'],saved:['p1'],cards:{p1:{due:Date.now()+86400000,interval:1,reviews:9}},drafts:{'lab-p2':'Imported sample'},history:[{type:'phrase',id:'p2',at:Date.now()-10000,attempt:'<img src=x onerror=alert(1)>'}],notes:[{id:'sample-note',at:Date.now(),text:'Example reflection'}],goal:'Try teach-back',caseChecks:{c1:[0,2]},caseAnswers:{'c1-0':1},decisions:{d1:1}};
await importFile({target:{files:[{size:500,text:async()=>JSON.stringify(backup)}],value:'sample'}});
assert(state.completed.includes('m1'));assert(!state.completed.includes('invalid'));assert(state.saved.includes('p1'));assert.strictEqual(state.cards.p1.reviews,9);assert.strictEqual(state.drafts['lab-p2'],'Imported sample');assert(state.notes.some(n=>n.id==='sample-note'));assert(progress().includes('&lt;img'));assert(!progress().includes('<img src=x'));
const before=JSON.stringify(state);await importFile({target:{files:[{size:100,text:async()=>'{not json'}],value:'bad'}});assert.strictEqual(JSON.stringify(state),before);console.log('PASS: backup import/merge, invalid-file rejection, imported HTML escaped.');
})();`,context);
