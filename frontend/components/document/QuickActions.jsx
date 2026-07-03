"use client";

import Link from "next/link";

import { Card } from "@/components/ui/card";

import {
    MessageSquare,
    Brain,
    Network
} from "lucide-react";

export default function QuickActions({

    documentId

}) {

    const actions = [

        {
            title: "Chat with Document",
            description: "Ask questions about this document.",
            icon: MessageSquare,
            href: `/chat?document=${documentId}`,
            color: "text-blue-600 bg-background"
        },

        {
            title: "Generate Revision",
            description: "Create revision questions instantly.",
            icon: Brain,
            href: "/revision",
            color: "text-violet-600 bg-background"
        },

        {
            title: "Knowledge Graph",
            description: "Explore document relationships.",
            icon: Network,
            href: `/graph?document=${documentId}`,
            color: "text-green-600 bg-background"
        }

    ];

    return (

        <div>

            <h2
                className="
                    text-xl
                    font-bold
                    mb-5
                "
            >

                Quick Actions

            </h2>

            <div
                className="
                    grid
                    md:grid-cols-3
                    gap-4
                "
            >

                {

                    actions.map((action) => {

                        const Icon =
                            action.icon;

                        return (

                            <Link

                                key={action.title}

                                href={action.href}

                            >

                                <Card
                                    className="
                                        rounded-2xl
                                        p-6
                                        h-full
                                        hover:shadow-lg
                                        hover:-translate-y-1
                                        transition-all
                                        duration-300
                                        cursor-pointer
                                    "
                                >

                                    <div
                                        className={`
                                            w-12
                                            h-12
                                            rounded-xl
                                            flex
                                            items-center
                                            justify-center
                                            ${action.color}
                                        `}
                                    >

                                        <Icon
                                            size={24}
                                        />

                                    </div>

                                    <h3
                                        className="
                                            mt-5
                                            font-semibold
                                            text-lg
                                        "
                                    >

                                        {action.title}

                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-slate-500
                                        "
                                    >

                                        {action.description}

                                    </p>

                                </Card>

                            </Link>

                        );

                    })

                }

            </div>

        </div>

    );

}