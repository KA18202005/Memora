"use client";

import { Card } from "@/components/ui/card";

const QUESTIONS = [

    "Summarize my uploaded documents",

    "What are the most important topics?",

    "Explain FastAPI",

    "Generate revision notes",

    "Compare OOP and POP",

    "What should I revise first?"

];

export default function SuggestedQuestions({

    onSelect

}) {

    return (

        <Card
            className="
                rounded-2xl
                p-6
                mb-6
            "
        >

            <h2
                className="
                    text-xl
                    font-bold
                    mb-5
                "
            >

                Suggested Questions

            </h2>

            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                "
            >

                {

                    QUESTIONS.map((question) => (

                        <button

                            key={question}

                            onClick={() =>

                                onSelect(question)

                            }

                            className="
                                px-4
                                py-2
                                rounded-full
                                border
                                hover:bg-blue-50
                                hover:border-blue-500
                                transition-all
                            "

                        >

                            {question}

                        </button>

                    ))

                }

            </div>

        </Card>

    );

}