import { fmtM, fmtInt } from '../utils/agg';

export const Panel = ({ title, children, span = 6, className = '', right }) => (
  <section className={`panel s${span} ${className}`}>
    {title && <header><h3>{title}</h3>{right}</header>}
    {children}
  </section>
);

export const Kpi = ({ label, value, sub, exact }) => (
  <div className="kpi" title={exact}>
    <span>{label}</span><strong>{value}</strong>{sub && <em>{sub}</em>}
  </div>
);

export const EmptyState = ({ onReset }) => (
  <div className="empty">
    <div className="empty-icon">∅</div>
    <h2>No records match these filters</h2>
    <p>Try removing a filter or reset everything to see the full dataset again.</p>
    <button className="btn" onClick={onReset}>Reset all filters</button>
  </div>
);

/** Generic table. cols: [{h, k|f, align, fmt}] ; total: optional footer cells */
export function Table({ cols, data, total, maxH = 260 }) {
  return (
    <div className="tbl" style={{ maxHeight: maxH }}>
      <table>
        <thead><tr>{cols.map((c) => <th key={c.h} className={c.n ? 'n' : ''}>{c.h}</th>)}</tr></thead>
        <tbody>{data.map((r, i) => <tr key={i}>{cols.map((c) => <td key={c.h} className={c.n ? 'n' : ''}>{c.f(r)}</td>)}</tr>)}</tbody>
        {total && <tfoot><tr>{total.map((t, i) => <td key={i} className={cols[i].n ? 'n' : ''}>{t}</td>)}</tr></tfoot>}
      </table>
    </div>
  );
}

/** Proportional tile strip (like the Power BI treemap/slicer tiles). Optional click-to-filter. */
export function Tiles({ items, selected = [], onClick }) {
  return (
    <div className="tiles">
      {items.map((t, i) => (
        <button key={t.name} style={{ flex: t.weight || 1, opacity: selected.length && !selected.includes(t.name) ? 0.45 : 1 }} className={`tile t${i % 4}`} onClick={() => onClick && onClick(t.name)}>
          <b>{t.name}</b>{t.value != null && <span>{t.value}</span>}
        </button>
      ))}
    </div>
  );
}
export { fmtM, fmtInt };
