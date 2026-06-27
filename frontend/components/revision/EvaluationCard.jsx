"use client";

import { Card } from "@/components/ui/card";

export default function EvaluationCard({

    evaluation

}) {

    if (!evaluation) {

        return null;

    }

    return (

        <Card className="rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-6">

                Evaluation

            </h2>

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

                    Evaluation

                </h2>

                <div
                    className="
            bg-violet-100
            text-violet-700
            px-4
            py-2
            rounded-full
            font-semibold
        "
                >

                    {evaluation.score}/10

                </div>

            </div>

            <div className="mt-5">

                <h3 className="font-semibold">

                    Strengths

                </h3>

                {

                    Array.isArray(evaluation.strengths) ? (

                        <ul className="list-disc ml-6 mt-2">

                            {

                                evaluation.strengths.map((item, index) => (

                                    <li key={index}>{item}</li>

                                ))

                            }

                        </ul>

                    ) : (

                        <p className="mt-2">

                            {evaluation.strengths}

                        </p>

                    )

                }

            </div>

            <div className="mt-5">

                <h3 className="font-semibold">

                    Weaknesses

                </h3>

                {

                    Array.isArray(evaluation.weaknesses) ? (

                        <ul className="list-disc ml-6 mt-2">

                            {

                                evaluation.weaknesses.map((item, index) => (

                                    <li key={index}>{item}</li>

                                ))

                            }

                        </ul>

                    ) : (

                        <p className="mt-2">

                            {evaluation.weaknesses}

                        </p>

                    )

                }

            </div>

        </Card>

    );

}