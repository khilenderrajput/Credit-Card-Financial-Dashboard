import { useEffect, useMemo, useState, useCallback } from 'react';
import { loadAll } from '../utils/data';

export const FIELDS = [
  { key: 'date', label: 'Week Start Date', type: 'select' },
  { key: 'gender', label: 'Gender' },
  { key: 'card', label: 'Card Category' },
  { key: 'incomeG', label: 'Income Group' },
  { key: 'chip', label: 'Expenditure Type' },
  { key: 'qtr', label: 'Quarter' },
  { key: 'exp', label: 'Spend Category' },
  { key: 'age', label: 'Age Group' },
  { key: 'edu', label: 'Education' },
  { key: 'job', label: 'Customer Job' },
  { key: 'marital', label: 'Marital Status' },
  { key: 'state', label: 'State', type: 'select' },
];
const ORDER = { incomeG: ['Low', 'Medium', 'High'], age: ['20-30', '30-40', '40-50', '50-60', '60+'] };

export function useDashboard() {
  const [data, setData] = useState({ loading: true, error: null, rows: [], stats: null });
  const [filters, setFilters] = useState({});

  useEffect(() => {
    let live = true;
    loadAll()
      .then((d) => live && setData({ loading: false, error: null, ...d }))
      .catch((e) => live && setData({ loading: false, error: e.message || 'Failed to load CSV data', rows: [], stats: null }));
    return () => { live = false; };
  }, []);

  const options = useMemo(() => {
    const o = {};
    for (const f of FIELDS) {
      const vals = [...new Set(data.rows.map((r) => r[f.key]))];
      o[f.key] = ORDER[f.key] ? ORDER[f.key].filter((v) => vals.includes(v)) : vals.sort();
    }
    return o;
  }, [data.rows]);

  const filtered = useMemo(() => {
    const active = Object.entries(filters).filter(([, v]) => v.length).map(([k, v]) => [k, new Set(v)]);
    return active.length ? data.rows.filter((r) => active.every(([k, s]) => s.has(r[k]))) : data.rows;
  }, [data.rows, filters]);

  const toggle = useCallback((k, v) => setFilters((f) => { const c = f[k] || []; return { ...f, [k]: c.includes(v) ? c.filter((x) => x !== v) : [...c, v] }; }), []);
  const setOne = useCallback((k, v) => setFilters((f) => ({ ...f, [k]: v ? [v] : [] })), []);
  const reset = useCallback(() => setFilters({}), []);
  const activeCount = Object.values(filters).filter((v) => v.length).length;

  return { ...data, filtered, filters, options, toggle, setOne, reset, activeCount };
}
