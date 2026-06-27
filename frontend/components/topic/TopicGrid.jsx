"use client";

import TopicCard from "./TopicCard";

export default function TopicGrid({

    topics

}) {

    if (!topics.length) {

        return null;

    }

    return (

        <div
            className="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
            "
        >

            {

                topics.map(

                    (topic)=>(

                        <TopicCard

                            key={topic}

                            topic={topic}

                        />

                    )

                )

            }

        </div>

    );

}