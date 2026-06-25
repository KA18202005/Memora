"use client";

import {
    useEffect,
    useState
} from "react";

import {
    useParams
} from "next/navigation";

import Link from "next/link";
import {
    getDocument,
    getTopics
} from "@/services/documentService";

export default function DocumentPage() {

    const params =
        useParams();

    const [document, setDocument] =
        useState(null);
    const [topics, setTopics] =
        useState([]);
    useEffect(() => {

        if (params?.id) {

            loadDocument();

        }

    }, [params]);

    const loadDocument =
        async () => {

            try {

                const data =
                    await getDocument(
                        params.id
                    );

                const topicData =
                    await getTopics(
                        params.id
                    );

                setDocument(
                    data
                );

                setTopics(
                    topicData.topics
                );

            } catch (error) {

                console.error(
                    error
                );
            }
        };

    if (!document) {

        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">
                {document.title}
            </h1>

            <div
                className="
          bg-white
          p-6
          rounded-xl
          shadow
        "
            >

                <pre
                    className="
            whitespace-pre-wrap
          "
                >
                    {document.content}
                </pre>
                <div className="mt-8">

                    <h2 className="text-2xl font-bold mb-4">
                        Topics
                    </h2>

                    <div className="flex flex-wrap gap-2">

                        {topics.map(
                            (topic, index) => (

                                <Link
                                    key={index}
                                    href={`/topics/${topic}`}
                                >
                                    <span
                                        className="
          bg-blue-100
          text-blue-700
          px-3
          py-1
          rounded-full
          cursor-pointer
        "
                                    >
                                        {topic}
                                    </span>
                                </Link>

                            )
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}