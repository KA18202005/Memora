"use client";

import { useEffect, useMemo, useState } from "react";

import {
  DocumentsGrid,
  SearchBar,
  EmptyDocuments,
} from "@/components/documents";

import { Skeleton } from "@/components/ui/skeleton";

import { getDocuments } from "@/services/documentService";

export default function DocumentsPage() {

  const [documents, setDocuments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    loadDocuments();

  }, []);

  const loadDocuments = async () => {

    try {

      setLoading(true);

      const data =
        await getDocuments();

      setDocuments(data);

    }

    catch (error) {

      console.error(error);

    }

    finally {

      setLoading(false);

    }

  };

  const filteredDocuments =
    useMemo(() => {

      return documents.filter((doc) =>

        doc.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    }, [documents, search]);

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Documents

        </h1>

        <p className="text-slate-500 mt-2">

          Browse and manage your uploaded knowledge.

        </p>

      </div>

      <SearchBar

        search={search}

        setSearch={setSearch}

      />

      {

        loading ?

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          {

            [1,2,3,4,5,6].map((item)=>(

              <Skeleton

                key={item}

                className="h-64 rounded-2xl"

              />

            ))

          }

        </div>

        :

        filteredDocuments.length ?

        <DocumentsGrid

          documents={
            filteredDocuments
          }

        />

        :

        <EmptyDocuments />

      }

    </div>

  );

}