"use client";

import { BookOpen } from "lucide-react";

export default function EmptyTopics() {

    return (

        <div
            className="
                text-center
                py-20
            "
        >

            <BookOpen

                size={60}

                className="
                    mx-auto
                    text-slate-300
                "

            />

            <h2
                className="
                    text-2xl
                    font-semibold
                    mt-6
                "
            >

                No Topics Found

            </h2>

            <p
                className="
                    mt-3
                    text-slate-500
                "
            >

                Upload documents to extract topics.

            </p>

        </div>

    );

}