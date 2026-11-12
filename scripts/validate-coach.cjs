const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
process.chdir(path.resolve(__dirname,'..'));
const nodes=new Map();const node=k=>{if(!nodes.has(k))nodes.set(k,{innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){}},addEventListener(){},focus(){},setAttribute(){},click(){},showModal(){},close(){}});return nodes.get(k)};
let saved='';const ctx={console,assert,document:{querySelector:node,querySelectorAll:()=>[],addEventListener(){},createElement:()=>node('a')},window:{addEventListener(){},scrollTo(){},print(){}},location:{hash:'#structure'},localStorage:{getItem:()=>null,setItem(k,v){saved=v}},setInterval(){},setTimeout(){},clearTimeout(){},Date,Intl,crypto:require('crypto').webcrypto,URL,Blob};
vm.createContext(ctx);
vm.runInContext(['content.js','coach-data.js','coach.js','app.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n'),ctx);
vm.runInContext(`
const coach=window.StructureCoach, cd=window.SCA_COACH;
for(const c of cd.cases){
 assert(c.nodes.length>=12);assert(new Set(c.nodes.map(n=>n.id)).size===c.nodes.length);
 for(const stage of cd.stages)assert(c.nodes.some(n=>n.stage===stage.id));
 for(const n of c.nodes){assert(n.model&&n.simple&&n.purpose&&n.patient&&n.reply);assert(n.essential.length>=2);assert(n.answer>=0&&n.answer<n.options.length);if(n.next)assert(c.nodes.some(x=>x.id===n.next));if(n.branch)assert(c.nodes.some(x=>x.id===n.branch.next));}
 for(const l of c.links)assert(['www.nhs.uk','www.nice.org.uk','www.rcgp.org.uk','www.gmc-uk.org'].includes(new URL(l.url).hostname));
}
assert(cd.phrases.length>=12);
for(const part of [[],['daily'],['review'],['phrases'],['trainer'],['case','not-real']]){const html=coach.page(part);assert(!html.includes('undefined'));assert(!html.includes('[object Object]'));}
function moveCase(id){location.hash='#structure/case/'+id;render();}
function run(){return state.coach.runs[location.hash.split('/')[2]];}
function act(t,v=''){coach.handle(t,v);}
moveCase('headache');act('choose','999');assert.strictEqual(run().choice,null);
act('choose','1');assert(run().mistake);act('decision-retry');act('choose','0');act('attempt');assert.strictEqual(run().phase,'attempt');
act('compare');assert.strictEqual(run().phase,'attempt');run().draft='An attempted response';act('compare');assert.strictEqual(run().phase,'feedback');
run().checks=[0,1];act('finish','independent');assert.strictEqual(run().results.hello.rating,'again');assert(state.coach.cards.hello.due<=Date.now()+601000);
act('jump','hello');act('level','3');act('choose','0');act('attempt');run().spoken=true;act('compare');run().checks=[0,1];act('finish','independent');assert.strictEqual(run().results.hello.rating,'independent');assert(state.coach.cards.hello.due>Date.now()+2.9*86400000);
act('jump','hello');act('level','3');act('choose','0');act('attempt');act('help');assert.strictEqual(run().used,0);run().spoken=true;act('compare');run().checks=[0,1];act('finish','independent');assert.strictEqual(run().results.hello.rating,'again');
act('jump','focus');act('branch','urgent');assert.strictEqual(run().node,'urgent');act('choose','0');act('attempt');run().spoken=true;act('compare');run().checks=[0,1];act('finish','cue');assert(run().complete);assert.strictEqual(run().phase,'done');assert(!run().results.explain);
// Every case can traverse its ordinary path and retain specific reviews.
for(const c of cd.cases){moveCase(c.id);act('restart');let guard=0;while(run().phase!=='done'&&guard++<30){const n=c.nodes.find(n=>n.id===run().node);act('choose',String(n.answer));act('attempt');run().spoken=true;act('compare');run().checks=n.essential.map((x,i)=>i);act('finish','cue');}assert(run().complete,c.id);assert(guard<=20);}
const before=JSON.stringify(state.coach);const imported=coach.clean(JSON.parse(before));assert.deepStrictEqual(JSON.parse(JSON.stringify(imported)),JSON.parse(before));
const dirty=JSON.parse(before);dirty.saved=['hello','bogus'];dirty.runs.headache.draft='<script>test</script>';dirty.runs.headache.results.hello.checks=[-1,100,0];dirty.cards.hello.interval=999;dirty.runs.bogus={node:'hello'};
const cleaned=coach.clean(dirty);assert.strictEqual(cleaned.saved.length,1);assert.strictEqual(cleaned.cards.hello.interval,30);assert(!cleaned.runs.bogus);assert.deepStrictEqual(cleaned.runs.headache.results.hello.checks,[0]);
state.coach=cleaned;state.coach.runs.headache.phase='attempt';state.coach.runs.headache.node='hello';moveCase('headache');assert(document.querySelector('#main').innerHTML.includes('&lt;script&gt;test'));
assert(!document.querySelector('#main').innerHTML.includes('<script>test'));
const newer=coach.clean(cleaned);newer.runs.headache.updated=cleaned.runs.headache.updated+1000;newer.runs.headache.draft='Newer draft';const merged=coach.merge(newer,cleaned);assert.strictEqual(merged.runs.headache.draft,'Newer draft');assert.deepStrictEqual(coach.merge(merged,undefined),merged);
const t={running:true,deadline:10000,remaining:720};assert.strictEqual(coach.timerRemaining(t,11000),0);assert.strictEqual(coach.timerRemaining(t,5000),5);
console.log('PASS: coach content, routes, decision guards, support tracking, emergency path, all complete case paths, scheduling, sanitisation, merge, escaping and timers.');
(async()=>{const backup={version:1,completed:[],history:[],coach:newer};await importFile({target:{files:[{size:1000,text:async()=>JSON.stringify(backup)}],value:'sample'}});assert.strictEqual(state.coach.runs.headache.draft,'Newer draft');assert(state.coach.runs.headache.results.hello);console.log('PASS: studio backup imports and preserves coach attempts, support use and reviews.');})();
`,ctx);
assert(saved);assert(JSON.parse(saved).coach);
