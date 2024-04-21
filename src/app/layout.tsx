import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'T-MAGE',
  description: 'T-MAGE: Easily convert images to text with T-MAGE, an online tool that helps you create text from images quickly and accurately. Just upload your image, select the text resolution, and T-MAGE will do the rest! Perfect for converting handwritten images, newspaper articles, posters, documents, and much more.',
  openGraph: {
    title: 'T-MAGE',
    description: 'Easily convert images to text with T-MAGE, an online tool that helps you create text from images quickly and accurately. Just upload your image, select the text resolution, and T-MAGE will do the rest! Perfect for converting handwritten images, newspaper articles, posters, documents, and much more.',
    url: 'https://tmage.phumrapee.me',
    images: [
      {
        url: 'https://drive.google.com/uc?export=view&id=1LWni2W7QnSY_Nqt5O3Qjz-R18Oq8t6xf',
        width: 800,
        height: 600,
      },
      {
        url: 'https://drive.google.com/uc?export=view&id=1LWni2W7QnSY_Nqt5O3Qjz-R18Oq8t6xf',
        width: 1800,
        height: 1600,
        alt: 'T-MAGE PAGE by Phumrapee Soenvanichakul (HomieZ09)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col items-center bg-[#f6f8fc]"}>
        <Navbar />
        <div className="flex flex-col container">
          {children}
        </div>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2260579611756913" crossOrigin="anonymous"></script>

    </html>
  );
}
