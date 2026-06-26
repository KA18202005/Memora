"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function PageHeader({

    title,
    subtitle,
    action,
    actionLabel = "Refresh"

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
                gap-4
                mb-8
            "
        >

            <div>

                <h1
                    className="
                        text-4xl
                        font-bold
                        tracking-tight
                    "
                >
                    {title}
                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                    "
                >
                    {subtitle}
                </p>

            </div>

            {

                action &&

                <Button
                    onClick={action}
                >

                    <RefreshCw
                        className="mr-2"
                        size={18}
                    />

                    {actionLabel}

                </Button>

            }

        </div>

    );

}