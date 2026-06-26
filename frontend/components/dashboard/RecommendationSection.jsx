"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
    Brain,
    ArrowRight
} from "lucide-react";

import { motion } from "framer-motion";

export default function RecommendationSection({

    recommendations

}) {

    if (!recommendations?.length) {

        return (

            <Card
                className="
                    rounded-2xl
                    p-6
                "
            >

                <h2
                    className="
                        text-xl
                        font-semibold
                        mb-4
                    "
                >
                    AI Recommendations
                </h2>

                <p
                    className="
                        text-slate-500
                    "
                >
                    No recommendations available.
                </p>

            </Card>

        );

    }

    return (

        <Card
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
                    mb-6
                "
            >

                <h2
                    className="
                        text-xl
                        font-bold
                    "
                >
                    AI Recommendations
                </h2>

                <Brain
                    className="
                        text-blue-600
                    "
                />

            </div>

            <div
                className="
                    space-y-4
                "
            >

                {recommendations.map(

                    (item, index) => (

                        <motion.div

                            key={index}

                            whileHover={{
                                scale: 1.02
                            }}

                            className="
                                border
                                rounded-xl
                                p-4
                                transition
                            "
                        >

                            <div
                                className="
                                    flex
                                    justify-between
                                    items-center
                                "
                            >

                                <h3
                                    className="
                                        font-semibold
                                        text-lg
                                    "
                                >
                                    {item.topic}
                                </h3>

                                <Badge>

                                    {item.priority}

                                </Badge>

                            </div>

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                    mt-3
                                "
                            >
                                {item.recommendation}
                            </p>

                            <div
                                className="
                                    flex
                                    justify-between
                                    items-center
                                    mt-5
                                "
                            >

                                <span
                                    className="
                                        text-sm
                                        text-blue-600
                                    "
                                >
                                    {item.revision_type}
                                </span>

                                <ArrowRight
                                    size={18}
                                />

                            </div>

                        </motion.div>

                    )

                )}

            </div>

        </Card>

    );

}