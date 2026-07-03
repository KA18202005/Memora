"use client";

import Link from "next/link";

import {

    FileText,

    BookOpen

} from "lucide-react";

export default function SearchResult({

    type,

    item,

    onClick

}) {

    const isDocument =
        type === "document";

    return (

        <Link

            href={

                isDocument

                    ?

                    `/documents/${item.id}`

                    :

                    `/topics/${encodeURIComponent(item)}`

            }

            onClick={onClick}

        >

            <div
                className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    hover:bg-slate-100
                    cursor-pointer
                    transition
                "
            >

                {

                    isDocument

                        ?

                        <FileText

                            size={18}

                            className="text-blue-600"

                        />

                        :

                        <BookOpen

                            size={18}

                            className="text-violet-600"

                        />

                }

                <span>

                    {

                        isDocument

                            ?

                            item.title

                            :

                            item

                    }

                </span>

            </div>

        </Link>

    );

}