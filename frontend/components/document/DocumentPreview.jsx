"use client";

import { Card } from "@/components/ui/card";

export default function DocumentPreview({

    content

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
                    mb-5
                "
            >
                Document Preview
            </h2>

            <pre
                className="
                    whitespace-pre-wrap
                    leading-7
                    text-slate-700
                    max-h-[500px]
                    overflow-y-auto
                "
            >
                {content}
            </pre>

        </Card>

    );

}