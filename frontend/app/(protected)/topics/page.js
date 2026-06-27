"use client";

import { useEffect, useMemo, useState } from "react";

import {
    TopicHeader,
    TopicSearch,
    TopicGrid,
    EmptyTopics
} from "@/components/topic";

import {
    getTopics
} from "@/services/revisionService";

export default function TopicsPage() {

    const [topics, setTopics] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadTopics();

    }, []);

    const loadTopics = async () => {

        try {

            setLoading(true);

            const data =
                await getTopics();

            setTopics(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const filteredTopics =
        useMemo(() => {

            return topics.filter(

                topic =>

                    topic

                        .toLowerCase()

                        .includes(

                            search.toLowerCase()

                        )

            );

        }, [topics, search]);

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

    return (

        <div
            className="
                max-w-7xl
                mx-auto
                space-y-8
            "
        >

            <TopicHeader />

            <TopicSearch

                search={search}

                setSearch={setSearch}

            />

            {

                filteredTopics.length

                ?

                (

                    <TopicGrid

                        topics={filteredTopics}

                    />

                )

                :

                (

                    <EmptyTopics />

                )

            }

        </div>

    );

}