"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const lineChartData = [
  { name: "Jan", revenue: 1000 },
  { name: "Feb", revenue: 2000 },
  { name: "Mar", revenue: 1000 },
  { name: "Apr", revenue: 6000 },
  {name:"May",revenue:9000},
];

export default function RevenueLineChart() {
  return (
    <ChartContainer
      className="rounded-xl border p-2 h-full w-full bg-white"
      config={{
        revenue: {
          label: "Sales Overview",
          color: "#3b82f6",
        },
      }}
    >
      <LineChart data={lineChartData}>
        <XAxis dataKey="name"/>
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="var(--color-revenue)"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ChartContainer>
  );
}
