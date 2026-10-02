import { useMemo } from 'react';
import { Panel, Kpi, Table, Tiles } from '../components/ui';
import { BarH, QtrCombo } from '../components/charts';
import { sum, series, fmtM, fmtInt, fmtDec } from '../utils/agg';

const CARDS = ['Blue', 'Silver', 'Gold', 'Platinum'];
export default function TransactionPage({ rows, filters, toggle }) {
  const cards = useMemo(() => CARDS.map((c) => { const r = rows.filter((x) => x.card === c); return { c, int: sum(r, 'int'), rev: sum(r, 'rev'), amt: sum(r, 'amt') }; }).filter((x) => x.rev), [rows]);
  const qtr = useMemo(() => ['Q1', 'Q2', 'Q3', 'Q4'].map((q) => { const r = rows.filter((x) => x.qtr === q); return { name: q, rev: sum(r, 'rev'), ct: sum(r, 'ct'), avg: r.length ? sum(r, 'id') / r.length : 0 }; }).filter((q) => q.avg), [rows]);
  const t = (k) => sum(rows, k);
  return (
    <>
      <div className="kpis">
        <Kpi label="Revenue" value={fmtM(t('rev'))} exact={fmtInt(t('rev'))} sub="Fees + Trans Amt + Interest" />
        <Kpi label="Amount" value={fmtM(t('amt'))} exact={fmtInt(t('amt'))} sub="Total_Trans_Amt" />
        <Kpi label="Count" value={fmtM(t('ct'))} exact={fmtInt(t('ct'))} sub="Total_Trans_Ct" />
        <Kpi label="Total Interest" value={fmtM(t('int')).replace(/(\d)M/, '$1M')} exact={fmtDec(t('int'))} sub="Interest_Earned" />
      </div>
      <div className="grid">
        <Panel title="Card Category summary" span={6}>
          <Table maxH={240} cols={[{ h: 'Card_Category', f: (r) => r.c }, { h: 'Sum of Interest_Earned', n: 1, f: (r) => fmtDec(r.int) }, { h: 'Sum of Revenue', n: 1, f: (r) => fmtInt(r.rev) }, { h: 'Sum of Total_Trans_Amt', n: 1, f: (r) => fmtInt(r.amt) }]}
            data={cards} total={['Total', fmtDec(t('int')), fmtInt(t('rev')), fmtInt(t('amt'))]} />
        </Panel>
        <Panel title="Average of Client_Num by Qtr" span={6}>
          <Tiles items={[...qtr].reverse().map((q) => ({ name: q.name, value: fmtInt(q.avg) }))} selected={filters.qtr} onClick={(n) => toggle('qtr', n)} />
          <p className="note">Click a tile to filter by quarter.</p>
        </Panel>
        <Panel title="Qtr Revenue and Total_Trans_Ct" span={6}><QtrCombo data={qtr} /></Panel>
        <Panel title="Revenue by Expenditure type" span={6}><BarH data={series(rows, 'chip')} selected={filters.chip} onSelect={(n) => toggle('chip', n)} h={200} /></Panel>
        <Panel title="Revenue by Exp_Type" span={4}><BarH data={series(rows, 'exp')} selected={filters.exp} onSelect={(n) => toggle('exp', n)} width={100} /></Panel>
        <Panel title="Revenue by Education_Level" span={4}><BarH data={series(rows, 'edu')} selected={filters.edu} onSelect={(n) => toggle('edu', n)} width={100} /></Panel>
        <Panel title="Revenue by Customer_Job" span={4}><BarH data={series(rows, 'job')} selected={filters.job} onSelect={(n) => toggle('job', n)} width={100} /></Panel>
        <Panel title="Revenue by Card_Category" span={12}><BarH data={series(rows, 'card', 'rev', CARDS)} selected={filters.card} onSelect={(n) => toggle('card', n)} h={170} /></Panel>
      </div>
    </>
  );
}
