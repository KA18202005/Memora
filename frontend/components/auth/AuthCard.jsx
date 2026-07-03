"use client";

export default function AuthCard({

    children

}) {

    return (

        <div
            className="
                w-full
                max-w-md
                bg-background
                rounded-3xl
                shadow-2xl
                border
                p-8
            "
        >

            {children}

        </div>

    );

}