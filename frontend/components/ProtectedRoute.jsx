"use client";

import {

    useEffect

} from "react";

import {

    usePathname,

    useRouter

} from "next/navigation";

import {

    useAuth

} from "@/context/AuthContext";

export default function ProtectedRoute({

    children

}) {

    const {

        user,

        loading

    } = useAuth();

    const router =
        useRouter();

    const pathname =
        usePathname();

    useEffect(() => {

        if (

            !loading &&

            !user

        ) {

            router.replace(

                `/login?next=${pathname}`

            );

        }

    }, [

        user,

        loading,

        pathname,

        router

    ]);

    if (loading) {

        return (

            <div className="p-20 text-center">

                Checking Authentication...

            </div>

        );

    }

    if (!user) {

        return null;

    }

    return children;

}