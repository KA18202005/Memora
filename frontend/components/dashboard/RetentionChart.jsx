"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

function CustomTooltip({

    active,
    payload

}) {

    if (
        !active ||
        !payload ||
        !payload.length
    ) {

        return null;

    }

    return (

        <div
            className="
bg-white
border
rounded-xl
shadow-lg
p-3
"
        >

            <p
                className="
font-semibold
"
            >

                {payload[0].payload.topic}

            </p>

            <p
                className="
text-blue-600
mt-1
"
            >

                Retention:

                {" "}

                {payload[0].value}%

            </p>

        </div>

    );

}

export default function RetentionChart({
    recommendations,
}) {

    const chartData =
        recommendations?.map((item) => ({
            topic: item.topic,
            retention: item.retention_score,
        })) || [];

    return (

        <Card
            className="
        rounded-2xl
        p-6
        shadow-sm
      "
        >

            <div
                className="
          flex
          justify-between
          items-center
          mb-8
        "
            >

                <div>

                    <h2
                        className="
              text-2xl
              font-bold
            "
                    >
                        Knowledge Retention
                    </h2>

                    <p
                        className="
              text-slate-500
              mt-1
            "
                    >
                        AI estimated retention score by topic
                    </p>

                </div>

                <Brain
                    className="
            text-blue-600
          "
                    size={28}
                />

            </div>

            <div
                className="
          h-80
        "
            >

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <AreaChart
                        data={chartData}
                    >

                        <defs>

                            <linearGradient
                                id="retentionGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >

                                <stop
                                    offset="5%"
                                    stopColor="#2563eb"
                                    stopOpacity={0.45}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#2563eb"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="topic"
                        />

                        <YAxis
                            domain={[0, 100]}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                        />

                        <Area
                            type="monotone"
                            dataKey="retention"
                            stroke="#2563eb"
                            strokeWidth={3}
                            fill="url(#retentionGradient)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}