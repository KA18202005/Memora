"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function DashboardHeader({

    onRefresh

}) {

    return (

        <div
            className="
                flex
                justify-between
                items-center
                mb-10
            "
        >

            <div>

                <h1
                    className="
                        text-4xl
                        font-bold
                        text-slate-900
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
                    Monitor your learning progress,
                    retention and AI recommendations.
                </p>

            </div>

            <Button
                onClick={onRefresh}
                className="
                    rounded-xl
                "
            >
                <RefreshCw
                    className="
                        mr-2
                    "
                    size={18}
                />

                Refresh

            </Button>

        </div>

    );

}