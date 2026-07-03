"use client";

import {

    AlertTriangle,

    BookOpen,

    Brain

} from "lucide-react";

import NotificationItem from "./NotificationItem";

export default function NotificationDropdown({

    data

}) {

    if (!data) {

        return null;

    }

    return (

        <div
            className="
                absolute
                right-0
                mt-3
                w-96
                bg-background
                rounded-2xl
                shadow-2xl
                border
                overflow-hidden
                z-50
            "
        >

            <div
                className="
                    px-5
                    py-4
                    border-b
                    font-semibold
                    text-lg
                "
            >

                Notifications

            </div>

            {

                data.weak_topics

                    ?.slice(0, 3)

                    .map((topic) => (

                        <NotificationItem

                            key={topic.topic}

                            icon={<AlertTriangle size={18} />}

                            color="bg-red-500"

                            title={`Weak Topic • ${topic.topic}`}

                            subtitle={`Retention Score : ${topic.retention_score}%`}

                        />

                    ))

            }

            {

                data.recommendations

                    ?.slice(0, 3)

                    .map((item) => (

                        <NotificationItem

                            key={item.topic}

                            icon={<BookOpen size={18} />}

                            color="bg-blue-600"

                            title={item.topic}

                            subtitle={item.recommendation}

                        />

                    ))

            }

            <NotificationItem

                icon={<Brain size={18} />}

                color="bg-violet-600"

                title="Average Retention"

                subtitle={`${data.stats.average_retention}%`}

            />

        </div>

    );

}