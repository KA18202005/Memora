"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

import CountUp from "react-countup";

import {
  FileText,
  Brain,
  Trophy,
  TriangleAlert,
  Activity,
} from "lucide-react";

const statsConfig = [
  {
    title: "Documents",
    key: "documents",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Topics",
    key: "topics",
    icon: Brain,
    color: "bg-violet-500",
  },
  {
    title: "Strong Topics",
    key: "strong_topics",
    icon: Trophy,
    color: "bg-green-500",
  },
  {
    title: "Weak Topics",
    key: "weak_topics",
    icon: TriangleAlert,
    color: "bg-red-500",
  },
  {
    title: "Retention",
    key: "average_retention",
    icon: Activity,
    color: "bg-orange-500",
    suffix: "%",
  },
];

export default function StatsGrid({ stats }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 mb-8">
      {statsConfig.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <Card
              className="
                  rounded-2xl
                  border
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-pointer
              "
            >
              <div className="p-6">

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-slate-500 text-sm">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold mt-4">

                      <CountUp

                        end={stats[item.key]}

                        duration={1.5}

                      />

                      {item.suffix || ""}

                    </h2>

                  </div>

                  <div
                    className={`
                      ${item.color}
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                    `}
                  >
                    <Icon
                      className="text-white"
                      size={28}
                    />
                  </div>

                </div>

              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}