"use client";

import { BookOpen } from "lucide-react";

export default function TopicHeader() {

    return (

        <div
            className="
                flex
                items-center
                gap-4
                mb-8
            "
        >

            <div
                className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-background
                    flex
                    items-center
                    justify-center
                "
            >

                <BookOpen
                    size={28}
                    className="text-violet-600"
                />

            </div>

            <div>

                <h1
                    className="
                        text-4xl
                        font-bold
                    "
                >

                    Topic Explorer

                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                    "
                >

                    Browse all extracted topics from your documents.

                </p>

            </div>

        </div>

    );

}