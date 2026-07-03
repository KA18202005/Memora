"use client";

import { useEffect, useRef } from "react";

import {
    Bot,
    User
} from "lucide-react";

export default function ChatMessages({

    messages

}) {

    const bottomRef =
        useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages]);

    if (!messages.length) {

        return (

            <div
                className="
                    h-87.5
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                "
            >

                <Bot
                    size={60}
                    className="
                        text-blue-600
                        mb-4
                    "
                />

                <h2
                    className="
                        text-2xl
                        font-bold
                    "
                >

                    Hi, I'm Memora AI

                </h2>

                <p
                    className="
                        text-slate-500
                        mt-2
                        max-w-md
                    "
                >

                    Ask me anything about your uploaded
                    documents or your personal knowledge base.

                </p>

            </div>

        );

    }

    return (

        <div
            className="
                space-y-6
                h-112.5
                overflow-y-auto
                pr-2
            "
        >

            {

                messages.map((message, index) => (

                    <div

                        key={index}

                        className={`
                            flex
                            gap-4

                            ${

                                message.role === "user"

                                    ?

                                    "justify-end"

                                    :

                                    "justify-start"

                            }

                        `}

                    >

                        {

                            message.role === "assistant" && (

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-background
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    "
                                >

                                    <Bot
                                        size={18}
                                        className="text-blue-600"
                                    />

                                </div>

                            )

                        }

                        <div
                            className={`
                                max-w-[75%]
                                rounded-2xl
                                px-5
                                py-4
                                shadow-sm

                                ${

                                    message.role === "user"

                                        ?

                                        "bg-blue-600 text-white"

                                        :

                                        "bg-background text-slate-700"

                                }

                            `}
                        >

                            <div
                                className="
                                    whitespace-pre-wrap
                                    leading-7
                                    text-[15px]
                                "
                            >

                                {message.content}

                            </div>

                        </div>

                        {

                            message.role === "user" && (

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-background
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    "
                                >

                                    <User
                                        size={18}
                                    />

                                </div>

                            )

                        }

                    </div>

                ))

            }

            <div ref={bottomRef} />

        </div>

    );

}