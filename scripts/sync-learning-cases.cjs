// Keep the small studio case picker aligned with the published Atlas.
// Run with --write after changing the Atlas; validation only checks for drift.
const fs = require('fs'), vm = require('vm'), assert = require('assert/strict'), path = require('path');
process.chdir(path.resolve(__dirname, '..'));
const ctx = {window: {}};
vm.createContext(ctx);
for (const file of ['clinical/catalogue.js', 'coach-data.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
const index = ctx.window.CLINICAL_ATLAS.flatMap(area => area.cases.map(c => ({
  id: 'atlas:' + c.id, title: c.title, areaId: area.id, areaTitle: area.title
})));
if (process.argv.includes('--write')) {
  ctx.window.SCA_COACH.atlasCases = index;
  fs.writeFileSync('coach-data.js', "'use strict';\nwindow.SCA_COACH = " + JSON.stringify(ctx.window.SCA_COACH, null, 2) + ';\n');
} else {
  assert.equal(JSON.stringify(ctx.window.SCA_COACH.atlasCases), JSON.stringify(index), 'Atlas learning picker is out of date. Run node scripts/sync-learning-cases.cjs --write.');
  console.log(`PASS: learning picker matches all ${index.length} published Atlas cases.`);
}
