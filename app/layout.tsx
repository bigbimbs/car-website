import React from "react";
import { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "../assets/styles/global.css";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
