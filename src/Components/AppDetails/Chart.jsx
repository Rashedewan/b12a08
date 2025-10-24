import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5 star", value: 11500 },
  { name: "4 star", value: 7000 },
  { name: "3 star", value: 3000 },
  { name: "2 star", value: 1800 },
  { name: "1 star", value: 900 },
];

const Chart = () => {
  return (
    <div className="w-full bg-[#f8f8f8] p-6 rounded-xl">
      <h2 className="font-semibold text-lg text-gray-800 mb-4">Ratings</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 40, left: 40, bottom: 0 }}
        >
          <CartesianGrid horizontal={false} stroke="#f3f3f3" />
          <XAxis type="number" domain={[0, 12000]} tick={{ fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12 }}
            width={70}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#FF8C00" barSize={20} radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
