"use client";

import Link from "next/link";

import {

    Button

} from "@/components/ui/button";

import {

    Brain,

    Network

} from "lucide-react";

export default function TopicActions({

    topic

}) {

    return (

        <div
            className="
                flex
                flex-wrap
                gap-4
            "
        >

            <Link

                href={`/revision?topic=${encodeURIComponent(topic)}`}

            >

                <Button>

                    <Brain
                        size={18}
                    />

                    Start Revision

                </Button>

            </Link>

            <Link

                href="/graph"

            >

                <Button

                    variant="outline"

                >

                    <Network
                        size={18}
                    />

                    Knowledge Graph

                </Button>

            </Link>

        </div>

    );

}