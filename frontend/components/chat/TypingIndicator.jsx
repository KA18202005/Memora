"use client";

import { Bot } from "lucide-react";

export default function TypingIndicator({

    loading

}) {

    if (!loading) {

        return null;

    }

    return (

        <div
            className="
                flex
                items-center
                gap-4
                mb-6
            "
        >

            <div
                className="
                    w-10
                    h-10
                    rounded-full
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                "
            >

                <Bot
                    size={18}
                    className="text-blue-600"
                />

            </div>

            <div
                className="
                    bg-slate-100
                    rounded-2xl
                    px-5
                    py-3
                "
            >

                <div
                    className="
                        flex
                        gap-2
                    "
                >

                    <span className="animate-bounce">
                        •
                    </span>

                    <span
                        className="
                            animate-bounce
                            delay-150
                        "
                    >
                        •
                    </span>

                    <span
                        className="
                            animate-bounce
                            delay-300
                        "
                    >
                        •
                    </span>

                </div>

            </div>

        </div>

    );

}