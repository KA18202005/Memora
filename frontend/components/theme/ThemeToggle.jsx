"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const {

        theme,

        setTheme

    } = useTheme();

    const [

        mounted,

        setMounted

    ] = useState(false);

    useEffect(() => {

        setMounted(true);

    }, []);

    if (!mounted) {

        return null;

    }

    return (

        <button

            onClick={() =>

                setTheme(

                    theme === "dark"

                        ? "light"

                        : "dark"

                )

            }

            className="
                w-11
                h-11
                rounded-full
                bg-slate-100
                dark:bg-slate-800
                flex
                items-center
                justify-center
                transition-all
                hover:scale-105
            "

        >

            {

                theme === "dark"

                    ?

                    <Sun

                        className="text-yellow-400"

                        size={20}

                    />

                    :

                    <Moon

                        className="text-slate-700 dark:text-slate-200"

                        size={20}

                    />

            }

        </button>

    );

}