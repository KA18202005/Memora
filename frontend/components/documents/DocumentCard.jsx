"use client";

import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
    FileText,
    ArrowRight,
    Calendar
} from "lucide-react";

export default function DocumentCard({

    document

}) {

    return (

        <Card
            className="
                rounded-2xl
                p-6
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
            "
        >

            <div className="flex justify-between items-start">

                <div className="flex gap-4">

                    <div
                        className="
                            w-14
                            h-14
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

                        <h2
                            className="
                                text-xl
                                font-semibold
                            "
                        >
                            {document.title}
                        </h2>

                        <p
                            className="
                                text-slate-500
                                mt-1
                            "
                        >
                            {document.source_type.toUpperCase()}
                        </p>

                    </div>

                </div>

            </div>

            <div
                className="
                    mt-6
                    space-y-2
                    text-sm
                    text-slate-500
                "
            >

                <div className="flex justify-between">

                    <span>
                        Characters
                    </span>

                    <span className="font-medium">

                        {document.text_length}

                    </span>

                </div>

                {

                    document.uploaded_at && (

                        <div className="flex justify-between">

                            <span className="flex items-center gap-2">

                                <Calendar
                                    size={15}
                                />

                                Uploaded

                            </span>

                            <span>

                                {

                                    new Date(
                                        document.uploaded_at
                                    ).toLocaleDateString()

                                }

                            </span>

                        </div>

                    )

                }

            </div>

            <Link
                href={`/documents/${document.id}`}
            >

                <Button
                    className="
                        w-full
                        mt-6
                    "
                >

                    View Details

                    <ArrowRight
                        className="ml-2"
                        size={18}
                    />

                </Button>

            </Link>

        </Card>

    );

}