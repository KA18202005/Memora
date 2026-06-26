"use client";

import {

    FileSearch

} from "lucide-react";

import {

    Card

} from "@/components/ui/card";

export default function EmptyDocuments() {

    return (

        <Card
            className="
                rounded-2xl
                p-16
                text-center
            "
        >

            <FileSearch

                size={60}

                className="
                    mx-auto
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

                No Documents Found

            </h2>

            <p
                className="
                    text-slate-500
                    mt-3
                "
            >

                Upload your first PDF to start building
                your personal knowledge base.

            </p>

        </Card>

    );

}