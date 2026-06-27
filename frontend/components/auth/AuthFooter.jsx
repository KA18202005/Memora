"use client";

import Link from "next/link";

export default function AuthFooter({

    text,

    link,

    linkText

}) {

    return (

        <p
            className="
                mt-8
                text-center
                text-slate-500
            "
        >

            {text}

            {" "}

            <Link

                href={link}

                className="
                    text-violet-600
                    font-semibold
                    hover:underline
                "

            >

                {linkText}

            </Link>

        </p>

    );

}