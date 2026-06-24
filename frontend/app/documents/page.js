"use client";

import {
    useEffect,
    useState
} from "react";
import Link from "next/link";
import {
    getDocuments
} from "@/services/documentService";

export default function DocumentsPage() {

    const [documents, setDocuments] =
        useState([]);

    useEffect(() => {

        loadDocuments();

    }, []);

    const loadDocuments =
        async () => {

            const data =
                await getDocuments();

            setDocuments(data);
        };

    return (
        <div>

            <h1
                className="
          text-4xl
          font-bold
          mb-8
        "
            >
                Documents
            </h1>

            <div className="space-y-4">

                {documents.map(
                    (doc) => (

                        <Link
                            href={`/documents/${doc.id}`}
                            key={doc.id}


                        >

                            <h2
                                className="
                  text-xl
                  font-semibold
                "
                            >
                                {doc.title}
                            </h2>

                            <p>
                                Type:
                                {" "}
                                {doc.source_type}
                            </p>

                            <p>
                                Length:
                                {" "}
                                {doc.text_length}
                            </p>

                        </Link>
                    )
                )}

            </div>
            
        </div>
    );
}