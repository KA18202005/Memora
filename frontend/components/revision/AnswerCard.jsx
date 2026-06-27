"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function AnswerCard({

    question,

    topic,

    onEvaluate,

    loading

}) {

    const [answer, setAnswer] =
        useState("");

    // Reset answer whenever question changes
    useEffect(() => {

        setAnswer("");

    }, [question]);

    const handleSubmit = () => {

        if (!answer.trim()) {

            return;

        }

        onEvaluate({

            topic,

            question,

            answer

        });

    };

    return (

        <div
            className="
                mt-6
            "
        >

            <textarea

                rows={6}

                value={answer}

                placeholder="Write your answer..."

                onChange={(e)=>

                    setAnswer(
                        e.target.value
                    )

                }

                className="
                    w-full
                    border
                    rounded-xl
                    p-4
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-violet-500
                "

                disabled={loading}

            />

            <Button

                className="
                    mt-4
                "

                disabled={

                    loading ||

                    !answer.trim()

                }

                onClick={handleSubmit}

            >

                {

                    loading

                        ?

                        "Evaluating..."

                        :

                        "Submit Answer"

                }

            </Button>

        </div>

    );

}