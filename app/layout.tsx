import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clime",
  description: "Generated Aplication Clime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" >
      <body className={`${inter.className}   bg-light text-black dark:bg-dark dark:text-white transition-all`}>{children}</body>
    </html>
  );
}
