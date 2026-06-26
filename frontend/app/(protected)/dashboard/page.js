"use client";

import { useEffect, useState } from "react";

import {
  DashboardHeader,
  StatsGrid,
  RecommendationSection,
  WeakTopicsList,
  RetentionChart,
} from "@/components/dashboard";

import { getDashboard } from "@/services/dashboardService";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (!dashboard) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-slate-500 text-lg">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <DashboardHeader
        onRefresh={loadDashboard}
      />

      <StatsGrid
        stats={dashboard.stats}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <RecommendationSection
          recommendations={dashboard.recommendations}
        />

        <WeakTopicsList
          weakTopics={dashboard.weak_topics}
        />

      </div>

      <RetentionChart
        recommendations={dashboard.recommendations}
      />

    </div>
  );
}