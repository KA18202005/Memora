"use client";

import {
  useState
} from "react";

import {
  askMemora
} from "@/services/chatService";

export default function ChatPage() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleAsk =
    async () => {

      if (!question) return;

      try {

        setLoading(true);

        const result =
          await askMemora(
            question
          );

        setAnswer(
          result.answer
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Ask Memora
      </h1>

      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(
            e.target.value
          )
        }
        rows={4}
        placeholder="Ask a question..."
        className="
          w-full
          border
          rounded-lg
          p-4
        "
      />

      <button
        onClick={handleAsk}
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
          ? "Thinking..."
          : "Ask"}
      </button>

      {answer && (

        <div
          className="
            mt-8
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >

          <h2
            className="
              font-bold
              mb-4
            "
          >
            Answer
          </h2>

          <p>
            {answer}
          </p>

        </div>
      )}

    </div>
  );
}