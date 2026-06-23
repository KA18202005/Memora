import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Memora",
  description: "Personal Knowledge Memory System",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}