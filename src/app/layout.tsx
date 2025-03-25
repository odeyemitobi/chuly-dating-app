import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jaini_Purva } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const jainiPurva = Jaini_Purva({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jaini-purva",
});

export const metadata: Metadata = {
  title: "Chuly Dating Web-app",
  description: "Chuly Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jainiPurva.variable} antialiased bg-[#F6F6F6] text-black pt-16`} // Add top padding to account for fixed navbar
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="h-[calc(100vh-4rem)] overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
