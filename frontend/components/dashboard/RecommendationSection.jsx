"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
    Brain,
    ArrowRight
} from "lucide-react";

import {
    motion
} from "framer-motion";

export default function RecommendationSection({

    recommendations

}) {

    if (!recommendations?.length) {

        return (

            <Card
                className="
          rounded-2xl
          p-6
        "
            >

                <h2
                    className="
            text-xl
            font-bold
            mb-4
          "
                >
                    AI Recommendations
                </h2>

                <p
                    className="
            text-slate-500
          "
                >
                    <div
                        className="
flex
flex-col
items-center
justify-center
py-12
text-center
"
                    >

                        <Brain
                            size={48}
                            className="
text-slate-400
mb-4
"
                        />

                        <h3
                            className="
text-xl
font-semibold
"
                        >

                            You're doing great!

                        </h3>

                        <p
                            className="
text-slate-500
mt-2
max-w-sm
"
                        >

                            Upload more documents and
                            Memora will generate new
                            AI-powered recommendations.

                        </p>

                    </div>
                </p>

            </Card>

        );

    }

    const badgeColor = {

        LOW:
            "bg-green-500 text-white",

        MEDIUM:
            "bg-yellow-500 text-white",

        HIGH:
            "bg-orange-500 text-white",

        CRITICAL:
            "bg-red-500 text-white"

    };

    return (

        <Card
            className="
        rounded-2xl
        p-6
      "
        >

            <div
                className="
          flex
          justify-between
          items-center
          mb-6
        "
            >

                <h2
                    className="
            text-xl
            font-bold
          "
                >
                    AI Recommendations
                </h2>

                <Brain
                    className="
            text-blue-600
          "
                />

            </div>

            <div
                className="
          space-y-4
        "
            >

                {

                    recommendations.map(

                        (

                            item,
                            index

                        ) => (

                            <motion.div

                                key={index}

                                whileHover={{
                                    scale: 1.02
                                }}

                                className="
                  border
                  rounded-xl
                  p-4
                  transition
                "

                            >

                                <div
                                    className="
                    flex
                    justify-between
                    items-center
                  "
                                >

                                    <h3
                                        className="
                      font-semibold
                      text-lg
                    "
                                    >
                                        {item.topic}
                                    </h3>

                                    <Badge
                                        className={
                                            badgeColor[
                                            item.priority
                                            ]
                                        }
                                    >
                                        {item.priority}
                                    </Badge>

                                </div>

                                <p
                                    className="
                    text-sm
                    text-slate-500
                    mt-3
                  "
                                >
                                    {item.recommendation}
                                </p>

                                <div
                                    className="
                    flex
                    justify-between
                    items-center
                    mt-5
                  "
                                >

                                    <span
                                        className="
                      text-sm
                      text-blue-600
                    "
                                    >
                                        {item.revision_type}
                                    </span>

                                    <ArrowRight
                                        size={18}
                                    />

                                </div>

                            </motion.div>

                        )

                    )

                }

            </div>

        </Card>

    );

}