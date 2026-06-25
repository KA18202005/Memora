import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Memora
      </h1>

      <div className="flex gap-6">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/upload">
          Upload
        </Link>

        <Link href="/chat">
          Chat
        </Link>

        <Link href="/graph">
          Graph
        </Link>

        <Link href="/revision">
          Revisions
        </Link>
      </div>
    </nav>
  );
}