"use client";

import {

    useEffect,

    useState

} from "react";

import {

    SettingsHeader,

    ProfileCard,

    StatsCard,

    AccountCard

} from "@/components/settings";

import {

    getProfile

} from "@/services/authService";

import api from "@/services/api";

export default function SettingsPage() {

    const [user, setUser] =
        useState(null);

    const [stats, setStats] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        try {

            const [

                profile,

                dashboard

            ] = await Promise.all([

                getProfile(),

                api.get("/dashboard/full")

            ]);

            setUser(profile);

            setStats(dashboard.data.stats);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div
                className="
                    max-w-6xl
                    mx-auto
                    py-10
                    text-center
                    text-slate-500
                "
            >

                Loading...

            </div>

        );

    }

    return (

        <div
            className="grid
grid-cols-1
lg:grid-cols-2
gap-6
                mx-auto
                space-y-8
            "
        >

            <SettingsHeader />

            <ProfileCard

                user={user}

            />

            <StatsCard

                stats={stats}

            />

            <AccountCard />

        </div>

    );

}