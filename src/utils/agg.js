export const sum = (rows, f) => { let t = 0; for (const r of rows) t += typeof f === 'function' ? f(r) : r[f]; return t; };
export const fmtM = (v) => { const a = Math.abs(v); return a >= 1e6 ? (v / 1e6).toFixed(a >= 1e8 ? 0 : 1) + 'M' : a >= 1e3 ? (v / 1e3).toFixed(1) + 'K' : Math.round(v).toString(); };
export const fmtInt = (v) => Math.round(v).toLocaleString('en-US');
export const fmtDec = (v) => v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const pct = (v, d = 2) => (v * 100).toFixed(d) + '%';

/** [{name, value}] of `val` summed per `key`; sorted desc unless `order` is given. */
export function series(rows, key, val = 'rev', order, limit) {
  const m = new Map();
  for (const r of rows) m.set(r[key], (m.get(r[key]) || 0) + (typeof val === 'function' ? val(r) : r[val]));
  let out = [...m].map(([name, value]) => ({ name: String(name), value }));
  out = order ? order.map((o) => out.find((x) => x.name === String(o))).filter(Boolean) : out.sort((a, b) => b.value - a.value);
  return limit ? out.slice(0, limit) : out;
}
/** Same, but split by gender -> [{name, F, M, value}] */
export function stacked(rows, key, order, limit) {
  const m = new Map();
  for (const r of rows) {
    const o = m.get(r[key]) || { name: String(r[key]), F: 0, M: 0, value: 0 };
    if (r.gender === 'F' || r.gender === 'M') o[r.gender] += r.rev;
    o.value += r.rev; m.set(r[key], o);
  }
  let out = [...m.values()];
  out = order ? order.map((k) => out.find((x) => x.name === String(k))).filter(Boolean) : out.sort((a, b) => b.value - a.value);
  return limit ? out.slice(0, limit) : out;
}
