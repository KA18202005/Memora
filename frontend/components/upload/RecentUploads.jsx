"use client";

import Link from "next/link";

import { FileText } from "lucide-react";

import { Card } from "@/components/ui/card.jsx";

export default function RecentUploads({

  documents

}) {

  if (!documents?.length) {

    return null;

  }

  return (

    <Card className="rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">

        Recent Uploads

      </h2>

      <div className="space-y-4">

        {

          documents.slice(0,5).map((doc)=>(

            <Link

              href={`/documents/${doc.id}`}

              key={doc.id}

              className="
                flex
                justify-between
                items-center
                border
                rounded-xl
                p-4
                hover:bg-slate-50
                transition
              "

            >

              <div className="flex items-center gap-3">

                <FileText
                  className="text-blue-600"
                />

                <div>

                  <h3 className="font-semibold">

                    {doc.title}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {doc.source_type}

                  </p>

                </div>

              </div>

            </Link>

          ))

        }

      </div>

    </Card>

  );

}