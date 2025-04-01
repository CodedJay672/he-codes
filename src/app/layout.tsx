import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ContextProvider from "@/context/ContextProvider";
import Bottombar from "@/components/Bottombar";
import SidePanel from "@/components/SidePanel";
import SidePanelToggle from "@/components/ui/ToggleSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "He Codes",
  description: "Web developer | Build Platforms That Elevate Your Business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <ContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-50 dark:bg-gradient-to-br from-background-base from-65% to-black w-full max-w-[1440px] flex justify-between`}
        >
          <Sidebar />
          <main className="w-full flex flex-col gap-1">
            <SidePanelToggle />
            <section className="w-full lg:flex justify-between">
              {children}
              <SidePanel />
            </section>
          </main>
          <Bottombar />
        </body>
      </ContextProvider>
    </html>
  );
}
