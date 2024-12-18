import { FaGamepad } from "react-icons/fa";;
import { NavMenu } from "@/app/NavMenu";
import Login from "@/app/Login";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.otf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Game Hive",
  description: "The place where gamers come to talk about games and recieve AI-generated game recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <nav className=" w-full flex justify-between align-middle mt-5 px-5">
          <FaGamepad className=" w-10 h-10" />
          <NavMenu />
          <Login />
        </nav>
        {children}
      </body>
    </html>
  );
}
