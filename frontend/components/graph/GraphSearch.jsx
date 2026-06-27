"use client";

import {

    Search

} from "lucide-react";

import {

    Input

} from "@/components/ui/input";

export default function GraphSearch({

    search,

    setSearch

}) {

    return (

        <div
            className="
                relative
                mb-6
            "
        >

            <Search
                className="
                    absolute
                    left-4
                    top-3
                    text-slate-400
                "
                size={18}
            />

            <Input

                value={search}

                onChange={(e)=>

                    setSearch(
                        e.target.value
                    )

                }

                placeholder="Search node..."

                className="
                    pl-10
                    h-12
                    rounded-xl
                "

            />

        </div>

    );

}