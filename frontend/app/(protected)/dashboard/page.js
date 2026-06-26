"use client";

import { useEffect, useState } from "react";

import {
  Skeleton
} from "@/components/ui/skeleton";

import {

  DashboardHeader,

  StatsGrid,

  RecommendationSection,

  WeakTopicsList,

  RetentionChart

} from "@/components/dashboard";

import {

  getDashboard

} from "@/services/dashboardService";

import { motion } from "framer-motion";

export default function DashboardPage() {

  const [dashboard, setDashboard] =
    useState(null);

  const [refreshing, setRefreshing] =
    useState(false);

  const loadDashboard =
    async () => {

      try {

        setRefreshing(true);

        const data =
          await getDashboard();

        setDashboard(
          data
        );

      }

      catch (error) {

        console.error(error);

      }

      finally {

        setRefreshing(false);

      }

    };

  useEffect(() => {

    loadDashboard();

  }, []);

  if (!dashboard) {

    return (

      <div
        className="
          space-y-6
        "
      >

        <Skeleton
          className="
            h-10
            w-60
          "
        />

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-5
            gap-6
          "
        >

          {

            [1, 2, 3, 4, 5].map(

              (item) => (

                <Skeleton

                  key={item}

                  className="
                    h-36
                  "

                />

              )

            )

          }

        </div>

        <Skeleton
          className="
            h-96
          "
        />

      </div>

    );

  }

  return (


    <motion.div

      initial={{
        opacity: 0,
        y: 20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.5
      }}

      className="space-y-8"

    >

      <DashboardHeader

        onRefresh={
          loadDashboard
        }

        isRefreshing={
          refreshing
        }

      />

      <StatsGrid
        stats={
          dashboard.stats
        }
      />

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        <RecommendationSection

          recommendations={
            dashboard.recommendations
          }

        />

        <WeakTopicsList

          weakTopics={
            dashboard.weak_topics
          }

        />

      </div>

      <RetentionChart

        recommendations={
          dashboard.recommendations
        }

      />

    </motion.div>

  );

}