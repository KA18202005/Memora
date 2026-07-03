"use client";

import {

    Network

} from "lucide-react";

export default function GraphHeader() {

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
                    bg-background
                    flex
                    items-center
                    justify-center
                "
            >

                <Network
                    className="text-green-600"
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

                    Knowledge Graph

                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                    "
                >

                    Explore relationships between concepts.

                </p>

            </div>

        </div>

    );

}