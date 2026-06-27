"use client";

import {

    Network

} from "lucide-react";

export default function EmptyGraph() {

    return (

        <div
            className="
                h-162.5
                flex
                flex-col
                justify-center
                items-center
                border
                rounded-2xl
            "
        >

            <Network
                size={70}
                className="
                    text-slate-400
                    mb-5
                "
            />

            <h2
                className="
                    text-2xl
                    font-bold
                "
            >

                No Graph Available

            </h2>

            <p
                className="
                    text-slate-500
                    mt-2
                "
            >

                Upload documents to generate a knowledge graph.

            </p>

        </div>

    );

}