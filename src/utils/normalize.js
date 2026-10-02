// Pure data layer: raw CSV rows -> clean, joined, enriched records. No browser APIs (also used by scripts/verify.mjs).
const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
const str = (v, d = 'Unknown') => { const s = (v ?? '').toString().trim(); return s || d; };

// Accepts dd-mm-yyyy (credit_card.csv) and yyyy-mm-dd (supplement file); returns ISO string or null.
export function toISO(s) {
  s = (s ?? '').toString().trim();
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = s.match(/^(\d{2})[-/](\d{2})[-/](\d{4})/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
}
export const ageGroup = (a) => (a < 30 ? '20-30' : a < 40 ? '30-40' : a < 50 ? '40-50' : a < 60 ? '50-60' : '60+');
export const incomeGroup = (i) => (i < 35000 ? 'Low' : i < 70000 ? 'Medium' : 'High');

export function normalize(creditRows, custRows) {
  const cust = new Map();
  for (const r of custRows) { const id = num(r.Client_Num); if (id) cust.set(id, r); }
  const uniq = new Map();
  let invalid = 0;
  for (const r of creditRows) {
    const id = num(r.Client_Num);
    if (!id) { invalid++; continue; }
    uniq.set(id, r); // duplicate Client_Num -> last record wins
  }
  let unmatched = 0, badDates = 0;
  const rows = [];
  for (const [id, r] of uniq) {
    const c = cust.get(id);
    if (!c) unmatched++;
    const date = toISO(r.Week_Start_Date);
    if (!date) badDates++;
    const fees = num(r.Annual_Fees), amt = num(r.Total_Trans_Amt), int = num(r.Interest_Earned);
    const age = c ? num(c.Customer_Age) : 0, income = c ? num(c.Income) : 0;
    const wkLabel = str(r.Week_Num, 'Week-0');
    rows.push({
      id, card: str(r.Card_Category), fees, act: num(r.Activation_30_Days), acq: num(r.Customer_Acq_Cost),
      date: date || 'Invalid', week: wkLabel, wk: num(wkLabel.replace(/\D/g, '')), qtr: str(r.Qtr),
      limit: num(r.Credit_Limit), bal: num(r.Total_Revolving_Bal), amt, ct: num(r.Total_Trans_Ct ?? r.Total_Trans_Vol),
      util: num(r.Avg_Utilization_Ratio), chip: str(r['Use Chip'] ?? r.Use_Chip), exp: str(r['Exp Type'] ?? r.Exp_Type),
      int, delq: num(r.Delinquent_Acc),
      rev: fees + amt + int, // Revenue = Annual fees + transaction amount + interest earned
      gender: c ? str(c.Gender) : 'Unknown', ageNum: age, age: age ? ageGroup(age) : 'Unknown',
      dep: c ? num(c.Dependent_Count) : 0, edu: c ? str(c.Education_Level) : 'Unknown',
      marital: c ? str(c.Marital_Status) : 'Unknown', state: c ? str(c.state_cd) : 'Unknown',
      job: c ? str(c.Customer_Job) : 'Unknown', income, incomeG: c ? incomeGroup(income) : 'Unknown',
      sat: c ? num(c.Cust_Satisfaction_Score) : 0,
    });
  }
  return { rows, stats: { creditRaw: creditRows.length, customers: cust.size, duplicates: creditRows.length - invalid - uniq.size, invalid, unmatched, badDates } };
}
