"use client";

import {

    Bell,

    Search

} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import {

    GlobalSearch

} from "@/components/navbar";


export default function Navbar() {
  const {
  
      user
  
  } = useAuth();
  
  const initial =
      user?.name
          ?.charAt(0)
          ?.toUpperCase() || "?";

    return (

        <header
            className="
                h-20
                bg-white
                border-b
                border-slate-200
                px-8
                flex
                items-center
                justify-between
                sticky
                top-0
                z-50
            "
        >

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

                {/* Notification */}

                <button

                    className="
                        relative
                        w-11
                        h-11
                        rounded-full
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        hover:bg-violet-100
                        transition
                    "

                >

                    <Bell

                        size={20}

                        className="
                            text-slate-600
                        "

                    />

                    <span
                        className="
                            absolute
                            top-2
                            right-2
                            w-2.5
                            h-2.5
                            rounded-full
                            bg-red-500
                        "
                    />

                </button>

                {/* User */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        bg-slate-50
                        rounded-2xl
                        px-4
                        py-2
                        border
                        border-slate-200
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
                                text-slate-500
                            "
                        >

                            Welcome back

                        </p>

                        <p
                            className="
                                font-semibold
                                text-slate-800
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