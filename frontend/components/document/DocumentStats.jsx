"use client";

import { Card } from "@/components/ui/card";

import {
    FileText,
    Brain
} from "lucide-react";

export default function DocumentStats({

    document,
    topics

}) {

    return (

        <Card
            className="
                rounded-2xl
                p-6
            "
        >

            <h2
                className="
                    text-xl
                    font-bold
                    mb-6
                "
            >

                Statistics

            </h2>

            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-6
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <div
                        className="
                            w-12
                            h-12
                            rounded-xl
                            bg-background
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <FileText
                            className="text-blue-600"
                        />

                    </div>

                    <div>

                        <p className="text-slate-500">

                            Characters

                        </p>

                        <h3
                            className="
                                text-2xl
                                font-bold
                            "
                        >

                            {document.content.length}

                        </h3>

                    </div>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <div
                        className="
                            w-12
                            h-12
                            rounded-xl
                            bg-background
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Brain
                            className="text-violet-600"
                        />

                    </div>

                    <div>

                        <p className="text-slate-500">

                            Topics

                        </p>

                        <h3
                            className="
                                text-2xl
                                font-bold
                            "
                        >

                            {topics.length}

                        </h3>

                    </div>

                </div>

            </div>

        </Card>

    );

}