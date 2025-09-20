import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { Toaster } from "sonner";

import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import SidePanel from "@/components/SidePanel";
import SidePanelToggle from "@/components/ui/ToggleSwitch";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const exo_2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuuel Joel",
  description: "Web developer | Build Platforms That Elevate Your Business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo_2.variable} antialiased`}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <SidePanelToggle>
            <SidePanel />
          </SidePanelToggle>

          <main className="w-full flex gap-1">
            <Sidebar />
            {children}
            <div className="hidden lg:block w-72 h-[calc(100vh-50px)] sticky top-13 right-0 bg-white dark:bg-white/10">
              <SidePanel />
            </div>
          </main>

          <Bottombar />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
