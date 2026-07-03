"use client";

import {

    LogOut

} from "lucide-react";

import {

    useRouter

} from "next/navigation";

import {

    toast

} from "sonner";

import {

    useAuth

} from "@/context/AuthContext";

export default function AccountCard() {

    const router =
        useRouter();

    const {

        logout

    } = useAuth();

    const handleLogout = () => {

        logout();

        toast.success(

            "Logged out successfully."

        );

        router.push("/login");

    };

    return (

        <div
            className="
                bg-white
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

                Account

            </h2>

            <button

                onClick={handleLogout}

                className="
                    w-full
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    rounded-xl
                    py-3
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition
                "

            >

                <LogOut size={18} />

                Logout

            </button>

        </div>

    );

}