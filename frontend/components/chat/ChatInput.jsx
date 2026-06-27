"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Send } from "lucide-react";

export default function ChatInput({

    onSend,

    loading,

    initialValue = ""

}) {

    const [question, setQuestion] =
        useState(initialValue);

    const handleSubmit = () => {

        if (!question.trim()) {

            return;

        }

        onSend(question);

        setQuestion("");

    };

    return (

        <div
            className="
                flex
                gap-3
            "
        >

            <Input disabled={loading}
                value={question}

                placeholder={

                    loading

                        ?

                        "Memora is thinking..."

                        :

                        "Ask Memora anything..."

                }

                onChange={(e) =>

                    setQuestion(
                        e.target.value
                    )

                }

                onKeyDown={(e) => {

                    if (e.key === "Enter") {

                        handleSubmit();

                    }

                }}

            />

            <Button

                disabled={loading}

                onClick={handleSubmit}


            >
                {

                    loading

                        ?

                        "Thinking..."

                        :

                        <Send size={18} />

                }

            </Button>

        </div>

    );

}