import "./globals.css";

import Navbar from "@/components/Navbar";

import {
  AuthProvider
} from "@/context/AuthContext";

export const metadata = {

  title: "Memora",

  description:
    "Personal Knowledge Memory System",

};

export default function RootLayout({

  children,

}) {

  return (

    <html lang="en">

      <body>

        <AuthProvider>

          <Navbar />

          <main className="p-6">

            {children}

          </main>

        </AuthProvider>

      </body>

    </html>

  );

}