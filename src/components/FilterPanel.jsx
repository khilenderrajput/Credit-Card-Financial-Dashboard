import { FIELDS } from '../hooks/useDashboard';

export default function FilterPanel({ filters, options, toggle, setOne, reset, activeCount }) {
  return (
    <div className="filters">
      <div className="filters-head"><h4>Filters</h4><button className="link" disabled={!activeCount} onClick={reset}>Reset{activeCount ? ` (${activeCount})` : ''}</button></div>
      {FIELDS.map((f) => (
        <div className="slicer" key={f.key}>
          <label>{f.label}</label>
          {f.type === 'select' ? (
            <select value={(filters[f.key] || [])[0] || ''} onChange={(e) => setOne(f.key, e.target.value)}>
              <option value="">All</option>
              {(options[f.key] || []).map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : (
            <div className="chips">
              {(options[f.key] || []).map((o) => (
                <button key={o} className={(filters[f.key] || []).includes(o) ? 'chip on' : 'chip'} onClick={() => toggle(f.key, o)}>{o}</button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
