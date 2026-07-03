"use client";

import { useAuth } from "@/context/AuthContext";

import { ThemeToggle } from "@/components/theme";

import {

    GlobalSearch,

    NotificationBell

} from "@/components/navbar";

import {

    Menu

} from "lucide-react";

import {

    useSidebar

} from "@/context/SidebarContext";


export default function Navbar() {
    const {

        user

    } = useAuth();

    const {

        open,

        setOpen

    } = useSidebar();

    const initial =
        user?.name
            ?.charAt(0)
            ?.toUpperCase() || "?";

    return (

        <header
            className="
                h-20
                bg-background
                border-b
                border-border
                px-8
                flex
                items-center
                justify-between
                sticky
                top-0
                z-50
            "
        >

            <button

                className="
lg:hidden
mr-4
"

                onClick={() =>

                    setOpen(

                        !open

                    )

                }

            >

                <Menu />

            </button>

            {/* Search */}

            <GlobalSearch />

            {/* Right Side */}

            <div
                className="
                    flex
                    items-center
                    gap-5
                "
            >

                <ThemeToggle />

                {/* Notification */}

                <NotificationBell />

                {/* User */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        bg-card
                        rounded-2xl
                        px-4
                        py-2
                        border
                        border-border
                    "
                >

                    {/* Avatar */}

                    <div
                        className="
                            w-11
                            h-11
                            rounded-full
                            bg-violet-600
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-lg
                            shadow
                        "
                    >

                        {initial}

                    </div>

                    {/* Welcome */}

                    <div>

                        <p
                            className="
                                text-xs
                                text-muted-foreground
                            "
                        >

                            Welcome back

                        </p>

                        <p
                            className="
                                font-semibold
                                text-foreground
                            "
                        >

                            {user?.name || "Guest"} 👋

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}