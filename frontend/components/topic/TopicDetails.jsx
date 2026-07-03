"use client";

import { Card } from "@/components/ui/card";

export default function TopicDetails({

    topicData

}) {

    if (!topicData) {

        return null;

    }

    const recommendation =
        topicData.recommendation || {};

    const analytics =
        topicData.analytics || {};

    return (

        <Card
            className="
                rounded-2xl
                p-6
            "
        >

            <h2
                className="
                    text-2xl
                    font-bold
                    mb-6
                "
            >

                {topicData.topic}

            </h2>

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-5
                "
            >

                <div
                    className="
                        rounded-xl
                        border
                        p-5
                    "
                >

                    <p
                        className="text-slate-500"
                    >

                        Retention Score

                    </p>

                    <h3
                        className="
                            text-3xl
                            font-bold
                            mt-2
                        "
                    >

                        {

                            recommendation.retention_score ??

                            "-"

                        }

                        %

                    </h3>

                </div>

                <div
                    className="
                        rounded-xl
                        border
                        p-5
                    "
                >

                    <p
                        className="text-slate-500"
                    >

                        Average Score

                    </p>

                    <h3
                        className="
                            text-3xl
                            font-bold
                            mt-2
                        "
                    >

                        {

                            recommendation.average_score ??

                            analytics.average_score ??

                            "-"

                        }

                    </h3>

                </div>

                <div
                    className="
                        rounded-xl
                        border
                        p-5
                    "
                >

                    <p
                        className="text-slate-500"
                    >

                        Priority

                    </p>

                    <span
                        className="
                            inline-block
                            mt-3
                            px-3
                            py-1
                            rounded-full
                            bg-background
                            text-violet-700
                            font-semibold
                        "
                    >

                        {

                            recommendation.priority ??

                            "-"

                        }

                    </span>

                </div>

                <div
                    className="
                        rounded-xl
                        border
                        p-5
                    "
                >

                    <p
                        className="text-slate-500"
                    >

                        Revision Type

                    </p>

                    <h3
                        className="
                            text-xl
                            font-semibold
                            mt-3
                        "
                    >

                        {

                            recommendation.revision_type ??

                            "-"

                        }

                    </h3>

                </div>

            </div>

            <div
                className="
                    mt-8
                "
            >

                <h3
                    className="
                        font-semibold
                        text-lg
                        mb-3
                    "
                >

                    Recommendation

                </h3>

                <p
                    className="
                        text-slate-600
                        leading-7
                    "
                >

                    {

                        recommendation.recommendation ??

                        "No recommendation available."

                    }

                </p>

            </div>

        </Card>

    );

}