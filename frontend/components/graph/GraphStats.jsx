"use client";

import { Card } from "@/components/ui/card";

import {
    Network,
    GitBranch,
    CircleDot
} from "lucide-react";

export default function GraphStats({

    nodes,

    edges

}) {

    const density =

        edges.length > nodes.length

            ? "High"

            : edges.length > nodes.length / 2

                ? "Medium"

                : "Low";

    const stats = [

        {

            title: "Nodes",

            value: nodes.length,

            icon: CircleDot,

            color: "text-blue-600 bg-blue-100"

        },

        {

            title: "Connections",

            value: edges.length,

            icon: GitBranch,

            color: "text-green-600 bg-green-100"

        },

        {

            title: "Density",

            value: density,

            icon: Network,

            color: "text-violet-600 bg-violet-100"

        }

    ];

    return (

        <div
            className="
                grid
                md:grid-cols-3
                gap-5
            "
        >

            {

                stats.map((item) => {

                    const Icon =
                        item.icon;

                    return (

                        <Card
                            key={item.title}
                            className="
                                rounded-2xl
                                p-6
                            "
                        >

                            <div
                                className="
                                    flex
                                    justify-between
                                    items-center
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-slate-500
                                        "
                                    >

                                        {item.title}

                                    </p>

                                    <h2
                                        className="
                                            text-3xl
                                            font-bold
                                            mt-2
                                        "
                                    >

                                        {item.value}

                                    </h2>

                                </div>

                                <div
                                    className={`
                                        w-12
                                        h-12
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        ${item.color}
                                    `}
                                >

                                    <Icon />

                                </div>

                            </div>

                        </Card>

                    );

                })

            }

        </div>

    );

}