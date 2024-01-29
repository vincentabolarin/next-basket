import type { Metadata } from "next";

import { ReduxProvider } from "./redux/provider";

import { Inter } from "next/font/google";
import "./globals.scss";
import { Toaster } from "react-hot-toast";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ReduxProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={8000}
            pauseOnHover={true}
            draggable={true}
            theme="dark"
          />
          <div className="topbar-navbar">
            <Topbar />
            <Navbar />
          </div>

          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
