"use client";

import {
    useState
} from "react";

import {
    getRevision
} from "@/services/revisionService";

export default function RevisionPage() {

    const [topic, setTopic] =
        useState("");

    const [data, setData] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const handleGenerate =
        async () => {

            try {

                setLoading(true);

                const result =
                    await getRevision(
                        topic
                    );

                setData(result);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

    return (
        <div className="max-w-4xl mx-auto">

            <h1 className="text-4xl font-bold mb-8">
                Revision Engine
            </h1>

            <input
                type="text"
                placeholder="Enter Topic"
                value={topic}
                onChange={(e) =>
                    setTopic(
                        e.target.value
                    )
                }
                className="
          w-full
          border
          rounded-lg
          p-4
        "
            />

            <button
                onClick={handleGenerate}
                className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          mt-4
        "
            >
                {loading
                    ? "Generating..."
                    : "Generate Revision Plan"}
            </button>

            {data && (

                <div
                    className="
            mt-8
            bg-white
            p-6
            rounded-xl
            shadow
          "
                >

                    <h2 className="text-2xl font-bold">
                        {data.topic}
                    </h2>

                    <p className="mt-4">
                        Retention Score:
                        {" "}
                        {data.retention_score}%
                    </p>

                    <p>
                        Average Score:
                        {" "}
                        {data.average_score}
                    </p>

                    <div className="mt-4">

                        <h3 className="font-semibold">
                            Revision Plan
                        </h3>

                        <div className="mt-4">

                            <h3 className="font-semibold">
                                Recommendation
                            </h3>

                            <p>
                                {data.recommendation}
                            </p>

                            <p className="mt-2">
                                Revision Type:
                                {" "}
                                {data.revision_type}
                            </p>

                            <p className="mt-2">
                                Priority:
                                {" "}
                                {data.priority}
                            </p>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}