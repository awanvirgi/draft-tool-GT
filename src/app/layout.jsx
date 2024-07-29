import { Inter } from "next/font/google";
import "./globals.css";
import HeroProvider from "@/context/hero-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guardian Tales Arena Draft Tool",
  description: "Guardian Tales Arena Draft Tool Like Tournament",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen px-24 pt-8 bg-gray-900 ${inter.className}`}>
        <HeroProvider >
          {children}
        </HeroProvider>
      </body>
    </html>
  );
}
