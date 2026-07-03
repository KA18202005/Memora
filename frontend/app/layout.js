import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";

import { Toaster } from "sonner";

export const metadata = {
  title: "Memora",
  description: "Personal Knowledge Memory System",
};

import { ThemeProvider } from "@/components/theme";

import {

  SidebarProvider

} from "@/context/SidebarContext";

export default function RootLayout({

  children,

}) {

  return (

    <html lang="en" suppressHydrationWarning>

      <body>

        <AuthProvider>

          <ThemeProvider>

            <SidebarProvider>

              {children}

              <Toaster />

            </SidebarProvider>

          </ThemeProvider>

        </AuthProvider>

      </body>

    </html>

  );

}