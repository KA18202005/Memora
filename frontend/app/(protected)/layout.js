"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function ProtectedLayout({
  children,
}) {
  return (
    <ProtectedRoute>

      <div className="flex h-screen bg-slate-100">

        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">

          <Navbar />

          <main
            className="
              flex-1
              overflow-y-auto
              p-8
            "
          >
            {children}
          </main>

        </div>

      </div>

    </ProtectedRoute>
  );
}