"use client";

import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {

    ArrowRight,

    Brain

} from "lucide-react";

export default function TopicCard({

    topic

}) {

    return (

        <Card
            className="
                rounded-2xl
                p-6
                hover:shadow-lg
                transition-all
            "
        >

            <h2
                className="
                    text-xl
                    font-semibold
                "
            >

                {topic}

            </h2>

            <p
                className="
                    mt-3
                    text-sm
                    text-slate-500
                "
            >

                AI extracted learning topic.

            </p>

            <div
                className="
                    flex
                    gap-3
                    mt-6
                "
            >

                <Link
                    href={`/revision?topic=${encodeURIComponent(topic)}`}
                    className="flex-1"
                >

                    <Button
                        className="w-full"
                    >

                        <Brain
                            size={16}
                        />

                        Revision

                    </Button>

                </Link>

                <Link
                    href={`/topics/${encodeURIComponent(topic)}`}
                    className="flex-1"
                >

                    <Button

                        variant="outline"

                        className="w-full"

                    >

                        Details

                        <ArrowRight
                            size={16}
                        />

                    </Button>

                </Link>

            </div>

        </Card>

    );

}