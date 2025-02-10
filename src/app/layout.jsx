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
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={`flex w-full h-screen lg:px-24 lg:pt-8 p-2 bg-[url(/arena.png)] bg-cover backdrop-brightness-50 bg-center touch-manipulation ${inter.className}`}>
        <HeroProvider >
          {children}
        </HeroProvider>
      </body>   
    </html>
  );
}
