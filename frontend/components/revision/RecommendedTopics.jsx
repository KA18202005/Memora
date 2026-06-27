"use client";

import { Button } from "@/components/ui/button";

export default function RecommendedTopics({

    topics,

    onSelect

}) {

    if (!topics.length) {

        return null;

    }

    return (

        <div className="space-y-4">

            <h2 className="text-lg font-semibold">

                Recommended Topics

            </h2>

            <div className="flex flex-wrap gap-3 max-h-48 overflow-y-auto">

                {

                    topics.map((topic) => (

                        <Button

                            key={topic}

                            variant="outline"

                            onClick={() => onSelect(topic)}

                        >

                            {topic}

                        </Button>

                    ))

                }

            </div>

        </div>

    );

}