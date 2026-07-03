"use client";

export default function ProfileCard({

    user

}) {

    const initial =

        user?.name

            ?.charAt(0)

            ?.toUpperCase() || "?";

    return (

        <div
            className="
                bg-background
                rounded-2xl
                border
                shadow-sm
                p-6
            "
        >

            <h2
                className="
                    text-xl
                    font-semibold
                    mb-6
                "
            >

                Profile

            </h2>

            <div className="flex items-center gap-5">

                <div
                    className="
                        w-18
                        h-18
                        rounded-full
                        bg-violet-600
                        text-white
                        text-3xl
                        font-bold
                        flex
                        items-center
                        justify-center
                    "
                >

                    {initial}

                </div>

                <div>

                    <h3
                        className="
                            text-2xl
                            font-bold
                        "
                    >

                        {user?.name}

                    </h3>

                    <p
                        className="
                            text-slate-500
                            mt-1
                        "
                    >

                        {user?.email}

                    </p>

                </div>

            </div>

        </div>

    );

}