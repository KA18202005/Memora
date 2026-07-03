import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";

import { Toaster } from "sonner";

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

        <AuthProvider>

          {children}

          <Toaster
            richColors
            position="top-right"
            expand
            duration={3000}
          />

        </AuthProvider>

      </body>

    </html>

  );

}