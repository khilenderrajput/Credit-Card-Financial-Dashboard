import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, Cell, ComposedChart, Line, LineChart, CartesianGrid, Legend } from 'recharts';
import { fmtM, fmtInt } from '../utils/agg';

export const C = { teal: '#4d8ea3', gold: '#bf9d00', blue: '#118dff', orange: '#e8743b', dim: '#b9cdd5' };
const tip = { contentStyle: { borderRadius: 8, border: '1px solid #dde5ea', fontSize: 12 } };

/** Horizontal bar chart; clicking a bar cross-filters via onSelect(name). */
export function BarH({ data, onSelect, selected = [], color = C.teal, h, width = 92 }) {
  return (
    <ResponsiveContainer width="100%" height={h || Math.max(150, data.length * 34 + 16)}>
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 46, top: 4, bottom: 4 }}>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" width={width} tick={{ fontSize: 12, fill: '#3b4a54' }} axisLine={false} tickLine={false} />
        <Tooltip {...tip} cursor={{ fill: '#eef4f7' }} formatter={(v) => [fmtInt(v), 'Revenue']} />
        <Bar isAnimationActive={false} dataKey="value" radius={[0, 4, 4, 0]} cursor={onSelect ? 'pointer' : 'default'} onClick={(d) => onSelect && onSelect(d.name)} barSize={20}>
          {data.map((d) => <Cell key={d.name} fill={selected.length && !selected.includes(d.name) ? C.dim : color} />)}
          <LabelList dataKey="value" position="right" formatter={fmtM} style={{ fontSize: 12, fontWeight: 600, fill: '#2b3a44' }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

/** Gold = Female, teal = Male (as in the Power BI customer page). */
export function StackedBarH({ data, onSelect, selected = [], h, width = 92 }) {
  return (
    <ResponsiveContainer width="100%" height={h || Math.max(150, data.length * 36 + 16)}>
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 8, top: 4, bottom: 4 }}>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" width={width} tick={{ fontSize: 12, fill: '#3b4a54' }} axisLine={false} tickLine={false} />
        <Tooltip {...tip} cursor={{ fill: '#eef4f7' }} formatter={(v, n) => [fmtInt(v), n === 'F' ? 'Female' : 'Male']} />
        {['F', 'M'].map((g) => (
          <Bar isAnimationActive={false} key={g} dataKey={g} stackId="a" fill={g === 'F' ? C.gold : C.teal} barSize={22} cursor={onSelect ? 'pointer' : 'default'} onClick={(d) => onSelect && onSelect(d.name)}>
            {data.map((d) => <Cell key={d.name} fillOpacity={selected.length && !selected.includes(d.name) ? 0.35 : 1} />)}
            <LabelList dataKey={g} position="center" formatter={(v) => (v > 1.5e6 ? fmtM(v) : '')} style={{ fontSize: 11, fill: '#fff', fontWeight: 600 }} />
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function QtrCombo({ data }) {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <ComposedChart data={data} margin={{ top: 22, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#e8eef2" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
        <YAxis yAxisId="l" tickFormatter={fmtM} tickLine={false} axisLine={false} width={48} fontSize={11} />
        <YAxis yAxisId="r" orientation="right" tickFormatter={fmtM} tickLine={false} axisLine={false} width={48} fontSize={11} domain={['dataMin - 1000', 'dataMax + 1000']} />
        <Tooltip {...tip} formatter={(v, n) => [fmtInt(v), n]} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
        <Bar isAnimationActive={false} yAxisId="l" dataKey="rev" name="Sum of Revenue" fill={C.teal} barSize={56} radius={[4, 4, 0, 0]}>
          <LabelList dataKey="rev" position="top" formatter={fmtM} style={{ fontSize: 12, fontWeight: 600 }} />
        </Bar>
        <Line isAnimationActive={false} yAxisId="r" dataKey="ct" name="Sum of Total_Trans_Ct" stroke={C.orange} strokeWidth={2.5} type="monotone" dot={{ r: 4 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

/** Generic line chart; lines = [{key,name,color}] */
export function Lines({ data, lines, xKey = 'x', h = 250, xFmt, legend }) {
  return (
    <ResponsiveContainer width="100%" height={h}>
      <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#e8eef2" vertical={false} />
        <XAxis dataKey={xKey} tickFormatter={xFmt} tickLine={false} axisLine={false} fontSize={11} minTickGap={28} />
        <YAxis tickFormatter={fmtM} tickLine={false} axisLine={false} width={44} fontSize={11} domain={['auto', 'auto']} />
        <Tooltip {...tip} formatter={(v, n) => [fmtInt(v), n]} />
        {legend && <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />}
        {lines.map((l) => <Line isAnimationActive={false} key={l.key} dataKey={l.key} name={l.name} stroke={l.color} strokeWidth={2.3} type="monotone" dot={false} activeDot={{ r: 4 }} />)}
      </LineChart>
    </ResponsiveContainer>
  );
}
