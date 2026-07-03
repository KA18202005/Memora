"use client";

import Link from "next/link";
import {
  usePathname,
  useRouter
} from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  FileText,
  MessageSquare,
  Network,
  BrainCircuit,
  LogOut,
  BookOpen,
  Settings
} from "lucide-react";

import { toast } from "sonner";

import { useSidebar } from "@/context/SidebarContext";

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
  {
    name: "Topics",
    href: "/topics",
    icon: BookOpen,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  }
];

export default function Sidebar() {

  const pathname = usePathname();
  const router = useRouter();
  const { open, setOpen } = useSidebar();

  const handleLogout = () => {

    setOpen(false);

    LogOut();

    toast.success("Logged out successfully.");

    router.replace("/login");

  };

  return (
    <>
      {open && (

        <div
          onClick={() => setOpen(false)}
          className="
                    fixed
                    inset-0
                    bg-black/50
                    z-40
                    lg:hidden
                "
        />

      )}
      <aside

        className={`
        fixed
        lg:static
        top-0
        left-0
        z-50
        h-screen
        w-64
        bg-card
        border-r
        border-border
        transition-transform
        duration-300
        ${open

            ?

            "translate-x-0"

            :

            "-translate-x-full lg:translate-x-0"

          }

    `}

      >

        <div className="text-3xl font-bold p-6 border-b border-border">
          Memora
        </div>

        <nav className="flex-1 p-4 space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}

                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "hover:bg-accent hover:text-accent-foreground hover:translate-x-1 transition-all duration-300"
                  }`}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}

        </nav>

        <button

          onClick={handleLogout}

          className="
m-4
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-red-500
hover:bg-red-500/10
transition
"

        >
          <LogOut size={20} />
          Logout
        </button>

      </aside>

    </>
  );
}