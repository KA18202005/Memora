"use client";

import Link from "next/link";

import { Card } from "@/components/ui/card";

import { Trophy } from "lucide-react";

export default function RevisionComplete({

    analytics,

    recommendation

}) {

    return (

        <Card
            className="
                rounded-2xl
                p-8
                text-center
            "
        >

            <Trophy

                size={60}

                className="
                    mx-auto
                    text-yellow-500
                "

            />

            <h2
                className="
                    text-3xl
                    font-bold
                    mt-5
                "
            >

                Revision Completed 🎉

            </h2>

            {

                analytics && (

                    <>

                        <p className="mt-6">

                            Average Score

                        </p>

                        <h3
                            className="
                                text-4xl
                                font-bold
                            "
                        >

                            {analytics.average_score}

                        </h3>

                    </>

                )

            }

            {

                recommendation && (

                    <div
                        className="
                            mt-8
                        "
                    >

                        <p>

                            Next Revision

                        </p>

                        <h3
                            className="
                                text-xl
                                font-semibold
                            "
                        >

                            {

                                recommendation.recommendation

                            }

                        </h3>

                    </div>

                )

            }

            <Link

                href="/dashboard"

            >

                <button
                    className="
                        mt-8
                        bg-violet-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                    "
                >

                    Return to Dashboard

                </button>

            </Link>

        </Card>

    );

}