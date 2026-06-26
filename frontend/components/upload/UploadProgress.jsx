"use client";

import { Card } from "@/components/ui/card.jsx";
import { Progress } from "@/components/ui/progress.jsx";

import {
  CheckCircle2,
  Loader2,
} from "lucide-react";

const STEPS = [
  "Uploading PDF",
  "Extracting Text",
  "Creating Chunks",
  "Generating Embeddings",
  "Extracting Topics",
  "Building Knowledge Graph",
];

export default function UploadProgress({

  loading,
  progress = 0

}) {

  if (!loading) {

    return null;

  }

  return (

    <Card className="rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-5">
        Processing Document
      </h2>

      <Progress
        value={progress}
        className="mb-8"
      />

      <div className="space-y-4">

        {

          STEPS.map((step, index) => {

            const completed =
              progress >= ((index + 1) / STEPS.length) * 100;

            return (

              <div
                key={step}
                className="flex justify-between items-center"
              >

                <span>
                  {step}
                </span>

                {

                  completed ?

                  <CheckCircle2
                    className="text-green-500"
                    size={20}
                  />

                  :

                  <Loader2
                    className="animate-spin text-blue-600"
                    size={20}
                  />

                }

              </div>

            );

          })

        }

      </div>

    </Card>

  );

}