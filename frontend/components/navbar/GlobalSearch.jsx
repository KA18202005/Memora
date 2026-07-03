"use client";

import {

    useEffect,

    useRef,

    useState

} from "react";

import {

    Search,

    Loader2

} from "lucide-react";

import {

    globalSearch

} from "@/services/searchService";

import SearchDropdown from "./SearchDropdown";

export default function GlobalSearch() {

    const [query, setQuery] =
        useState("");

    const [results, setResults] =
        useState({

            documents: [],

            topics: []

        });

    const [loading, setLoading] =
        useState(false);

    const [open, setOpen] =
        useState(false);

    const wrapperRef =
        useRef(null);

    useEffect(() => {

        const handleClickOutside = (

            event

        ) => {

            if (

                wrapperRef.current &&

                !wrapperRef.current.contains(

                    event.target

                )

            ) {

                setOpen(false);

            }

        };

        document.addEventListener(

            "mousedown",

            handleClickOutside

        );

        return () =>

            document.removeEventListener(

                "mousedown",

                handleClickOutside

            );

    }, []);

    useEffect(() => {

        if (!query.trim()) {

            setResults({

                documents: [],

                topics: []

            });

            setOpen(false);

            return;

        }

        const timer = setTimeout(

            async () => {

                try {

                    setLoading(true);

                    const data =

                        await globalSearch(

                            query

                        );

                    setResults(data);

                    setOpen(true);

                }

                catch (error) {

                    console.error(error);

                }

                finally {

                    setLoading(false);

                }

            },

            300

        );

        return () =>

            clearTimeout(timer);

    }, [query]);

    return (

        <div

            ref={wrapperRef}

            className="

                relative

                w-107.5

            "

        >

            <Search

                size={18}

                className="

                    absolute

                    left-4

                    top-1/2

                    -translate-y-1/2

                    text-slate-400

                "

            />

            <input

                value={query}

                onChange={(e) =>

                    setQuery(

                        e.target.value

                    )

                }

                placeholder="Search your knowledge..."

                className="
        w-full
        bg-background
        border
        border-border
        text-foreground
        placeholder:text-muted-foreground
        rounded-2xl
        pl-11
        pr-4
        py-3
        outline-none
        transition-all
        duration-300
        focus:ring-2
        focus:ring-violet-500
    "

            />

            {

                loading &&

                <Loader2

                    size={18}

                    className="
absolute
left-4
top-1/2
-translate-y-1/2
text-muted-foreground
"

                />

            }

            {

                open &&

                <SearchDropdown

                    results={results}

                    onClose={() =>

                        setOpen(false)

                    }

                />

            }

        </div>

    );

}