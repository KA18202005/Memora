"use client";

import { useState } from "react";

import {
  uploadDocument,
} from "@/services/documentService";

export default function UploadPage() {

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const handleUpload =
    async () => {

      if (!file) return;

      try {

        setLoading(true);

        const data =
          await uploadDocument(
            file
          );

        setResult(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Upload Document
      </h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={handleUpload}
        className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          mt-4
          block
        "
      >
        {loading
          ? "Uploading..."
          : "Upload PDF"}
      </button>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">

          <h2 className="font-bold text-xl mb-3">
            Upload Successful
          </h2>

          <p>
            Document ID:
            {" "}
            {result.document_id}
          </p>

          <p>
            Chunks:
            {" "}
            {result.total_chunks}
          </p>

          <p>
            Topics:
            {" "}
            {result.topics_found}
          </p>

          <p>
            Relationships:
            {" "}
            {result.relationships_found}
          </p>

        </div>
      )}

    </div>
  );
}