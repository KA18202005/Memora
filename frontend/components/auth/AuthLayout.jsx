"use client";

export default function AuthLayout({

    children

}) {

    return (

        <div
            className="
                min-h-screen
                bg-linear-to-br
                from-slate-50
                via-white
                to-violet-50
                flex
                items-center
                justify-center
                p-6
            "
        >

            {children}

        </div>

    );

}