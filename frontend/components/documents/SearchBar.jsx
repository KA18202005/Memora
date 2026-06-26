"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchBar({

    search,
    setSearch

}) {

    return (

        <div
            className="
                relative
                mb-8
            "
        >

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-3
                    text-slate-400
                "
            />

            <Input

                placeholder="Search documents..."

                value={search}

                onChange={(e) =>
                    setSearch(
                        e.target.value
                    )
                }

                className="
                    pl-11
                    h-12
                    rounded-xl
                "

            />

        </div>

    );

}