"use client";

import { Card } from "@/components/ui/card";

export default function GraphLegend() {

    return (

        <Card
            className="
                rounded-2xl
                p-6
            "
        >

            <h2
                className="
                    text-lg
                    font-semibold
                    mb-4
                "
            >

                Legend

            </h2>

            <div
                className="
                    space-y-3
                    text-sm
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            w-4
                            h-4
                            rounded-full
                            bg-blue-500
                        "
                    />

                    Concept Node

                </div>

                <div className="flex items-center gap-3">

                    <div
                        className="
                            w-4
                            h-1
                            bg-gray-500
                        "
                    />

                    Relationship

                </div>

                <div className="flex items-center gap-3">

                    <div
                        className="
                            w-4
                            h-4
                            rounded-full
                            border-2
                            border-green-600
                        "
                    />

                    Selected Node

                </div>

            </div>

        </Card>

    );

}