"use client";

import SearchResult from "./SearchResult";

export default function SearchDropdown({

    results,

    onClose

}) {

    const hasResults =

        results.documents.length ||

        results.topics.length;

    if (!hasResults) {

        return (

            <div
                className="
                    absolute
                    top-full
                    mt-2
                    w-full
                    bg-background
                    border
                    rounded-2xl
                    shadow-xl
                    p-5
                    text-slate-500
                    z-50
                "
            >

                No results found.

            </div>

        );

    }

    return (

        <div
            className="
                absolute
                top-full
                mt-2
                w-full
                bg-background
                rounded-2xl
                border
                shadow-xl
                overflow-hidden
                z-50
            "
        >

            {

                results.documents.length > 0 &&

                <>

                    <div
                        className="
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            bg-background
                            text-slate-500
                        "
                    >

                        Documents

                    </div>

                    {

                        results.documents.map(

                            (doc)=>(

                                <SearchResult

                                    key={doc.id}

                                    type="document"

                                    item={doc}

                                    onClick={onClose}

                                />

                            )

                        )

                    }

                </>

            }

            {

                results.topics.length > 0 &&

                <>

                    <div
                        className="
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            bg-background
                            text-slate-500
                        "
                    >

                        Topics

                    </div>

                    {

                        results.topics.map(

                            (topic)=>(

                                <SearchResult

                                    key={topic}

                                    type="topic"

                                    item={topic}

                                    onClick={onClose}

                                />

                            )

                        )

                    }

                </>

            }

        </div>

    );

}