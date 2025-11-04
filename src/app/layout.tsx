import "@/css/satoshi.css";
import "@/css/style.css";
import "@/css/neumorphism.css";
import "@/css/neobrutalism.css";
import "@/css/glassmorphism.css";

import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import { StyleApplier } from "@/components/style-applier";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard - Next.js Dashboard Kit",
    default: "Dashboard - Next.js Dashboard Kit",
  },
  description:
    "Fully customizable Next.js dashboard featuring 4 distinct visual styles that users can switch between instantly.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <StyleApplier />
          <NextTopLoader color="#5750F1" showSpinner={false} />

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="w-full bg-gray-2 dark:bg-dark">
              <Header />

              <main className="isolate mx-auto w-full max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
