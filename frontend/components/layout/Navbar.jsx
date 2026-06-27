"use client";

import {

    Bell,

    Search

} from "lucide-react";

import { useAuth } from "@/context/AuthContext";


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

            <div
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

                    type="text"

                    placeholder="Search your knowledge..."

                    className="
                        w-full
                        bg-slate-50
                        border
                        border-slate-200
                        rounded-2xl
                        pl-11
                        pr-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-violet-500
                        focus:ring-4
                        focus:ring-violet-100
                    "

                />

            </div>

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