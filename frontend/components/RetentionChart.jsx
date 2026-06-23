"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RetentionChart({
  recommendations,
}) {

  const chartData =
    recommendations.map(
      (item) => ({
        topic: item.topic,
        retention:
          item.retention_score,
      })
    );

  return (
    <div className="bg-white shadow-md rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4">
        Retention Scores
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={chartData}
          >

            <XAxis dataKey="topic" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="retention"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}