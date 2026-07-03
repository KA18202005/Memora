"use client";

import { Card } from "@/components/ui/card";

export default function RecommendationCard({

    recommendation

}) {

    if (!recommendation) {

        return null;

    }

    return (

        <Card className="rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">

                Recommendation

            </h2>

            <p>

                Priority:

                {" "}

                <span
                    className="
px-4
py-1
rounded-full
bg-background
text-red-600
font-semibold
"
                >

                    {recommendation.priority}

                </span>

            </p>

            <p className="mt-3">

                {recommendation.recommendation}

            </p>

            <p className="mt-3">

                Revision Type:

                {" "}

                <strong>

                    {recommendation.revision_type}

                </strong>

            </p>

        </Card>

    );

}