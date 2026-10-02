// Node check: parses the same CSVs through the same normalize() and prints headline numbers to compare with the Power BI PDF.
import fs from 'fs'; import Papa from 'papaparse'; import { normalize } from '../src/utils/normalize.js';
const rd = (f) => Papa.parse(fs.readFileSync(`public/data/${f}`, 'utf8'), { header: true, skipEmptyLines: true, transformHeader: (h) => h.trim() }).data;
const { rows, stats } = normalize([...rd('credit_card.csv'), ...rd('credit_card_mysql_ready_uploaded.csv')], [...rd('customer.csv'), ...rd('cust_add.csv')]);
const s = (f, k) => rows.filter(f).reduce((a, r) => a + r[k], 0);
const chk = (n, v, exp, tol = 1) => console.log(`${Math.abs(v - exp) <= tol ? 'PASS' : 'FAIL'}  ${n}: ${v.toFixed(2)} (PDF ${exp})`);
console.log(stats);
chk('Revenue', s(() => 1, 'rev'), 56517011, 1); chk('Amount', s(() => 1, 'amt'), 45533021); chk('Count', s(() => 1, 'ct'), 667234, 1);
chk('Interest', s(() => 1, 'int'), 7982479.81, 0.05); chk('Income (PDF double-counts cust_add by 11,685,344)', s(() => 1, 'income') + 11685344, 599285127);
chk('Blue rev', s((r) => r.card === 'Blue', 'rev'), 47188612); chk('Q4 rev', s((r) => r.qtr === 'Q4', 'rev'), 14496601, 1);
chk('Week-1 rev', s((r) => r.wk === 1, 'rev'), 1035629.32, 0.01); chk('Week-53 rev', s((r) => r.wk === 53, 'rev'), 1201600.58, 0.01); chk('Week-52 rev', s((r) => r.wk === 52, 'rev'), 933134.43, 0.01);
chk('Activation %', 100 * s(() => 1, 'act') / rows.length, 57.46, 0.01); chk('Male rev', s((r) => r.gender === 'M', 'rev'), 30929734, 1);
chk('Businessman rev', s((r) => r.job === 'Businessman', 'rev'), 17697472, 1); chk('High-income rev', s((r) => r.incomeG === 'High', 'rev'), 29841026, 1);
