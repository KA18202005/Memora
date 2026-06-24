"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const router = useRouter();

    const [form, setForm] =
        useState({
            email: "",
            password: ""
        });

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                const data =
                    await login(form);

                console.log(data);

                localStorage.setItem(
                    "token",
                    data.access_token
                );

                router.push(
                    "/dashboard"
                );

            } catch (error) {

                console.error(
                    error
                );

                alert(
                    "Login Failed"
                );
            }
        };

    return (
        <div className="max-w-md mx-auto mt-10">

            <h1 className="text-3xl font-bold mb-6">
                Login
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded"
                    value={form.password}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }
                />

                <button
                    className="
            bg-green-600
            text-white
            px-5
            py-2
            rounded
          "
                >
                    Login
                </button>

            </form>

        </div>
    );
}