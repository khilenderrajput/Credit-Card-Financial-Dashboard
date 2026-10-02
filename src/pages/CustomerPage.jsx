import { useMemo } from 'react';
import { Panel, Kpi, Table, Tiles } from '../components/ui';
import { StackedBarH, Lines, C } from '../components/charts';
import { sum, stacked, fmtM, fmtInt, fmtDec } from '../utils/agg';

export default function CustomerPage({ rows, filters, toggle }) {
  const trend = useMemo(() => {
    const m = new Map();
    for (const r of rows) { if (r.date === 'Invalid') continue; const o = m.get(r.date) || { x: r.date, F: 0, M: 0 }; if (r.gender === 'F' || r.gender === 'M') o[r.gender] += r.rev; m.set(r.date, o); }
    return [...m.values()].sort((a, b) => a.x.localeCompare(b.x));
  }, [rows]);
  const jobs = useMemo(() => {
    const m = new Map();
    for (const r of rows) { const j = m.get(r.job) || { job: r.job, rev: 0, int: 0, inc: 0 }; j.rev += r.rev; j.int += r.int; j.inc += r.income; m.set(r.job, j); }
    return [...m.values()].sort((a, b) => a.job.localeCompare(b.job));
  }, [rows]);
  const g = (x) => sum(rows.filter((r) => r.gender === x), 'rev');
  const sat = rows.length ? sum(rows, 'sat') / rows.filter((r) => r.sat).length : 0;
  const d = (key, order, limit) => stacked(rows, key, order, limit);
  return (
    <>
      <div className="kpis">
        <Kpi label="Revenue" value={fmtM(sum(rows, 'rev'))} exact={fmtInt(sum(rows, 'rev'))} />
        <Kpi label="Income" value={fmtM(sum(rows, 'income'))} exact={fmtInt(sum(rows, 'income'))} sub="Sum of customer income" />
        <Kpi label="CC · Avg Satisfaction" value={sat.toFixed(2)} sub="Cust_Satisfaction_Score" />
        <Kpi label="Total Interest" value={fmtM(sum(rows, 'int'))} exact={fmtDec(sum(rows, 'int'))} />
      </div>
      <div className="grid">
        <Panel title="Revenue by Week Start Date and Gender" span={8}>
          <Lines data={trend} lines={[{ key: 'M', name: 'Male', color: '#1b2f9b' }, { key: 'F', name: 'Female', color: C.blue }]} xFmt={(v) => v.slice(5)} legend h={260} />
        </Panel>
        <Panel title="Revenue by Gender" span={4}>
          <Tiles selected={filters.gender} onClick={(n) => toggle('gender', n)} items={[{ name: 'M', value: fmtM(g('M')), weight: g('M') || 1 }, { name: 'F', value: fmtM(g('F')), weight: g('F') || 1 }]} />
          <p className="note">Gold = Female · Teal = Male. Click to filter.</p>
        </Panel>
        <Panel title="Revenue by Age Group" span={4}><StackedBarH data={d('age', ['40-50', '50-60', '30-40', '60+', '20-30'])} selected={filters.age} onSelect={(n) => toggle('age', n)} width={60} /></Panel>
        <Panel title="Revenue by Income Group" span={4}><StackedBarH data={d('incomeG', ['High', 'Medium', 'Low'])} selected={filters.incomeG} onSelect={(n) => toggle('incomeG', n)} width={64} /></Panel>
        <Panel title="Revenue by Marital Status" span={4}><StackedBarH data={d('marital', ['Married', 'Single', 'Unknown'])} selected={filters.marital} onSelect={(n) => toggle('marital', n)} width={64} /></Panel>
        <Panel title="Revenue by Dependent" span={4}><StackedBarH data={d('dep', [5, 4, 3, 2, 1, 0])} width={30} /></Panel>
        <Panel title="Revenue by Education" span={4}><StackedBarH data={d('edu')} selected={filters.edu} onSelect={(n) => toggle('edu', n)} width={92} /></Panel>
        <Panel title="Top 5 States" span={4}><StackedBarH data={d('state', null, 5)} selected={filters.state} onSelect={(n) => toggle('state', n)} width={30} /></Panel>
        <Panel title="Customer_Job summary" span={12}>
          <Table maxH={260} cols={[{ h: 'Customer_Job', f: (r) => r.job }, { h: 'Sum of Revenue', n: 1, f: (r) => fmtInt(r.rev) }, { h: 'Sum of Interest_Earned', n: 1, f: (r) => fmtDec(r.int) }, { h: 'Sum of Income', n: 1, f: (r) => fmtInt(r.inc) }]}
            data={jobs} total={['Total', fmtInt(sum(rows, 'rev')), fmtDec(sum(rows, 'int')), fmtInt(sum(rows, 'income'))]} />
        </Panel>
      </div>
    </>
  );
}
