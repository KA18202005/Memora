"use client";

import { useState } from "react";

import {
  ChatHeader,
  SuggestedQuestions,
  ChatMessages,
  TypingIndicator,
  ChatInput
} from "@/components/chat";

import {
  askMemora
} from "@/services/chatService";

export default function ChatPage() {

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const sendQuestion =
    async (question) => {

      if (!question.trim()) {

        return;

      }

      const userMessage = {

        role: "user",

        content: question

      };

      setMessages((prev) => [

        ...prev,

        userMessage

      ]);

      try {

        setLoading(true);

        const result =
          await askMemora(
            question
          );

        setMessages((prev) => [

          ...prev,

          {

            role: "assistant",

            content: result.answer

          }

        ]);

      }

      catch (error) {

        console.error(error);

      }

      finally {

        setLoading(false);

      }

    };

  return (

    <div
      className="
                max-w-5xl
                mx-auto
                space-y-6
            "
    >

      <ChatHeader />

      {

        messages.length === 0 && (

          <SuggestedQuestions

            onSelect={
              sendQuestion
            }

          />

        )

      }

      <ChatMessages

        messages={
          messages
        }

      />

      <TypingIndicator

        loading={
          loading
        }

      />

      <ChatInput

        loading={
          loading
        }

        onSend={
          sendQuestion
        }

      />

    </div>

  );

}