"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export default function TopicsSection({

    topics

}) {

    return (

        <div>

            <h2
                className="
                    text-xl
                    font-bold
                    mb-5
                "
            >

                Topics

            </h2>

            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                "
            >

                {

                    topics.map((topic)=>(

                        <Link

                            key={topic}

                            href={`/topics/${topic}`}

                        >

                            <Badge
                                className="
                                    px-4
                                    py-2
                                    cursor-pointer
                                "
                            >

                                {topic}

                            </Badge>

                        </Link>

                    ))

                }

            </div>

        </div>

    );

}