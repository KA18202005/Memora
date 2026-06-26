"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import {
    DocumentHeader,
    DocumentPreview,
    TopicsSection,
    QuickActions,
    DocumentStats
} from "@/components/document";

import { Skeleton } from "@/components/ui/skeleton";

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

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        if (params?.id) {

            loadDocument();

        }

    }, [params]);

    const loadDocument =
        async () => {

            try {

                setLoading(true);

                const documentData =
                    await getDocument(
                        params.id
                    );

                const topicData =
                    await getTopics(
                        params.id
                    );

                setDocument(
                    documentData
                );

                setTopics(
                    topicData.topics
                );

            }

            catch (error) {

                console.error(error);

            }

            finally {

                setLoading(false);

            }

        };

    if (loading) {

        return (

            <div className="space-y-6">

                <Skeleton className="h-16 w-96 rounded-xl" />

                <Skeleton className="h-80 rounded-2xl" />

                <Skeleton className="h-32 rounded-2xl" />

                <Skeleton className="h-48 rounded-2xl" />

            </div>

        );

    }

    if (!document) {

        return (

            <div className="text-center py-20">

                <h2 className="text-2xl font-bold">

                    Document not found

                </h2>

            </div>

        );

    }

    return (

        <div
            className="
                max-w-7xl
                mx-auto
                space-y-8
            "
        >

            <DocumentHeader
                document={document}
            />

            <DocumentPreview
                content={document.content}
            />

            <TopicsSection
                topics={topics}
            />

            <QuickActions
                documentId={document.id}
            />

            <DocumentStats
                document={document}
                topics={topics}
            />

        </div>

    );

}