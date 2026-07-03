"use client";

import { BrainCircuit } from "lucide-react";

export default function AuthHeader({

    title,

    subtitle

}) {

    return (

        <div
            className="
                text-center
                mb-8
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
                    mx-auto
                    mb-5
                "
            >

                <BrainCircuit

                    size={32}

                    className="text-violet-600"

                />

            </div>

            <h1
                className="
                    text-3xl
                    font-bold
                "
            >

                {title}

            </h1>

            <p
                className="
                    mt-3
                    text-slate-500
                "
            >

                {subtitle}

            </p>

        </div>

    );

}