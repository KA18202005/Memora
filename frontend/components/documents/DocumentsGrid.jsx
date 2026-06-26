"use client";

import DocumentCard from "./DocumentCard";

export default function DocumentsGrid({

    documents

}) {

    if (!documents?.length) {

        return null;

    }

    return (

        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
            "
        >

            {

                documents.map((document) => (

                    <DocumentCard

                        key={document.id}

                        document={document}

                    />

                ))

            }

        </div>

    );

}