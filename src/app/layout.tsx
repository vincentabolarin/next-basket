import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Basket App",
  description: "An app for Next Basket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
