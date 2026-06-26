"use client";

import {
  Bell,
  Search,
  UserCircle
} from "lucide-react";

export default function Navbar() {

  return (

    <header
      className="
        h-16
        bg-white
        border-b
        border-slate-200
        flex
        items-center
        justify-between
        px-8
        shadow-sm
      "
    >

      <div className="relative w-96">

        <Search
          size={18}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          placeholder="Search..."
          className="
            w-full
            pl-10
            pr-4
            py-2
            rounded-lg
            border
            border-gray-300
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell
          size={22}
          className="
            cursor-pointer
            text-gray-600
            hover:text-blue-600
          "
        />

        <div className="flex items-center gap-2">

          <UserCircle
            size={36}
            className="text-gray-600"
          />

          <div>

            <p className="font-semibold">
              Welcome Back 👋
            </p>

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              Continue Learning
            </p>

          </div>

        </div>

      </div>

    </header>

  );
}