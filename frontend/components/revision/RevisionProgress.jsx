"use client";

export default function RevisionProgress({

    current,

    total

}) {

    const progress =
        Math.round(((current + 1) / total) * 100);

    return (

        <div
            className="
                bg-background
                rounded-2xl
                p-6
                shadow-sm
                border-border
            "
        >

            <div
                className="
                    flex
                    justify-between
                    items-center
                    mb-4
                "
            >

                <h2
                    className="
                        text-lg
                        font-semibold
                    "
                >

                    Question {current + 1} of {total}

                </h2>

                <span
                    className="
                        text-violet-600
                        font-semibold
                    "
                >

                    {progress}%

                </span>

            </div>

            <div
                className="
                    w-full
                    h-3
                    rounded-full
                    bg-background/50
                    border
                    border-border
                    overflow-hidden
                "
            >

                <div

                    className="
                        h-full
                        rounded-full
                        bg-violet-600
                        transition-all
                        duration-700
                    "

                    style={{

                        width: `${progress}%`

                    }}

                />

            </div>

        </div>

    );

}