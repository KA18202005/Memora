"use client";

import { useState } from "react";
import { signup } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: ""
    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await signup(form);

        alert(
          "Signup Successful"
        );

        router.push(
          "/login"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Signup Failed"
        );
      }
    };

  return (
    <div className="max-w-md mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-6">
        Signup
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

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
            bg-blue-600
            text-white
            px-5
            py-2
            rounded
          "
        >
          Signup
        </button>

      </form>

    </div>
  );
}