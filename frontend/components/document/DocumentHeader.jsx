"use client";

import { FileText } from "lucide-react";

export default function DocumentHeader({

    document

}) {

    return (

        <div
            className="
                flex
                items-center
                gap-5
            "
        >

            <div
                className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-background
                    flex
                    items-center
                    justify-center
                "
            >

                <FileText
                    className="
                        text-blue-600
                    "
                    size={30}
                />

            </div>

            <div>

                <h1
                    className="
                        text-4xl
                        font-bold
                    "
                >
                    {document.title}
                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                    "
                >

                    PDF Document

                </p>

            </div>

        </div>

    );

}