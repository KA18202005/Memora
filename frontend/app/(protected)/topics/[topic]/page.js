"use client";

import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "next/navigation";

import {
  getTopic
} from "@/services/topicService";

export default function TopicPage() {

  const params =
    useParams();

  const [data, setData] =
    useState(null);

  useEffect(() => {

    if (params?.topic) {

      loadTopic();

    }

  }, [params]);

  const loadTopic =
    async () => {

      try {

        const result =
          await getTopic(
            params.topic
          );

        setData(
          result
        );

      } catch (error) {

        console.error(
          error
        );
      }
    };

  if (!data) {

    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        {data.topic}
      </h1>

      <div
        className="
          bg-white
          rounded-xl
          shadow
          p-6
        "
      >

        <p>
          Retention Score:
          {" "}
          {data.retention_score}
        </p>

        <p>
          Priority:
          {" "}
          {data.priority}
        </p>

        <p>
          Recommendation:
          {" "}
          {data.recommendation}
        </p>

        <p>
          Revision Type:
          {" "}
          {data.revision_type}
        </p>

      </div>

    </div>
  );
}