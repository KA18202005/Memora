"use client";

import { Card } from "@/components/ui/card";

export default function MetricCard({

    icon: Icon,
    title,
    value,
    color

}) {

    return (

        <Card
            className="
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition-all
            "
        >

            <div className="p-6">

                <div
                    className="
                        flex
                        justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-slate-500
                            "
                        >
                            {title}
                        </p>

                        <h2
                            className="
                                text-4xl
                                font-bold
                                mt-3
                            "
                        >
                            {value}
                        </h2>

                    </div>

                    <div
                        className={`
                            w-14
                            h-14
                            rounded-2xl
                            flex
                            items-center
                            justify-center
                            ${color}
                        `}
                    >

                        <Icon
                            className="text-white"
                        />

                    </div>

                </div>

            </div>

        </Card>

    );

}