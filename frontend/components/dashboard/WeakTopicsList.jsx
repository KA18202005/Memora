"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
    TriangleAlert,
    TrendingDown
} from "lucide-react";

import { motion } from "framer-motion";

export default function WeakTopicsList({

    weakTopics

}) {

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
                    Weak Topics
                </h2>

                <TriangleAlert
                    className="
                        text-red-500
                    "
                />

            </div>

            {
                weakTopics.length === 0 ?

                    (

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                py-12
                                text-center
                            "
                        >

                            <TrendingDown
                                size={42}
                                className="
                                    text-green-500
                                    mb-4
                                "
                            />

                            <p
                                className="
                                    font-semibold
                                    text-lg
                                "
                            >
                                Great Job 🎉
                            </p>

                            <p
                                className="
                                    text-slate-500
                                    mt-2
                                "
                            >
                                No weak topics found.
                            </p>

                        </div>

                    )

                    :

                    (

                        <div
                            className="
                                space-y-4
                            "
                        >

                            {

                                weakTopics.map(

                                    (topic, index) => (

                                        <motion.div

                                            key={index}

                                            whileHover={{
                                                scale: 1.02
                                            }}

                                            className="
                                                border
                                                rounded-xl
                                                p-4
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
                                                    "
                                                >
                                                    {topic.topic}
                                                </h3>

                                                <Badge
                                                    variant="destructive"
                                                >
                                                    Weak
                                                </Badge>

                                            </div>

                                            <div
                                                className="
                                                    mt-4
                                                "
                                            >

                                                <div
                                                    className="
                                                        h-2
                                                        bg-slate-200
                                                        rounded-full
                                                    "
                                                >

                                                    <div

                                                        className="
                                                            h-2
                                                            rounded-full
                                                            bg-red-500
                                                        "

                                                        style={{
                                                            width:
                                                                `${topic.retention_score}%`
                                                        }}

                                                    />

                                                </div>

                                            </div>

                                            <p
                                                className="
                                                    text-sm
                                                    mt-3
                                                    text-slate-500
                                                "
                                            >

                                                Retention Score :
                                                {" "}
                                                {topic.retention_score}%

                                            </p>

                                        </motion.div>

                                    )

                                )

                            }

                        </div>

                    )

            }

        </Card>

    );

}