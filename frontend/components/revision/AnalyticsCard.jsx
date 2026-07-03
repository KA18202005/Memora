"use client";

import { Card } from "@/components/ui/card";

export default function AnalyticsCard({

    analytics

}) {

    if (!analytics) {

        return null;

    }

    return (

        <Card className="rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-5">

                Analytics

            </h2>

            <div
                className="
grid
grid-cols-2
gap-4
"
            >

                <div
                    className="
bg-background
rounded-xl
p-5
text-center
"
                >

                    <p>

                        Average

                    </p>

                    <h2>

                        {analytics.average_score}

                    </h2>

                </div>

                <div
                    className="
bg-background
rounded-xl
p-5
text-center
"
                >

                    <p>

                        Attempts

                    </p>

                    <h2>

                        {analytics.total_attempts}

                    </h2>

                </div>

            </div>

        </Card>

    );

}