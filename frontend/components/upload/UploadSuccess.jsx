"use client";

import { Card } from "@/components/ui/card.jsx";

import {
  CheckCircle2,
  FileText,
  Brain,
  Network,
} from "lucide-react";

export default function UploadSuccess({

  result

}) {

  if (!result) {

    return null;

  }

  return (

    <Card className="rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <CheckCircle2
          size={32}
          className="text-green-500"
        />

        <div>

          <h2 className="text-2xl font-bold">
            Upload Successful
          </h2>

          <p className="text-slate-500">
            Your document has been processed.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="border rounded-xl p-4">

          <FileText
            className="text-blue-600 mb-2"
          />

          <h3 className="font-semibold">
            Chunks
          </h3>

          <p className="text-3xl font-bold mt-2">

            {result.total_chunks}

          </p>

        </div>

        <div className="border rounded-xl p-4">

          <Brain
            className="text-violet-600 mb-2"
          />

          <h3 className="font-semibold">
            Topics
          </h3>

          <p className="text-3xl font-bold mt-2">

            {result.topics_found}

          </p>

        </div>

        <div className="border rounded-xl p-4">

          <Network
            className="text-green-600 mb-2"
          />

          <h3 className="font-semibold">
            Relationships
          </h3>

          <p className="text-3xl font-bold mt-2">

            {result.relationships_found}

          </p>

        </div>

      </div>

    </Card>

  );

}