'use strict';
// The coach uses the studio's existing state and backup boundary.
window.StructureCoach = (() => {
  const data = window.SCA_COACH;
  const levels = ['Teach me', 'Help me', 'Prompt me', 'Let me try'];
  const day = 86400000;
  const caseById = id => data.cases.find(c => c.id === id);
  const phraseById = id => data.phrases.find(p => p.id === id);
  const nodeById = (c, id) => c.nodes.find(n => n.id === id);
  function exampleByKey(key){if(typeof key!=='string')return null;const [id,node,...extra]=key.split(':');const c=caseById(id),n=c&&nodeById(c,node);return n&&!extra.length?{c,n,key}:null;}
  const object = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
  const text = (x, max = 6000) => typeof x === 'string' ? x.slice(0, max) : '';
  const num = (x, min, max, fallback = min) => Number.isFinite(x) ? Math.max(min, Math.min(max, x)) : fallback;
  const indices = (x, max) => [...new Set((Array.isArray(x) ? x : []).filter(i => Number.isInteger(i) && i >= 0 && i < max))];
  const defaults = () => ({version: 1, level: 0, saved: [], examples:[], exampleNotes:{}, cards: {}, runs: {}, reflection: '', learning:window.CoachLearning.defaults(), updated: 0});
  function clean(raw) {
    raw = object(raw);
    const out = defaults();
    out.level = Math.floor(num(raw.level, 0, 3));
    out.updated = num(raw.updated, 0, 1e15);
    out.reflection = text(raw.reflection, 3000);
    out.learning = window.CoachLearning.clean(raw.learning);
    out.saved = [...new Set((Array.isArray(raw.saved) ? raw.saved : []).filter(phraseById))];
    out.examples=[...new Set((Array.isArray(raw.examples)?raw.examples:[]).filter(exampleByKey))];
    for(const [key,note]of Object.entries(object(raw.exampleNotes)))if(exampleByKey(key)&&typeof object(note).text==='string')out.exampleNotes[key]={text:note.text.slice(0,1500),at:num(note.at,0,1e15)};
    for (const p of data.phrases) {
      const v = object(object(raw.cards)[p.id]);
      if (!Number.isFinite(v.due)) continue;
      out.cards[p.id] = {due: num(v.due, 0, 1e15), interval: num(v.interval, 0, 30), reviews: Math.floor(num(v.reviews, 0, 100000)), at: num(v.at, 0, 1e15), rating: ['again','cue','independent'].includes(v.rating) ? v.rating : 'again', cases: [...new Set((Array.isArray(v.cases) ? v.cases : []).filter(caseById))]};
    }
    for (const c of data.cases) {
      const v = object(object(raw.runs)[c.id]);
      if (!nodeById(c, v.node)) continue;
      const n = nodeById(c, v.node);
      const run = {
        node: n.id, phase: ['decide','attempt','feedback','done'].includes(v.phase) ? v.phase : 'decide',
        choice: Number.isInteger(v.choice) && v.choice >= 0 && v.choice < n.options.length ? v.choice : null,
        draft: text(v.draft), checks: indices(v.checks, n.essential.length), spoken: v.spoken === true,
        used: Math.floor(num(v.used, 0, 3)), mistake: v.mistake === true, choicesShown: v.choicesShown === true, decisionHelp: v.decisionHelp === true,
        results: {}, updated: num(v.updated, 0, 1e15), complete: v.complete === true,
        timer: {kind: object(v.timer).kind === 'reading' ? 'reading' : 'consultation', remaining: num(object(v.timer).remaining, 0, 720, 720), running: object(v.timer).running === true, deadline: num(object(v.timer).deadline, 0, 1e15)}
      };
      for (const node of c.nodes) {
        const r = object(object(v.results)[node.id]);
        if (!Number.isFinite(r.at)) continue;
        run.results[node.id] = {at: num(r.at, 0, 1e15), rating: ['again','cue','independent'].includes(r.rating) ? r.rating : 'again', support: Math.floor(num(r.support, 0, 3)), checks: indices(r.checks, node.essential.length), attempt: text(r.attempt), mistake: r.mistake === true};
      }
      out.runs[c.id] = run;
    }
    return out;
  }
  function merge(current, incoming) {
    const a = clean(current), b = clean(incoming), out = b.updated > a.updated ? {...b} : {...a};
    out.saved = [...new Set([...a.saved, ...b.saved])];
    out.learning = window.CoachLearning.merge(a.learning,b.learning);
    out.examples=[...new Set([...a.examples,...b.examples])];out.exampleNotes={...a.exampleNotes};for(const [key,note]of Object.entries(b.exampleNotes))if(!out.exampleNotes[key]||note.at>out.exampleNotes[key].at)out.exampleNotes[key]=note;
    out.cards = {...a.cards}; out.runs = {...a.runs};
    for (const [id, card] of Object.entries(b.cards)) if (!out.cards[id] || card.at > out.cards[id].at) out.cards[id] = card;
    for (const [id, run] of Object.entries(b.runs)) {
      const old = out.runs[id];
      if (!old) {out.runs[id] = run; continue;}
      const winner = run.updated > old.updated ? run : old;
      const results = {...old.results};
      for (const [key, r] of Object.entries(run.results)) if (!results[key] || r.at > results[key].at) results[key] = r;
      out.runs[id] = {...winner, results};
    }
    return out;
  }
  function store() {state.coach.updated = Date.now(); persist();}
  function noteModelExposure(c,ids){const run=state.coach.runs[c.id];if(run?.phase==='attempt'&&ids.includes(run.node)&&run.used>0){run.used=0;run.updated=Date.now();store();}}
  function ensure() {state.coach = clean(state.coach); return state.coach;}
  function fresh(c, id, previous) {
    return {node: id, phase: 'decide', choice: null, draft: '', checks: [], spoken: false, used: state.coach.level, mistake: false, choicesShown: false, decisionHelp: false, results: previous?.results || {}, complete: false, updated: Date.now(), timer: previous?.timer || {kind:'consultation', remaining:720, running:false, deadline:0}};
  }
  function runFor(c) {
    return state.coach.runs[c.id] || (state.coach.runs[c.id] = fresh(c, c.nodes[0].id));
  }
  const href = id => '#structure/case/' + id;
  const action = (label, type, value = '', cls = '') => `<button class="btn ${cls}" data-coach="${type}" data-value="${esc(value)}">${label}</button>`;
  const link = (label, url, cls = '') => `<a class="button ${cls}" href="${url}">${label}</a>`;
  const list = items => `<ul>${items.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
  function links(c) {return `<details><summary>Official guidance and clinical scope</summary><p>Selected facts checked ${esc(data.checked)}. These are authored communication exercises with selected clinical decisions. Complete the full assessment, use current local pathways and prescribing guidance, and arrange the actual care.</p>${c.links.map(l => `<p><a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a></p>`).join('')}${c.atlas ? link(esc(c.atlasLabel||'Open the related Clinical Atlas case ↗'),'clinical/#case/'+c.atlas,'secondary') : c.studio ? link('Open a related studio case ↗','#cases/'+c.studio,'secondary') : ''}</details>`;}
  function banner() {return `<section class="coach-welcome"><div><span class="eyebrow">START HERE · GUIDED SPOKEN PRACTICE</span><h2>Know your next step.<br>Find the words to say it.</h2><p>Follow a consultation one exchange at a time. Start with a full example, then gradually try with less help.</p></div><div class="actions">${link('Guide me through today’s practice →','#structure/daily')}${link('Explore the Structure Coach','#structure','secondary')}</div></section>`;}
  function navigation(active) {return `<nav class="coach-nav" aria-label="Structure Coach">${[['','Coach'],['stages','Learn the six stages'],['daily','Today’s practice'],['phrases','My sentences'],['review','Recall practice'],['learning','Plan & reflect'],['trainer','Trainer sheet']].map(([id,label]) => `<a href="#structure${id?'/'+id:''}" ${active===id?'aria-current="page"':''}>${label}</a>`).join('')}</nav>`;}
  function map(active) {return `<ol class="coach-map" aria-label="Flexible consultation structure">${data.stages.map(s => `<li ${active===s.id?'aria-current="step"':''}><strong>${esc(s.title)}</strong><span>${esc(s.purpose)}</span></li>`).join('')}</ol>`;}
  function stageCards(){return `<div class="grid two coach-stage-cards">${data.stageLessons.map(lesson=>{const stage=data.stages.find(s=>s.id===lesson.id);return `<article class="card"><span class="tag">${esc(stage.title)}</span><h2>${esc(lesson.anchor)}</h2><p>${esc(lesson.aim)}</p>${link('Teach me this stage →','#structure/stage/'+stage.id,'secondary')}</article>`;}).join('')}</div>`;}
  function stages(){return navigation('stages')+head('SMALL SEQUENCES YOU CAN REMEMBER','Learn what to say, then use the answer.','Choose one stage. Rehearse a short sequence, respond to a changed patient answer, then try it in a full case.')+map()+`<section class="panel"><h2>A flexible map, not a script</h2><p>These purposes can overlap or repeat. Clinical urgency comes first. A phrase only helps when you use the person’s answer and make the right next decision.</p><ol><li>Read one short sequence aloud with the full example.</li><li>Use Help me or Prompt me, then try with the words hidden.</li><li>Answer a different patient response before revealing an example.</li><li>Practise the same purpose in two case contexts and revisit it after a delay.</li></ol><p>Natural, clear English matters more than a particular accent or an exact memorised sentence. Keep the meaning and the clinical action.</p></section>`+stageCards();}
  const stageReveals=new Set();
  function filledStageExample(lesson){const [id,nodeId]=lesson.practice[0],c=caseById(id),n=nodeById(c,nodeId);noteModelExposure(c,[n.id]);return `<section class="panel coach-filled-example"><h2>A filled-in case example</h2><p class="tiny">${esc(c.title)} · Fictional scenario. The earlier supplied assessment and answers matter to this wording.</p>${contextFor(c,n)}<p class="tiny">${esc(c.speaker||'Patient')}</p><blockquote class="patient-quote">${esc(n.patient)}</blockquote><p class="tiny">One possible response</p><blockquote class="model">${esc(n.model)}</blockquote><p><strong>Shorter:</strong> ${esc(n.simple)}</p><p><strong>Why:</strong> ${esc(n.why)}</p><div class="actions">${action('Listen to the filled-in example','example-speak',c.id+':'+n.id,'secondary small')}${action('Practise this exchange','worked-jump',c.id+'|'+n.id,'secondary')}</div></section>`;}
  function stagePage(id){
    const lesson=data.stageLessons.find(s=>s.id===id),stage=data.stages.find(s=>s.id===id);
    if(!lesson||!stage)return navigation('stages')+head('STAGE NOT FOUND','Choose one of the six stages.','',link('Open the stage lessons','#structure/stages'));
    const level=state.coach.level;
    return navigation('stages')+`<a class="back" href="#structure/stages">← All six stage lessons</a>`+head(esc(stage.title)+' · '+esc(lesson.anchor),'Find the words for this part.',esc(lesson.aim))+map(stage.id)+`<div class="content-narrow"><section class="panel"><h2>Use the help you need</h2>${levelButtons()}<div class="actions">${action('Stop audio','stop','','secondary small')}</div><p>Start with a full model. Reduce the prompts when you are ready; return to Teach me at any time. This lesson is rehearsal, with no automatic assessment or completion score.</p>${level<3?`<p><strong>UK wording note:</strong> ${esc(lesson.language)}</p>`:''}</section><section class="panel coach-stage-sequence"><h2>A short connected sequence</h2><p>Pause after each question. These are sentence shapes for learning; choose the actual questions and clinical actions from the person’s situation.</p>${lesson.moves.map((move,i)=>`<article class="coach-stage-move">${level<3?`<h3>${i+1}. ${esc(move.title)}</h3>`:`<span class="tag">${i+1}</span>`}<p class="tiny">Patient</p><blockquote class="patient-quote">${esc(move.patient)}</blockquote>${level===0?`<p class="tiny">One possible response</p><blockquote class="model">${esc(move.model)}</blockquote><p><strong>Shorter:</strong> ${esc(move.simple)}</p><p>${esc(move.why)}</p>${action('Listen to this wording','stage-speak',id+':move:'+i,'secondary small')}`:level===1?`<div class="coach-starter"><p>${esc(move.starter)}</p></div>`:level===2?`<div class="callout">${esc(move.title)}</div>`:'<p>Try your response aloud. Ask for help if you need it.</p>'}</article>`).join('')}${level<3?`<h3>A bridge into the next part</h3>${level===0?`<blockquote class="model">${esc(lesson.transition)}</blockquote>`:'<p>Choose a short transition that follows the patient’s answer. Use Teach me to see one example.</p>'}`:''}</section>${level===0?filledStageExample(lesson):''}<section class="panel"><h2>Use a different patient answer</h2><p>Try a response aloud, then reveal one possible approach. Your wording may differ; check the meaning and the next action.</p>${lesson.answers.map((answer,i)=>{const key=id+':'+i;return `<article class="coach-stage-answer"><blockquote class="patient-quote">${esc(answer.patient)}</blockquote>${level<2?`<p><strong>Your task:</strong> ${esc(answer.task)}</p>`:''}${stageReveals.has(key)?`<div class="feedback"><p><strong>The useful next action:</strong> ${esc(answer.task)}</p><blockquote class="model">${esc(answer.response)}</blockquote><div class="actions">${action('Listen','stage-speak',id+':answer:'+i,'secondary small')}${action('Hide and try again','stage-hide',key,'secondary small')}</div></div>`:action('Show one possible response','stage-reveal',key,'secondary')}</article>`;}).join('')}${level===0?`<h3>Avoid this shortcut</h3><p>${esc(lesson.avoid)}</p>`:''}</section><section class="panel"><h2>Now use it with a patient</h2><p>Practise one exchange, compare it, then try the same purpose in another case. You can save the case’s exact wording and your own version from its feedback.</p><div class="actions">${lesson.practice.map(([caseId,nodeId],i)=>action((i?'Transfer: ':'Start: ')+esc(caseById(caseId).title),'worked-jump',caseId+'|'+nodeId,'secondary')).join('')}</div><p class="tiny">Opening a targeted exchange restarts that exchange’s current draft; completed self-reviews are retained. Finish or copy an existing attempt first if you wish to keep it.</p>${link('Plan a repeat and record one improvement','#structure/learning','secondary')}</section></div>`;
  }
  function skillProgress(){return `<section class="panel"><h2>What is getting easier?</h2><p>These are your own practice records. Try the same skill in another case, and ask a trainer to observe how you apply it.</p><div class="table-wrap"><table><thead><tr><th>Stage</th><th>Exchanges reviewed</th><th>Independent recall</th><th>Case contexts</th></tr></thead><tbody>${data.stages.map(stage=>{let count=0,independent=0;const contexts=new Set();for(const c of data.cases){for(const [id,r]of Object.entries(state.coach.runs[c.id]?.results||{})){if(nodeById(c,id)?.stage===stage.id){count++;if(r.rating==='independent')independent++;contexts.add(c.id);}}}return `<tr><th>${esc(stage.title)}</th><td>${count}</td><td>${independent}</td><td>${contexts.size}</td></tr>`;}).join('')}</tbody></table></div></section>`;}
  function overview() {
    const s = state.coach;
    return navigation('') + head('YOUR GUIDED CONSULTATION COACH','One step. One clear response.','Learn the thinking and the sentences together. Speak aloud, compare, repeat, and try with less help.') + banner() + map() + `<section class="panel"><h2>Need the words one stage at a time?</h2><p>Learn short sentence sequences, natural UK alternatives and what to do with different patient answers.</p>${link('Teach me the six stages →','#structure/stages')}</section><div class="callout"><strong>A map you can adapt</strong>Listen to each answer. Return to an earlier question when needed. A new warning symptom changes the priority immediately.</div><div class="grid two">${data.cases.map(c => {
      const r=s.runs[c.id], count=Object.keys(r?.results||{}).length;
      return `<article class="card"><span class="tag">${esc(c.category)}</span><h2>${esc(c.title)}</h2><p>${esc(c.patient)}</p><p>${esc(c.goal)}</p><p class="tiny">${count} exchanges self-reviewed${r?.complete?' · A consultation path completed':''}</p>${link(r?'Continue / revisit →':'Start with guidance →',href(c.id))}<p><a href="#structure/worked/${c.id}">Read the full worked example ↗</a></p></article>`;
    }).join('')}</div><section class="panel"><h2>Choose the help you need</h2><p>Begin with exact sentences. Each exchange can be replayed with fewer prompts. Independent recall means you tried without opening the model during that attempt.</p>${levelButtons()}<p class="tiny">Your preferred level is saved. Your actual use of help is recorded separately from your own recall rating.</p></section>${skillProgress()}<section class="panel"><h2>Your next learning step</h2><p>Practise a short exchange, then use that skill with a different patient. Self-review describes practice, not an official assessment. An observed consultation with your trainer helps check real transfer.</p>${action('Choose a mixed case →','mixed','','secondary')}${link('Back up all studio and coach progress','#progress','secondary')}</section>`;
  }
  function levelButtons() {return `<div class="coach-levels" role="group" aria-label="Amount of support">${levels.map((label,i) => `<button class="pill ${state.coach.level===i?'active':''}" data-coach="level" data-value="${i}" aria-pressed="${state.coach.level===i}">${label}</button>`).join('')}</div>`;}
  function sentenceParts(words){if(typeof Intl.Segmenter==='function')return [...new Intl.Segmenter('en-GB',{granularity:'sentence'}).segment(words)].map(s=>s.segment.trim()).filter(Boolean);return words.split(/(?<=[.!?])\s+(?=[A-Z“])/).filter(Boolean);}
  function sentencePractice(n){return `<details><summary>Practise one sentence at a time</summary><p>Say one sentence, pause, and allow the other person to answer when needed. Adapt the next sentence to that answer.</p><ol class="coach-sentence-steps">${sentenceParts(n.model).map((line,i)=>`<li><p>${esc(line)}</p><span class="tiny">${line.endsWith('?')?'Pause and listen to the answer.':'Say it clearly, then pause.'}</span>${action('Listen to this sentence','speak-line',String(i),'secondary small')}</li>`).join('')}</ol></details>`;}
  function support(n, level) {
    if (level===3) return `<p class="coach-independent">Try your response aloud. Ask for help whenever you need it.</p>`;
    if (level===2) return `<div class="callout"><strong>Your next job</strong>${esc(n.task)}</div>`;
    if (level===1) return `<div class="callout"><strong>Your next job</strong>${esc(n.task)}</div><div class="coach-starter"><strong>Sentence beginnings</strong><p>${esc(n.starter)}</p></div>`;
    return `<div class="callout"><strong>Your next job</strong>${esc(n.task)}</div><h3>Try saying this</h3><blockquote class="model">${esc(n.model)}</blockquote><div class="actions">${action('Listen to the model','speak','model','secondary small')}${action('Stop audio','stop','','secondary small')}</div>${sentencePractice(n)}<p><strong>A shorter version:</strong> ${esc(n.simple)}</p><p><strong>Why this helps:</strong> ${esc(n.purpose)}</p><p class="coach-note">${esc(n.tip)}</p>`;
  }
  function branchChoice(n){return n.branch?`<details><summary>${esc(n.branch.label)}</summary><p class="patient-quote">${esc(n.branch.patient)}</p>${action('Use this patient answer →','branch',n.branch.next,'secondary')}</details>`:'';}
  function assessment(c, r, n) {
    if(state.coach.level===3&&!r.choicesShown)return `<h2>Choose your next step, then respond.</h2><p>Decide what you need to do from the patient’s words. Try your response aloud before comparing it with the worked example.</p><div class="actions">${action('I’ve chosen my next step — practise →','unprompted')}${action('Help me choose the next step','decision-help','','secondary')}</div>${branchChoice(n)}`;
    const order = n.options.map((o,i) => ({o,i}));
    const rotate = [...(c.id+n.id)].reduce((a,b)=>a+b.charCodeAt(0),0)%order.length;
    const options = [...order.slice(rotate),...order.slice(0,rotate)];
    return `<h2>What is the next useful step?</h2><p>Choose the action, then practise the words.</p>${options.map(({o,i}) => `<button class="option ${r.choice===i?(i===n.answer?'correct':'incorrect'):''}" data-coach="choose" data-value="${i}" ${r.choice!==null?'disabled':''}>${esc(o)}</button>`).join('')}${r.choice!==null?`<div class="feedback" role="status"><strong>${r.choice===n.answer?'That addresses the priority.':'Pause and reconsider the priority.'}</strong><p>${esc(n.why)}</p></div><div class="actions">${r.choice===n.answer?action('Now practise the words →','attempt'):action('Choose again','decision-retry','','secondary')}</div>`:''}${n.branch?`<details><summary>${esc(n.branch.label)}</summary><p class="patient-quote">${esc(n.branch.patient)}</p>${action('Use this patient answer →','branch',n.branch.next,'secondary')}</details>`:''}`;
  }
  function attempt(c,r,n) {
    return `<h2>Your turn to speak</h2>${levelButtons()}${support(n,state.coach.level)}${state.coach.level>0?action('Show me the full example','help','','secondary small'):''}<label for="coach-attempt">Optional: write your response to keep it for review</label><textarea id="coach-attempt" data-coach-field="draft" maxlength="6000" placeholder="Use fictional details. Say it aloud first if you can.">${esc(r.draft)}</textarea><label class="check"><input id="coach-spoken" data-coach-field="spoken" type="checkbox" ${r.spoken?'checked':''}><span>I have practised my response aloud.</span></label><div class="actions">${action('I’ve tried — show feedback →','compare')}${action('Listen to the patient','speak','patient','secondary')}</div><p class="tiny">There is no microphone recording or automatic speech grading. A written attempt or your confirmation of spoken practice lets you continue.</p>`;
  }
  function feedback(c,r,n) {
    return `<h2>Compare, then try one improvement</h2>${r.used===0&&state.coach.level>0?'<div class="callout"><strong>A model was opened during this attempt</strong>This attempt is kept as supported practice. You can retry with the words hidden.</div>':''}<p class="tiny">Worked feedback and your own review; wording does not need to match exactly.</p><blockquote class="model">${esc(n.model)}</blockquote><p><strong>Shorter version:</strong> ${esc(n.simple)}</p><p><strong>The clinical decision:</strong> ${esc(n.why)}</p><p><strong>Communication and structure:</strong> ${esc(n.purpose)} ${esc(n.tip)}</p><h3>${c.speaker?esc(c.speaker)+'’s next response':'Patient’s next response'}</h3><blockquote class="patient-quote">${esc(n.reply)}</blockquote><h3>Essential actions to check</h3><p>Tick only what you actually included. An unticked item remains a gap to practise.</p>${n.essential.map((v,i)=>`<label class="check"><input type="checkbox" data-coach-check="${i}" ${r.checks.includes(i)?'checked':''}><span>${esc(v)}</span></label>`).join('')}<h3>One possible improvement</h3>${list(n.improve)}<div class="actions">${action('Repeat this exchange','retry','','secondary')}${action('Try again without prompts','retry-independent','','secondary')}${action(state.coach.examples.includes(c.id+':'+n.id)?'★ Case wording saved':'☆ Keep this case wording','save-example',c.id+':'+n.id,'secondary')}${action('Try this skill with another patient →','transfer','','secondary')}</div><h3>How did this attempt feel?</h3><p class="tiny">The record also includes help used, decision retries and checklist gaps. Seeing a model during an attempt keeps that attempt supported.</p><div class="coach-ratings">${action('I needed the example','finish','again')}${action('I recalled it with a cue','finish','cue')}${action('I recalled it independently','finish','independent')}</div><p class="tiny">Saving a review moves to the next exchange. You can revisit any exchange afterwards.</p>`;
  }
  function timerRemaining(t, now=Date.now()) {return t.running?Math.max(0,Math.ceil((t.deadline-now)/1000)):t.remaining;}
  function timerPanel(r) {return `<details class="coach-timer"><summary>Optional timing · 3-minute reading / 12-minute consultation</summary><p>Start untimed when learning. Timers never hide your work or advance the consultation. Current format checked against <a href="${data.exam.url}" target="_blank" rel="noopener noreferrer">RCGP information</a>.</p><div id="coach-clock" class="timer" role="timer" aria-label="Time remaining">${formatTime(timerRemaining(r.timer))}</div><p>${r.timer.kind==='reading'?'Reading time':'Consultation time'}</p><div class="actions">${action(r.timer.running?'Pause':'Start','timer-toggle','','secondary small')}${action('Reset reading: 3 min','timer-reading','','secondary small')}${action('Reset consultation: 12 min','timer-consultation','','secondary small')}</div></details>`;}
  function contextPath(c,target){
    function walk(id,seen){
      if(id===target)return [];
      if(seen.has(id))return null;
      const n=nodeById(c,id);if(!n)return null;
      const nextSeen=new Set([...seen,id]);
      const edges=[...(n.next?[{id:n.next,answer:n.reply}]:[]),...(n.branch?[{id:n.branch.next,answer:n.branch.patient}]:[])];
      for(const edge of edges){const tail=walk(edge.id,nextSeen);if(tail!==null)return [edge.answer,...tail];}
      return null;
    }
    return walk(c.nodes[0].id,new Set());
  }
  function contextFor(c,n){const facts=contextPath(c,n.id);if(!facts?.length)return '';return `<details class="coach-context"><summary>Case facts before this exchange</summary><p>For targeted replay, these are the supplied answers on an authored route leading to this exchange. Alternative patient answers replace the ordinary answer at that point. They do not replace a full assessment.</p>${list(facts)}</details>`;}
  function session(c) {
    const r=runFor(c), n=nodeById(c,r.node);
    const phase = r.phase;
    return navigation('') + `<a class="back" href="#structure">← All guided consultations</a>` + head(esc(c.category)+' · '+esc(c.patient),esc(c.title),esc(c.brief)) + map(n.stage) + `<div class="coach-layout"><article class="panel coach-exchange"><div class="quick-title"><span class="tag">${esc(data.stages.find(s=>s.id===n.stage).title)} · ${n.id==='urgent'?'Emergency branch':esc(n.id)}</span><span class="tiny">${Object.keys(r.results).length} exchanges reviewed</span></div>${phase==='done'?completion(c,r):`<h2 class="coach-patient-label">${c.speaker?'The '+esc(c.speaker.toLowerCase()):'The patient'} says</h2><blockquote class="patient-quote">${esc(n.patient)}</blockquote>${contextFor(c,n)}${phase==='decide'?assessment(c,r,n):phase==='attempt'?attempt(c,r,n):feedback(c,r,n)}`}</article><aside class="panel coach-sidebar"><h2>Practise a small part</h2><p>Jump to an exchange to replay it. Your previous reviews are kept.</p>${c.nodes.map(x=>`<button class="coach-jump ${x.id===r.node?'active':''}" data-coach="jump" data-value="${x.id}" ${x.id===r.node&&phase!=='done'?'aria-current="step"':''}>${esc(x.title||phraseById(x.phrase).title)}${x.id==='urgent'?' · urgent branch':''}<span>${r.results[x.id]?esc(r.results[x.id].rating==='independent'?'Recalled independently':r.results[x.id].rating==='cue'?'Practised with a cue':'Practised with support'):'Ready to practise'}</span></button>`).join('')}${timerPanel(r)}${links(c)}</aside></div>`;
  }
  function worked(c){noteModelExposure(c,c.nodes.filter(n=>n.id!=='urgent'&&!n.alternative).map(n=>n.id));return navigation('')+`<a class="back" href="${href(c.id)}">← Practise this consultation</a>`+head('WORKED EXAMPLE',esc(c.title),'Read a short exchange, notice its purpose, then practise with less help.')+`<div class="content-narrow"><section class="panel"><p>${esc(c.brief)}</p>${link('Practise this case →',href(c.id))}${links(c)}${c.nodes.some(n=>n.branch)?`<details><summary>Practise alternative patient answers</summary><p>These answers change the authored path. Practise them separately rather than add them to the ordinary conversation.</p>${c.nodes.filter(n=>n.branch).map(n=>`<p><strong>${esc(n.branch.label)}</strong></p><blockquote class="patient-quote">${esc(n.branch.patient)}</blockquote>${action('Open this alternative exchange →','worked-jump',c.id+'|'+n.branch.next,'secondary')}`).join('')}</details>`:''}</section>${c.nodes.filter(n=>n.id!=='urgent'&&!n.alternative).map(n=>`<section class="panel"><span class="tag">${esc(n.stage)} · ${esc(n.title||phraseById(n.phrase).title)}</span><h2>${esc(c.speaker||'Patient')}</h2><blockquote class="patient-quote">${esc(n.patient)}</blockquote><h3>Doctor — one possible response</h3><blockquote class="model">${esc(n.model)}</blockquote><p><strong>Response / supplied facts:</strong> ${esc(n.reply)}</p><p><strong>Why this step matters:</strong> ${esc(n.why)}</p><p><strong>Delivery:</strong> ${esc(n.tip)}</p>${action('Practise this exchange →','worked-jump',c.id+'|'+n.id,'secondary')}</section>`).join('')}</div>`;}
  function completion(c,r) {
    const results=Object.values(r.results), independent=results.filter(x=>x.rating==='independent').length;
    return `<h2>This consultation path is complete.</h2><p>You self-reviewed ${results.length} exchanges; ${independent} were recorded as independent recall. ${r.node==='urgent'?'The emergency branch ends with escalation rather than routine management.':''}</p><div class="callout"><strong>Choose one useful next step</strong>Repeat an exchange with less help, retrieve a sentence after a delay, or use the same skill with a different patient.</div><div class="actions">${action('Practise this case again','restart','','secondary')}${link('Recall a sentence','#structure/review')}${link('Trainer review sheet','#structure/trainer','secondary')}${action('Record one learning point','reflect',c.id,'secondary')}</div><p>Keep or export your work from <a href="#progress">My progress</a>. Practice records are self-reported and are not a clinical grade.</p>`;
  }
  function cardDue(now=Date.now()) {return data.phrases.filter(p=>state.coach.cards[p.id]?.due<=now).sort((a,b)=>state.coach.cards[a.id].due-state.coach.cards[b.id].due);}
  function scheduleCard(old, rating, caseId, now=Date.now()) {
    old=old||{};
    const interval=rating==='again'?0:rating==='cue'?1:Math.min(30,Math.max(3,(old.interval||1)*2));
    return {due:now+(rating==='again'?10*60000:interval*day),interval,reviews:(old.reviews||0)+1,at:now,rating,cases:[...new Set([...(old.cases||[]),...(caseId?[caseId]:[])])]};
  }
  function rateAttempt(r,n,rating) {
    if(r.checks.length<n.essential.length || r.mistake) return 'again';
    if(rating==='independent'&&r.used<3) return r.used===0?'again':'cue';
    if(rating==='cue'&&r.used===0) return 'again';
    return rating;
  }
  let recall=null, onlySaved=false;
  function review() {
    const example=exampleByKey(recall?.exampleKey);const p=example?{...example.n,title:example.n.title||phraseById(example.n.phrase).title,cue:example.n.patient}:phraseById(recall?.id);if(example&&recall?.revealed)noteModelExposure(example.c,[example.n.id]);
    return navigation('review') + head('RETRIEVE BEFORE READING','Bring the sentence back.','Say a response to the situation, then reveal an example. Keep the meaning and adapt the words.') + `<section class="panel content-narrow">${p?`<span class="tag">${esc(p.stage)}</span><h2>${esc(p.title)}</h2><p class="coach-cue">${esc(p.cue)}</p>${recall.revealed?`<blockquote class="model">${esc(p.model)}</blockquote><p><strong>Shorter:</strong> ${esc(p.simple)}</p>${example&&state.coach.exampleNotes[example.key]?.text?`<p class="journal-text"><strong>Your own version:</strong> ${esc(state.coach.exampleNotes[example.key].text)}</p><p class="tiny">Compare your version with the clinical purpose and model; it has not been automatically assessed.</p>`:''}<p>${esc(p.purpose)} ${esc(p.tip)}</p><p>How did you do before opening the example?</p><div class="coach-ratings">${action('Needed the example','recall-rate','again')}${action('Recalled with a cue','recall-rate','cue')}${action('Recalled independently','recall-rate','independent')}</div>`:`<p>Try aloud before revealing. You can also write a private learning attempt in a case exercise.</p>${action('I’ve tried — reveal example','recall-reveal')}`}`:`<h2>${cardDue().length?'Your due sentences are ready.':'Choose a short recall session.'}</h2><p>${cardDue().length} due now. New or not-yet-due sentences can also be practised. Needing an example brings a card back in about 10 minutes; cue-supported recall returns tomorrow; independent recall starts at 3 days and gradually extends to 30.</p>${action('Retrieve one sentence →','recall-start')}`}</section>`;
  }
  function caseSentences(){if(!state.coach.examples.length)return `<section class="panel"><h2>Sentences from your case practice</h2><p>In an exchange’s feedback, choose “Keep this case wording” to save the actual response and practise your own version here.</p></section>`;return `<section class="coach-case-sentences"><h2>Sentences from your case practice</h2><div class="grid two">${state.coach.examples.map(key=>{const {c,n}=exampleByKey(key);noteModelExposure(c,[n.id]);return `<article class="card"><span class="tag">${esc(c.category)} · ${esc(n.stage)}</span><h3>${esc(c.title)}</h3><p>${esc(n.patient)}</p><blockquote class="model">${esc(n.model)}</blockquote><p><strong>Shorter version:</strong> ${esc(n.simple)}</p><p><strong>Keep the purpose:</strong> ${esc(n.purpose)}</p><label for="own-${c.id}-${n.id}">My own clear version</label><textarea id="own-${c.id}-${n.id}" data-coach-example="${key}" maxlength="1500" placeholder="Try your own wording using fictional details, then check the clinical meaning against the model.">${esc(state.coach.exampleNotes[key]?.text||'')}</textarea><p class="tiny">Saved as you type. Your wording is not automatically assessed.</p><div class="actions">${action('Recall this case response','recall-example',key,'secondary')}${action('Practise this exchange','worked-jump',c.id+'|'+n.id,'secondary')}${action('Remove from saved case wording','save-example',key,'secondary')}</div></article>`;}).join('')}</div></section>`;}
  function sentences() {
    return navigation('phrases') + head('YOUR DEPENDABLE SENTENCES','A small collection you can say naturally.','Save sentences that help you. Practise from a situation, then use the skill in a consultation.') + caseSentences()+`<h2>Reusable core and recovery patterns</h2><div class="actions">${action(onlySaved?'Show all core patterns':'Show saved core patterns ('+state.coach.saved.length+')','saved-filter','','secondary')}</div>${onlySaved&&!state.coach.saved.length?'<p>No core patterns saved yet. Show all core patterns to choose a useful example.</p>':''}<div class="grid two coach-core-sentences">${data.phrases.filter(p=>!onlySaved||state.coach.saved.includes(p.id)).map(p=>`<article class="card"><span class="tag">${esc(p.stage)}</span><h2>${esc(p.title)}</h2><p>${esc(p.cue)}</p><blockquote class="model">${esc(p.model)}</blockquote><p><strong>Shorter:</strong> ${esc(p.simple)}</p><p>${esc(p.tip)}</p><div class="actions">${action(state.coach.saved.includes(p.id)?'★ Saved':'☆ Save','save',p.id,'secondary')}${action('Recall this sentence','recall',p.id,'secondary')}<p class="tiny">Practised in ${new Set(state.coach.cards[p.id]?.cases||[]).size} case contexts · ${state.coach.cards[p.id]?.reviews||0} recall / case reviews</p>${link('Use it with a patient',href((data.cases.find(c=>c.nodes.some(n=>n.phrase===p.id))||data.cases[0]).id),'secondary')}</div></article>`).join('')}</div>`;
  }
  function transferTarget(c,n){
    const candidates=data.cases.filter(x=>x.id!==c.id).map(x=>({c:x,n:nodeById(x,n.id)||x.nodes.find(other=>other.phrase===n.phrase&&!other.alternative&&other.id!=='urgent')})).filter(x=>x.n);
    return candidates.filter(x=>{const run=state.coach.runs[x.c.id];return !run||run.complete||!(run.draft?.trim()||run.spoken||run.phase==='feedback');}).sort((a,b)=>(state.coach.runs[a.c.id]?.results[a.n.id]?.at||0)-(state.coach.runs[b.c.id]?.results[b.n.id]?.at||0))[0]||null;
  }
  function recommendation(now=Date.now()){
    const unfinished=data.cases.filter(c=>state.coach.runs[c.id]&&!state.coach.runs[c.id].complete).sort((a,b)=>state.coach.runs[b.id].updated-state.coach.runs[a.id].updated)[0];
    if(unfinished)return {c:unfinished,node:state.coach.runs[unfinished.id].node,resume:true,reason:'Resume the exchange you were working on. Your draft and help level are kept.'};
    const weak=[];for(const c of data.cases)for(const [id,r]of Object.entries(state.coach.runs[c.id]?.results||{}))if(r.rating!=='independent'){const n=nodeById(c,id);weak.push({c,node:id,result:r,gap:r.checks.length<n.essential.length||r.mistake});}
    weak.sort((a,b)=>a.result.at-b.result.at);
    const due=weak.filter(w=>w.result.at+(w.result.rating==='again'?600000:86400000)<=now);
    if(due.length){const w=due[0];return {...w,level:w.gap?0:Math.min(3,w.result.support+1),reason:w.gap?'This exchange is due after a delay and had an essential-action gap. Revisit the explanation, then try again.':'This supported exchange is due after a delay. Try one fewer level of help; request more whenever you need it.'};}
    const next=data.cases.find(c=>!state.coach.runs[c.id]?.complete);if(next)return {c:next,node:next.nodes[0].id,level:state.coach.level,reason:'Try a new consultation, or start with just two exchanges. Supported exchanges will return after a delay.'};
    if(weak.length){const w=weak[0],target=transferTarget(w.c,nodeById(w.c,w.node));if(target)return {c:target.c,node:target.n.id,level:w.gap?0:Math.min(3,w.result.support+1),reason:'Your supported exchanges are not due yet. Use the same purpose with a different patient now, then revisit the earlier attempt after a delay.'};}
    const optional=data.cases.slice().sort((a,b)=>(state.coach.runs[a.id]?.updated||0)-(state.coach.runs[b.id]?.updated||0))[0];return {c:optional,node:optional.nodes[0].id,level:state.coach.level,reason:'Choose an optional fresh run in a less recently practised case. Practice records do not establish readiness.'};
  }
  function daily() {
    const suggestion=recommendation(), next=suggestion.c;
    return navigation('daily') + head('A GUIDED 15–20 MINUTE SESSION','Tell me what to practise today.','Work through these four activities at your pace. Your consultation position and reviews are saved.') + `<div class="content-narrow">${window.CoachLearning.daily()}<section class="panel"><span class="tag">1 · RETRIEVE · ABOUT 3 MINUTES</span><h2>Recall a few familiar sentences</h2><p>${cardDue().length} sentences due now. Try up to three situations aloud before revealing the examples.</p>${link('Begin recall →','#structure/review')}</section><section class="panel"><span class="tag">2 · LEARN AND REHEARSE · ABOUT 6 MINUTES</span><h2>${esc(next.title)}</h2><p>${esc(suggestion.reason)}</p><p>Work through two or three exchanges. Use “Teach me” whenever you need exact wording.</p>${link('Learn the sentences for this stage first','#structure/stage/'+nodeById(next,suggestion.node).stage,'secondary')}${action('Guide me through my next practice →','guided-next')}</section><section class="panel"><span class="tag">3 · REPEAT AND TRANSFER · ABOUT 6 MINUTES</span><h2>Change one thing, then try again</h2><p>Replay the hardest exchange with fewer prompts. Then practise the same purpose with a different patient.</p>${link('Choose a different consultation','#structure','secondary')}${link('Practise a condition-specific discussion','clinical/#discussion','secondary')}</section><section class="panel"><span class="tag">4 · REFLECT · ABOUT 2 MINUTES</span><h2>One improvement to carry forward</h2><label for="coach-reflection">What will you do differently next time?</label><textarea id="coach-reflection" data-coach-field="reflection" maxlength="3000" placeholder="For example: ask what makes the referral difficult, then address that barrier.">${esc(state.coach.reflection)}</textarea><p class="tiny">Saved as you type in this browser. Export a studio backup to move it to another device.</p>${link('See my sentences','#structure/phrases','secondary')}</section></div>`;
  }
  function trainer() {
    return navigation('trainer') + head('OBSERVED PRACTICE','A conversation with your trainer.','Use one specific example and one next practice task. This sheet is an educational guide, not an official marking scheme.') + `<section class="panel coach-print"><h2>Consultation review sheet</h2><p>Case / date: ____________________ &nbsp; Observer: ____________________</p>${[['Data gathering and diagnosis',['Identified the agenda and relevant context.','Asked focused questions, followed up important answers and assessed urgency.','Explained the working assessment and remaining uncertainty.']],['Clinical management and medical complexity',['Recommended appropriate next steps and discussed relevant options.','Addressed barriers, competing priorities and treatment burden.','Made safety advice, follow-up and responsibility specific.']],['Relating to others',['Listened and responded to this patient’s concerns and emotions.','Used clear language, manageable chunks and checked understanding.','Involved the patient while keeping necessary clinical recommendations clear.']]].map(([title,items])=>`<h3>${title}</h3>${list(items)}<p>Observed example / gap: __________________________________________________</p>`).join('')}<h3>Next practice task</h3><p>Keep: __________________________________________________________________</p><p>Change: _________________________________________________________________</p><p>Repeat with a different patient / review date: __________________________________</p><div class="actions">${action('Print this sheet','print','','secondary')}</div><p>Use current <a href="https://www.rcgp.org.uk/mrcgp-exams/simulated-consultation-assessment" target="_blank" rel="noopener noreferrer">RCGP SCA information</a> alongside observed practice.</p></section>`;
  }
  function page(parts) {
    ensure();
    if(parts[0]==='worked'&&caseById(parts[1]))return worked(caseById(parts[1]));
    if(parts[0]==='stages')return stages();
    if(parts[0]==='stage')return stagePage(parts[1]);
    if(parts[0]==='case') return caseById(parts[1])?session(caseById(parts[1])):head('CASE NOT FOUND','Choose a guided consultation.','This case is not available.',link('Open the coach','#structure'));
    if(parts[0]==='learning')return navigation('learning')+window.CoachLearning.page(parts[1]);
    if(parts[0]==='daily') return daily();
    if(parts[0]==='phrases') return sentences();
    if(parts[0]==='review') return review();
    if(parts[0]==='trainer') return trainer();
    return overview();
  }
  function active() {const parts=location.hash.slice(1).split('/');const c=parts[0]==='structure'&&parts[1]==='case'?caseById(parts[2]):null;return c?{c,r:runFor(c),n:nodeById(c,runFor(c).node)}:null;}
  function repaint(focus=false) {const y=window.scrollY;render();if(focus){const panel=$('.coach-exchange')||$('#main');panel.setAttribute('tabindex','-1');panel.focus({preventScroll:true});panel.scrollIntoView({block:'start'});}else window.scrollTo(0,y);}
  function focusAction(type,value){document.querySelector(`[data-coach="${type}"][data-value="${value}"]`)?.focus({preventScroll:true});}
  function gotoExchange(c,r,id,independent=false) {const next=fresh(c,id,r);if(independent){state.coach.level=3;next.used=3;}state.coach.runs[c.id]=next;store();repaint(true);}
  function speak(words) {
    if(!window.speechSynthesis || typeof SpeechSynthesisUtterance==='undefined') {toast('Audio is unavailable. Use the written exchange.');return;}
    speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(words); utterance.lang='en-GB';utterance.rate=.9;
    const voice=speechSynthesis.getVoices().find(v=>v.lang==='en-GB');if(voice)utterance.voice=voice;
    utterance.onerror=()=>toast('Audio could not play. The written exchange is available.');speechSynthesis.speak(utterance);
  }
  function handle(type,value) {
    ensure(); const a=active(); const {c,r,n}=a||{};
    if(['stage-reveal','stage-hide'].includes(type)){const [id,index]=value.split(':');const lesson=data.stageLessons.find(s=>s.id===id);if(!lesson||!/^\d+$/.test(index)||!lesson.answers[Number(index)])return;const key=id+':'+Number(index);if(type==='stage-reveal')stageReveals.add(key);else stageReveals.delete(key);repaint();focusAction(type==='stage-reveal'?'stage-hide':'stage-reveal',key);return;}
    if(type==='example-speak'&&exampleByKey(value)){const example=exampleByKey(value);noteModelExposure(example.c,[example.n.id]);speak(example.n.model);return;}
    if(type==='stage-speak'){const [id,kind,index]=value.split(':');const lesson=data.stageLessons.find(s=>s.id===id);if(!lesson||!/^\d+$/.test(index))return;const item=(kind==='move'?lesson.moves:kind==='answer'?lesson.answers:[])[Number(index)];if(item)speak(kind==='move'?item.model:item.response);return;}
    if(type==='level') {window.speechSynthesis?.cancel();stageReveals.clear();state.coach.level=Math.floor(num(Number(value),0,3));if(r&&r.phase==='attempt'){r.used=Math.min(r.used,state.coach.level);r.updated=Date.now();}store();repaint();focusAction('level',String(state.coach.level));return;}
    if(type==='save-example'&&exampleByKey(value)){state.coach.examples=state.coach.examples.includes(value)?state.coach.examples.filter(x=>x!==value):[...state.coach.examples,value];store();repaint();return;}
    if(type==='recall-example'&&exampleByKey(value)){const example=exampleByKey(value);recall={id:example.n.phrase,exampleKey:value,revealed:false};location.hash='structure/review';repaint();return;}
    if(type==='save'&&phraseById(value)) {state.coach.saved=state.coach.saved.includes(value)?state.coach.saved.filter(x=>x!==value):[...state.coach.saved,value];store();repaint();return;}
    if(type==='recall'&&phraseById(value)) {recall={id:value,revealed:false};location.hash='structure/review';if(currentView==='structure')repaint();return;}
    if(type==='recall-start') {const candidates=cardDue(); const p=candidates[0]||data.phrases.find(p=>!state.coach.cards[p.id])||data.phrases.slice().sort((a,b)=>state.coach.cards[a.id].at-state.coach.cards[b.id].at)[0];recall={id:p.id,revealed:false};repaint();return;}
    if(type==='recall-reveal'&&recall) {recall.revealed=true;repaint();return;}
    if(type==='recall-rate'&&recall?.revealed&&['again','cue','independent'].includes(value)) {state.coach.cards[recall.id]=scheduleCard(state.coach.cards[recall.id],value,exampleByKey(recall.exampleKey)?.c.id);store();recall=null;repaint();toast('Recall saved. Choose another situation when ready.');return;}
    if(type==='guided-next'){const suggestion=recommendation();if(!suggestion.resume){state.coach.level=suggestion.level;state.coach.runs[suggestion.c.id]=fresh(suggestion.c,suggestion.node,state.coach.runs[suggestion.c.id]);}store();location.hash='structure/case/'+suggestion.c.id;return;}
    if(type==='reflect'&&caseById(value)){state.coach.learning.draft.caseId=value;store();location.hash='structure/learning';return;}
    if(type==='worked-jump'){const [id,node]=value.split('|');const target=caseById(id);if(!target||!nodeById(target,node))return;state.coach.runs[id]=fresh(target,node,state.coach.runs[id]);store();location.hash='structure/case/'+id;return;}
    if(type==='saved-filter'){onlySaved=!onlySaved;repaint();return;}
    if(type==='mixed'){const candidates=data.cases.filter(c=>c.id!==value);const next=candidates[Math.floor(Math.random()*candidates.length)];location.hash='structure/case/'+next.id;return;}
    if(type==='print') {window.print();return;}
    if(type==='stop') {if('speechSynthesis'in window)speechSynthesis.cancel();return;}
    if(!a)return;
    if(type==='transfer'){const next=transferTarget(c,n);if(!next){toast('The other suitable cases have unfinished attempts. Resume one from the coach; your drafts have been kept.');return;}state.coach.runs[next.c.id]=fresh(next.c,next.n.id,state.coach.runs[next.c.id]);store();location.hash='structure/case/'+next.c.id;return;}
    if(type==='choose'&&r.phase==='decide'&&r.choice===null) {const choice=Number(value);if(!Number.isInteger(choice)||choice<0||choice>=n.options.length)return;r.choice=choice;if(choice!==n.answer)r.mistake=true;}
    else if(type==='decision-retry'&&r.phase==='decide'){r.choice=null;}
    else if(type==='decision-help'&&r.phase==='decide'){r.choicesShown=true;r.decisionHelp=true;}
    else if(type==='unprompted'&&r.phase==='decide'&&state.coach.level===3&&!r.choicesShown){r.phase='attempt';r.used=3;}
    else if(type==='attempt'&&r.phase==='decide'&&r.choice===n.answer){r.phase='attempt';r.used=r.decisionHelp?Math.min(2,state.coach.level):state.coach.level;}
    else if(type==='help'&&r.phase==='attempt'){state.coach.level=0;r.used=0;}
    else if(type==='compare'&&r.phase==='attempt'){if(!r.draft.trim()&&!r.spoken){toast('Try aloud and tick the confirmation, or write your response first.');return;}r.phase='feedback';}
    else if(type==='finish'&&r.phase==='feedback'&&['again','cue','independent'].includes(value)) {
      const rating=rateAttempt(r,n,value);const now=Date.now();
      r.results[n.id]={at:now,rating,support:r.used,checks:[...r.checks],attempt:r.draft,mistake:r.mistake};
      state.coach.cards[n.phrase]=scheduleCard(state.coach.cards[n.phrase],rating,c.id,now);
      if(n.next){state.coach.runs[c.id]=fresh(c,n.next,r);}else{r.complete=true;r.phase='done';r.timer.remaining=timerRemaining(r.timer);r.timer.running=false;}
      if(rating!==value)toast('Saved with the help used or gaps recorded. Replay it to practise independently.');
    }
    else if(type==='retry'||type==='retry-independent'){const next=fresh(c,n.id,r);next.phase='attempt';if(type==='retry-independent'){state.coach.level=3;next.used=3;}state.coach.runs[c.id]=next;}
    else if(type==='jump'&&nodeById(c,value)){gotoExchange(c,r,value);return;}
    else if(type==='restart'){gotoExchange(c,r,c.nodes[0].id);return;}
    else if(type==='branch'&&n.branch?.next===value){gotoExchange(c,r,value);return;}
    else if(type==='speak-line'){const line=sentenceParts(n.model)[Number(value)];if(!line)return;r.used=0;r.updated=Date.now();store();speak(line);return;}
    else if(type==='speak'){if(value==='model'){r.used=0;store();}speak(value==='patient'?n.patient:n.model);return;}
    else if(type==='timer-toggle'){const t=r.timer;if(t.running){t.remaining=timerRemaining(t);t.running=false;}else{if(timerRemaining(t)<=0)t.remaining=data.exam[t.kind];t.deadline=Date.now()+t.remaining*1000;t.running=true;}}
    else if(type==='timer-reading'||type==='timer-consultation'){const kind=type==='timer-reading'?'reading':'consultation';r.timer={kind,remaining:data.exam[kind],running:false,deadline:0};}
    else return;
    const current=state.coach.runs[c.id];current.updated=Date.now();store();repaint(['attempt','unprompted','compare','finish','retry','retry-independent','decision-retry'].includes(type));
  }
  document.addEventListener('click',e=>{const button=e.target.closest('[data-coach]');if(button)handle(button.dataset.coach,button.dataset.value);});
  document.addEventListener('input',e=>{
    const example=e.target.dataset.coachExample;if(example&&exampleByKey(example)){ensure();state.coach.exampleNotes[example]={text:e.target.value.slice(0,1500),at:Date.now()};store();return;}
    const field=e.target.dataset.coachField;if(!field)return;
    ensure();if(field==='reflection'){state.coach.reflection=e.target.value.slice(0,3000);store();return;}
    const a=active();if(!a)return;
    if(field==='draft')a.r.draft=e.target.value.slice(0,6000);
    if(field==='spoken')a.r.spoken=e.target.checked;
    a.r.updated=Date.now();store();
  });
  document.addEventListener('change',e=>{
    if(e.target.dataset.coachCheck===undefined)return;const a=active();if(!a||a.r.phase!=='feedback')return;
    const index=Number(e.target.dataset.coachCheck);if(!Number.isInteger(index)||index<0||index>=a.n.essential.length)return;
    a.r.checks=e.target.checked?[...new Set([...a.r.checks,index])]:a.r.checks.filter(x=>x!==index);a.r.updated=Date.now();store();
  });
  window.addEventListener('hashchange',()=>window.speechSynthesis?.cancel());
  setInterval(()=>{const a=active(), el=$('#coach-clock');if(a&&el)el.textContent=formatTime(timerRemaining(a.r.timer));},1000);
  return {defaults,clean,merge,page,banner,handle,contextPath,scheduleCard,rateAttempt,timerRemaining,recommendation,transferTarget,sentenceParts,levels};
})();
