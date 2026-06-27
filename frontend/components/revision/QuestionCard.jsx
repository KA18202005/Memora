"use client";

import { Card } from "@/components/ui/card";

export default function QuestionCard({

    question,

    index

}) {

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
                    font-bold
                    mb-4
                "
            >

                Question {index + 1}

            </h2>

            <p
                className="
        leading-7
    "
            >

                {question.question}

            </p>

            <p
                className="
        mt-4
        text-sm
        text-blue-600
        font-medium
    "
            >

                Type: {question.type}

            </p>

        </Card>

    );

}