"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { UploadCloud } from "lucide-react";

import { Card } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function UploadDropzone({

    onFileSelect

}) {

    const onDrop = useCallback(

        (acceptedFiles) => {

            if (acceptedFiles.length > 0) {

                onFileSelect(
                    acceptedFiles[0]
                );

            }

        },

        [onFileSelect]

    );

    const {

        getRootProps,
        getInputProps,
        isDragActive

    } = useDropzone({

        onDrop,

        multiple: false,

        accept: {

            "application/pdf": [
                ".pdf"
            ]

        }

    });

    return (

        <Card
            {...getRootProps()}
            className={`
                cursor-pointer
                rounded-2xl
                border-2
                border-dashed
                p-12
                text-center
                transition-all
                duration-300

                ${

                    isDragActive

                        ?

                        "border-blue-500 bg-background"

                        :

                        "border-slate-300 hover:border-blue-500 hover:bg-accent hover:text-accent-foreground"

                }

            `}
        >

            <input
                {...getInputProps()}
            />

            <UploadCloud

                size={60}

                className="
                    mx-auto
                    text-blue-600
                    mb-6
                "

            />

            <h2
                className="
                    text-2xl
                    font-bold
                "
            >
                Upload Knowledge
            </h2>

            <p
                className="
                    text-slate-500
                    mt-3
                "
            >

                Drag & Drop your PDF here

            </p>

            <p
                className="
                    text-slate-400
                    my-3
                "
            >
                or
            </p>

            <Button>

                Browse Files

            </Button>

            <p
                className="
                    mt-5
                    text-sm
                    text-slate-400
                "
            >

                PDF only • Max 20 MB

            </p>

        </Card>

    );

}