"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import {

    TopicHeader,

    TopicDetails,

    TopicActions

} from "@/components/topic";

import {

    getTopic

} from "@/services/topicService";

export default function TopicPage() {

    const params =
        useParams();

    const [topicData, setTopicData] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        if (params?.topic) {

            loadTopic();

        }

    }, [params]);

    const loadTopic = async () => {

        try {

            setLoading(true);

            const result =
                await getTopic(
                    params.topic
                );

            console.log(result);

            setTopicData(result);

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

            <div
                className="
                    flex
                    justify-center
                    items-center
                    h-[60vh]
                "
            >

                Loading...

            </div>

        );

    }

    if (!topicData) {

        return (

            <div
                className="
                    flex
                    justify-center
                    items-center
                    h-[60vh]
                "
            >

                Topic not found.

            </div>

        );

    }

    return (

        <div
            className="
                max-w-6xl
                mx-auto
                space-y-8
            "
        >

            <TopicHeader />

            <TopicDetails

                topicData={topicData}

            />

            <TopicActions

                topic={topicData.topic}

            />

        </div>

    );

}