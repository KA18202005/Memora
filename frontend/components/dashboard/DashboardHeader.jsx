"use client";

import { Button } from "@/components/ui/button";

import {
  RefreshCw,
  Loader2
} from "lucide-react";

export default function DashboardHeader({

  onRefresh,
  isRefreshing

}) {

  return (

    <div
      className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        md:items-center
        gap-6
        mb-8
      "
    >

      <div>

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          Dashboard
        </h1>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Track your learning progress and AI recommendations.
        </p>

      </div>

      <Button
        onClick={onRefresh}
        disabled={isRefreshing}
        className="
          rounded-xl
        "
      >

        {

          isRefreshing ?

          <Loader2
            className="
              mr-2
              animate-spin
            "
            size={18}
          />

          :

          <RefreshCw
            className="
              mr-2
            "
            size={18}
          />

        }

        {

          isRefreshing ?

          "Refreshing..."

          :

          "Refresh"

        }

      </Button>

    </div>

  );

}