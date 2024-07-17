import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astrack",
  description: "Astrack's homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-gray-950 dark:text-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
