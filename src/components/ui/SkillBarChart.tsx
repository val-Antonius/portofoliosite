"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Skill } from "../../types";

export default function SkillBarChart({ data }: { data: Skill[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 10, bottom: 5 }} barSize={24}>
        <XAxis type="number" hide domain={[0, 100]} />
        <YAxis 
          dataKey="name" 
          type="category" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: "var(--color-primary)", fontSize: 13, fontFamily: "var(--font-mono)" }} 
          width={120}
        />
        <Tooltip 
          cursor={{ fill: "var(--color-amber)", opacity: 0.05 }} 
          contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: "8px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-primary)" }} 
          itemStyle={{ color: "var(--color-amber)", fontWeight: "bold" }}
        />
        <Bar dataKey="proficiency" radius={[0, 4, 4, 0]} animationDuration={1200}>
          {data.map((entry, index) => (
             <Cell key={`cell-${index}`} fill="var(--color-amber)" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
