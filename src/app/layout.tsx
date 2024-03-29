import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TMAGE - Text from Image",
  description: "Create text from images with ease.",
  authors: [{name:"Phumrapee Soenvanichakul (HomieZ09)", url:"https://github.com/Homiez09"}],
};

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col items-center justify-between"}>
        <div className="flex flex-col container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
