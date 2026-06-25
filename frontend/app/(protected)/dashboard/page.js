"use client";
import { useEffect, useState } from "react";

import StatsCard from "@/components/StatsCard";
import WeakTopics from "@/components/WeakTopics";
import Recommendations from "@/components/Recommendations";
import RetentionChart from "@/components/RetentionChart";

import {
  getDashboard,
} from "@/services/dashboardService";

export default function DashboardPage() {

  const [dashboard, setDashboard] =
    useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);


  const loadDashboard = async () => {

    try {

      const data =
        await getDashboard();

      console.log(
        "Dashboard Data:",
        data
      );

      setDashboard(
        data
      );

    } catch (error) {

      console.error(
        "Dashboard Error:",
        error
      );
    }
  };

  const refreshDashboard =
    async () => {

      await loadDashboard();
    };

  if (!dashboard) {

    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  const stats =
    dashboard.stats;

  return (
      <div>

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <button
            onClick={refreshDashboard}
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
          "
          >
            Refresh
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          <StatsCard
            title="Documents"
            value={stats.documents}
          />

          <StatsCard
            title="Topics"
            value={stats.topics}
          />

          <StatsCard
            title="Strong Topics"
            value={stats.strong_topics}
          />

          <StatsCard
            title="Weak Topics"
            value={stats.weak_topics}
          />

          <StatsCard
            title="Avg Retention"
            value={`${stats.average_retention}%`}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <WeakTopics
            weakTopics={
              dashboard.weak_topics
            }
          />

          <Recommendations
            recommendations={
              dashboard.recommendations
            }
          />

        </div>

        <div className="mt-8">

          <RetentionChart
            recommendations={
              dashboard.recommendations
            }
          />

        </div>

      </div>
  );
}