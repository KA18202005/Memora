import "./globals.css";

import {
  AuthProvider
} from "@/context/AuthContext";

export const metadata = {
  title: "Memora",
  description: "Personal Knowledge Memory System",
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}