"use client";

import { Bot } from "lucide-react";

export default function ChatHeader() {

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
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                "
            >

                <Bot
                    className="text-blue-600"
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
                    Memora AI
                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                    "
                >
                    Ask questions about your knowledge base.
                </p>

            </div>

        </div>

    );

}