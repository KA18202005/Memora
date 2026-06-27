"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TopicInput({

    topic,

    setTopic,

    onGenerate,

    loading

}) {

    return (

        <div
            className="
                flex
                gap-4
                mb-8
            "
        >

            <Input

                value={topic}

                placeholder="Enter a topic"

                onChange={(e)=>

                    setTopic(
                        e.target.value
                    )

                }

            />

            <Button

                disabled={loading}

                onClick={onGenerate}

            >

                {

                    loading

                    ?

                    "Generating..."

                    :

                    "Generate"

                }

            </Button>

        </div>

    );

}