import { useState } from 'react';
import { useDashboard } from './hooks/useDashboard';
import FilterPanel from './components/FilterPanel';
import { EmptyState } from './components/ui';
import { fmtInt } from './utils/agg';
import WeeklyPage from './pages/WeeklyPage';
import TransactionPage from './pages/TransactionPage';
import CustomerPage from './pages/CustomerPage';

const PAGES = [
  { id: 'weekly', label: 'Weekly Analysis', title: 'Weekly Performance Report', Comp: WeeklyPage },
  { id: 'txn', label: 'Transaction Report', title: 'Credit Card Transaction Report', Comp: TransactionPage },
  { id: 'cust', label: 'Customer Report', title: 'Credit Card Customer Report', Comp: CustomerPage },
];

export default function App() {
  const d = useDashboard();
  const [page, setPage] = useState('txn');
  const [showFilters, setShowFilters] = useState(typeof window !== 'undefined' && window.innerWidth > 900);
  const cur = PAGES.find((p) => p.id === page);

  return (
    <div className={`app theme-${page}`}>
      <aside className="side">
        <div className="brand"><span className="logo">◐</span><div><b>CardLens</b><small>Credit Card Analytics</small></div></div>
        <nav>{PAGES.map((p) => <button key={p.id} className={p.id === page ? 'nav on' : 'nav'} onClick={() => setPage(p.id)}>{p.label}</button>)}</nav>
        <button className="btn ghost toggle" onClick={() => setShowFilters((s) => !s)}>{showFilters ? 'Hide' : 'Show'} filters{d.activeCount ? ` (${d.activeCount})` : ''}</button>
        {showFilters && !d.loading && !d.error && <FilterPanel {...d} />}
      </aside>
      <main>
        <header className="top">
          <h1>{cur.title}</h1>
          {!d.loading && !d.error && (
            <div className="meta">
              <span className="pill">{fmtInt(d.filtered.length)} / {fmtInt(d.rows.length)} records</span>
              {d.activeCount > 0 && <button className="btn" onClick={d.reset}>Reset filters</button>}
            </div>
          )}
        </header>
        {d.loading && <div className="state"><div className="spin" /><p>Loading and joining CSV data…</p></div>}
        {d.error && <div className="state err"><h2>Could not load data</h2><p>{d.error}</p></div>}
        {!d.loading && !d.error && (d.filtered.length === 0
          ? <EmptyState onReset={d.reset} />
          : <cur.Comp rows={d.filtered} filters={d.filters} toggle={d.toggle} />)}
        {d.stats && <footer>Data: {fmtInt(d.rows.length)} unique accounts joined to {fmtInt(d.stats.customers)} customer profiles · {d.stats.duplicates} duplicates dropped · {d.stats.unmatched} unmatched · {d.stats.badDates} invalid dates</footer>}
      </main>
    </div>
  );
}
