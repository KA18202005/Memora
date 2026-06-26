"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Upload,
  FileText,
  MessageSquare,
  Network,
  BrainCircuit,
  LogOut
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    name: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Graph",
    href: "/graph",
    icon: Network,
  },
  {
    name: "Revision",
    href: "/revision",
    icon: BrainCircuit,
  },
];

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      <div className="text-3xl font-bold p-6 border-b border-slate-700">
        Memora
      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${
                pathname === item.href
                  ? "bg-blue-600 shadow-lg shadow-blue-500/30"
                  : "hover:bg-slate-800 hover:translate-x-1 transition-all duration-300"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      </nav>

      <button
        className="
          m-4
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          hover:bg-red-600
          transition
        "
      >
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}