"use client";

import { Card } from "@/components/ui/card";

export default function SectionCard({

    title,
    icon: Icon,
    children

}) {

    return (

        <Card
            className="
                rounded-2xl
                shadow-sm
                p-6
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-6
                "
            >

                <h2
                    className="
                        text-xl
                        font-semibold
                    "
                >
                    {title}
                </h2>

                {

                    Icon &&

                    <Icon
                        className="
                            text-blue-600
                        "
                    />

                }

            </div>

            {children}

        </Card>

    );

}