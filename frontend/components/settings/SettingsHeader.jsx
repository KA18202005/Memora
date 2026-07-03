"use client";

import { Settings } from "lucide-react";

export default function SettingsHeader() {

    return (

        <div className="space-y-2">

            <div className="flex items-center gap-3">

                <div
                    className="
                        w-12
                        h-12
                        rounded-xl
                        bg-violet-100
                        flex
                        items-center
                        justify-center
                    "
                >

                    <Settings
                        className="text-violet-600"
                        size={24}
                    />

                </div>

                <div>

                    <h1
                        className="
                            text-4xl
                            font-bold
                        "
                    >

                        Account Settings

                    </h1>

                    <p
                        className="
                            text-slate-500
                            mt-1
                        "
                    >

                        Manage your Memora account and learning progress.

                    </p>

                </div>

            </div>

        </div>

    );

}