"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function TopicSearch({

    search,

    setSearch

}) {

    return (

        <div className="relative">

            <Search

                className="
                    absolute
                    left-3
                    top-3
                    text-slate-400
                "

                size={18}

            />

            <Input

                value={search}

                placeholder="Search topics..."

                className="pl-10"

                onChange={(e)=>

                    setSearch(
                        e.target.value
                    )

                }

            />

        </div>

    );

}