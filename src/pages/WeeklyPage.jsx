import { useMemo } from 'react';
import { Panel, Kpi, Table } from '../components/ui';
import { BarH, Lines } from '../components/charts';
import { sum, series, fmtM, fmtInt, fmtDec, pct } from '../utils/agg';

export default function WeeklyPage({ rows, filters, toggle }) {
  const weeks = useMemo(() => {
    const m = new Map();
    for (const r of rows) { const w = m.get(r.wk) || { wk: r.wk, name: r.week, n: 0, rev: 0, amt: 0 }; w.n++; w.rev += r.rev; w.amt += r.amt; m.set(r.wk, w); }
    const a = [...m.values()].sort((x, y) => x.wk - y.wk);
    return a.map((w, i) => ({ ...w, prev: i ? a[i - 1].rev : null, wow: i && a[i - 1].rev ? w.rev / a[i - 1].rev - 1 : null }));
  }, [rows]);
  const last = weeks[weeks.length - 1];
  const jobs = useMemo(() => {
    const m = new Map(); const dTot = sum(rows, 'delq');
    for (const r of rows) { const j = m.get(r.job) || { job: r.job, n: 0, d: 0 }; j.n++; j.d += r.delq; m.set(r.job, j); }
    return [...m.values()].sort((a, b) => b.n - a.n).map((j) => ({ ...j, share: j.n / rows.length, dShare: dTot ? j.d / dTot : 0, rate: j.n ? j.d / j.n : 0 }));
  }, [rows]);
  const act = [0, 1].map((v) => { const n = rows.filter((r) => r.act === v).length; return { v, n, p: n / rows.length }; });
  const delqTotal = sum(rows, 'delq');

  return (
    <>
      <div className="kpis">
        <Kpi label="Latest Week Revenue" value={fmtM(last.rev)} sub={last.name} exact={fmtInt(last.rev)} />
        <Kpi label="Week-over-Week" value={last.wow == null ? '—' : (last.wow >= 0 ? '+' : '') + pct(last.wow, 1)} sub={`vs ${fmtM(last.prev || 0)} prior week`} />
        <Kpi label="Activation (30 days)" value={pct(act[1].p, 1)} sub={`${fmtInt(act[1].n)} activated cards`} />
        <Kpi label="Delinquent Accounts" value={fmtInt(delqTotal)} sub={`${pct(delqTotal / rows.length, 1)} of accounts`} />
      </div>
      <div className="grid">
        <Panel title="Week-over-Week Revenue" span={12}>
          <Table maxH={250}
            cols={[{ h: 'Week_Num', f: (r) => r.name }, { h: 'Records', n: 1, f: (r) => fmtInt(r.n) }, { h: 'Sum of Revenue', n: 1, f: (r) => fmtInt(r.rev) },
              { h: 'Previous_week_Revenue', n: 1, f: (r) => (r.prev == null ? '' : fmtDec(r.prev)) }, { h: 'Current_week_Revenue', n: 1, f: (r) => fmtDec(r.rev) },
              { h: 'wow_revenue', n: 1, f: (r) => (r.wow == null ? '' : <span className={r.wow < 0 ? 'neg' : 'pos'}>{r.wow.toFixed(2)}</span>) }]}
            data={weeks}
            total={['Total (latest week)', fmtInt(rows.length), fmtInt(sum(rows, 'rev')), fmtDec(last.prev || 0), fmtDec(last.rev), last.wow == null ? '' : last.wow.toFixed(2)]} />
        </Panel>
        <Panel title="Sum of Total_Trans_Amt by Week" span={7}><Lines data={weeks} xKey="wk" lines={[{ key: 'amt', name: 'Transaction amount', color: '#118dff' }]} xFmt={(v) => `W${v}`} h={260} /></Panel>
        <Panel title="Delinquency & Customer Job mix" span={5}>
          <Table maxH={260}
            cols={[{ h: 'Customer_Job', f: (r) => r.job }, { h: '% Accounts', n: 1, f: (r) => pct(r.share) }, { h: 'Delinquent', n: 1, f: (r) => fmtInt(r.d) }, { h: '% of Delinq.', n: 1, f: (r) => pct(r.dShare) }, { h: 'Rate', n: 1, f: (r) => pct(r.rate) }]}
            data={jobs} total={['Total', '100.00%', fmtInt(delqTotal), '100.00%', pct(delqTotal / rows.length)]} />
        </Panel>
        <Panel title="Sum of Revenue by Card_Category" span={7}><BarH data={series(rows, 'card')} selected={filters.card} onSelect={(n) => toggle('card', n)} /></Panel>
        <Panel title="Activation_30_Days" span={5}>
          <Table maxH={200} cols={[{ h: 'Activation_30_Days', f: (r) => `${r.v} — ${r.v ? 'Activated' : 'Not activated'}` }, { h: 'Count', n: 1, f: (r) => fmtInt(r.n) }, { h: '% of Total', n: 1, f: (r) => pct(r.p) }]} data={act} total={['Total', fmtInt(rows.length), '100.00%']} />
          <div className="bar"><i style={{ width: pct(act[1].p, 1) }} /></div>
        </Panel>
      </div>
    </>
  );
}
