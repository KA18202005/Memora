"use client";

import {

    FileText,

    BookOpen,

    Brain,

    Trophy,

    AlertTriangle

} from "lucide-react";

const statsList = [

    {

        key: "documents",

        label: "Documents",

        icon: FileText,

        color: "text-blue-600"

    },

    {

        key: "topics",

        label: "Topics",

        icon: BookOpen,

        color: "text-violet-600"

    },

    {

        key: "average_retention",

        label: "Average Retention",

        icon: Brain,

        color: "text-green-600"

    },

    {

        key: "strong_topics",

        label: "Strong Topics",

        icon: Trophy,

        color: "text-yellow-500"

    },

    {

        key: "weak_topics",

        label: "Weak Topics",

        icon: AlertTriangle,

        color: "text-red-500"

    }

];

export default function StatsCard({

    stats

}) {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-6
            "
        >

            <h2
                className="
                    text-xl
                    font-semibold
                    mb-6
                "
            >

                Learning Statistics

            </h2>

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-5
                "
            >

                {

                    statsList.map((item) => {

                        const Icon =
                            item.icon;

                        return (

                            <div

                                key={item.key}

                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    bg-slate-50
                                    p-4
                                "

                            >

                                <Icon
                                    className={item.color}
                                    size={24}
                                />

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            text-slate-500
                                        "
                                    >

                                        {item.label}

                                    </p>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                        "
                                    >

                                        {

                                            item.key === "average_retention"

                                                ?

                                                `${stats?.[item.key] ?? 0}%`

                                                :

                                                stats?.[item.key] ?? 0

                                        }

                                    </h3>

                                </div>

                            </div>

                        );

                    })

                }

            </div>

        </div>

    );

}