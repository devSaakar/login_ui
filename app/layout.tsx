"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/customHooks/useUser";
import AppWrapper from "@/components/AppWrapper";
import { ToastProvider } from "@/customHooks/useToast";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>{"Sakar - Atlys App"}</title>
      <meta
        name="description"
        content="This is the home page of our awesome Next.js application."
      />
      <body className={inter.className}>
        <Suspense fallback={<Loader />}>
          <UserProvider>
            <ToastProvider>
              <AppWrapper>{children}</AppWrapper>
            </ToastProvider>
          </UserProvider>
        </Suspense>
      </body>
    </html>
  );
}
