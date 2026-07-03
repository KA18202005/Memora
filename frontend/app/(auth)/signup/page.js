"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import { toast } from "sonner";

import { signup } from "@/services/authService";

import {

    AuthLayout,

    AuthCard,

    AuthHeader,

    AuthInput,

    AuthFooter

} from "@/components/auth";

export default function SignupPage() {

    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const [showPassword, setShowPassword] =
        useState(false);

    const [error, setError] =
        useState("");

    const [form, setForm] =
        useState({

            name: "",

            email: "",

            password: ""

        });

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            setLoading(true);

            await signup(form);

            toast.success("Account created successfully!");

            router.push("/login");

        }

        catch (err) {

            console.error(err);

            setError(

                "Unable to create account."

            );

            toast.error("Unable to create account.");
        }

        finally {

            setLoading(false);

        }

    };

    return (

        <AuthLayout>

            <AuthCard>

                <AuthHeader

                    title="Create Account"

                    subtitle="Start building your AI-powered second brain."

                />

                <form

                    onSubmit={handleSubmit}

                    className="space-y-5"

                >

                    <AuthInput

                        type="text"

                        placeholder="Full Name"

                        value={form.name}

                        onChange={(e)=>

                            setForm({

                                ...form,

                                name:e.target.value

                            })

                        }

                    />

                    <AuthInput

                        type="email"

                        placeholder="Email"

                        value={form.email}

                        onChange={(e)=>

                            setForm({

                                ...form,

                                email:e.target.value

                            })

                        }

                    />

                    <div className="relative">

                        <AuthInput

                            type={

                                showPassword

                                    ?

                                    "text"

                                    :

                                    "password"

                            }

                            placeholder="Password"

                            value={form.password}

                            onChange={(e)=>

                                setForm({

                                    ...form,

                                    password:e.target.value

                                })

                            }

                        />

                        <button

                            type="button"

                            onClick={()=>

                                setShowPassword(

                                    !showPassword

                                )

                            }

                            className="

                                absolute

                                right-4

                                top-4

                                text-slate-400

                            "

                        >

                            {

                                showPassword

                                ?

                                <EyeOff size={18}/>

                                :

                                <Eye size={18}/>

                            }

                        </button>

                    </div>

                    {

                        error &&

                        <p

                            className="

                                text-red-500

                                text-sm

                            "

                        >

                            {error}

                        </p>

                    }

                    <button

                        disabled={loading}

                        className="

                            w-full

                            bg-violet-600

                            hover:bg-violet-700

                            text-white

                            rounded-xl

                            py-3

                            transition

                            disabled:opacity-50

                            flex

                            items-center

                            justify-center

                            gap-2

                        "

                    >

                        {

                            loading

                            ?

                            <>

                                <Loader2

                                    size={18}

                                    className="animate-spin"

                                />

                                Creating...

                            </>

                            :

                            "Create Account"

                        }

                    </button>

                </form>

                <AuthFooter

                    text="Already have an account?"

                    link="/login"

                    linkText="Login"

                />

            </AuthCard>

        </AuthLayout>

    );

}