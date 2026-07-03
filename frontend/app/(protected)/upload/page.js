"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button.jsx";

import {
  UploadDropzone,
  UploadProgress,
  UploadSuccess,
  RecentUploads,
} from "@/components/upload";

import {
  uploadDocument,
  getDocuments,
} from "@/services/documentService";

import { toast } from "sonner";

export default function UploadPage() {

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [result, setResult] =
    useState(null);

  const [documents, setDocuments] =
    useState([]);

  useEffect(() => {

    loadDocuments();

  }, []);

  const loadDocuments =
    async () => {

      try {

        const docs =
          await getDocuments();

        setDocuments(
          docs
        );

      }

      catch (error) {

        console.error(error);

      }

    };

  const handleUpload =
    async () => {

      if (!file) {

        toast.warning(
          "Please select a PDF first."
        );

        return;

      }

      setLoading(true);

      setResult(null);

      setProgress(0);

      try {

        // Fake progress animation

        const interval =
          setInterval(() => {

            setProgress((prev) => {

              if (prev >= 90) {

                clearInterval(interval);

                return prev;

              }

              return prev + 15;

            });

          }, 400);

        const data =
          await uploadDocument(file);

        toast.success(
          `${file.name} uploaded successfully!`
        );

        clearInterval(interval);

        setProgress(100);

        setResult(data);

        setFile(null);

        loadDocuments();

      }

      catch (error) {

        console.error(error);

        toast.error(
          "Failed to upload document."
        );

      }

      finally {

        setLoading(false);

      }

    };

  return (

    <div className="max-w-6xl mx-auto space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Upload Knowledge

        </h1>

        <p className="text-slate-500 mt-2">

          Upload PDFs to build your AI knowledge base.

        </p>

      </div>

      <UploadDropzone

        onFileSelect={
          setFile
        }

      />

      {

        file &&

        <div
          className="
            rounded-xl
            border
            p-4
            flex
            justify-between
            items-center
          "
        >

          <div>

            <h3 className="font-semibold">

              {file.name}

            </h3>

            <p className="text-sm text-slate-500">

              {(file.size / 1024 / 1024).toFixed(2)} MB

            </p>

          </div>

          <Button

            onClick={
              handleUpload
            }

            disabled={
              loading
            }

            className="
              bg-blue-600
              text-white
              px-5
              py-2
              rounded-xl
              disabled:opacity-50
            "

          >

            {

              loading

                ?

                "Uploading..."

                :

                "Start Upload"

            }

          </Button>

        </div>

      }

      <UploadProgress

        loading={loading}

        progress={progress}

      />

      <UploadSuccess

        result={result}

      />

      <RecentUploads

        documents={documents}

      />

    </div>

  );

}