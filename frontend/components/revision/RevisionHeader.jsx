"use client";

import { Brain } from "lucide-react";

export default function RevisionHeader() {

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
                    bg-violet-100
                    flex
                    items-center
                    justify-center
                "
            >

                <Brain
                    className="text-violet-600"
                    size={28}
                />

            </div>

            <div>

                <h1
                    className="
                        text-4xl
                        font-bold
                    "
                >

                    Revision Center

                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                    "
                >

                    Practice topics and improve your retention.

                </p>

            </div>

        </div>

    );

}