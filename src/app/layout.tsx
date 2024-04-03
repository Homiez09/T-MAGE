import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata= {
  title: 'T-MAGE',
  openGraph: {
    title: 'T-MAGE',
    description: `
    Need to convert an image to text? 
    T-MAGE AI can help! Easy-to-use online tool that supports English and many other languages. 
    Powered by AI, T-MAGE can accurately and quickly convert images to text in multiple formats. 
    Customize the size and style of the text, and easily download the converted text. Free! | 
    ต้องการแปลงรูปภาพเป็นข้อความใช่ไหม! T-MAGE AI ช่วยคุณได้!
    เครื่องมือออนไลน์ที่ใช้งานง่าย รองรับภาษาอังกฤษและอีกหลายภาษา
    T-MAGE ใช้ปัญญาประดิษฐ์ (AI) ช่วยแปลงรูปภาพเป็นข้อความได้อย่างแม่นยำ รวดเร็ว และรองรับหลายรูปแบบ
    คุณสามารถปรับขนาดและรูปแบบของข้อความได้ตามต้องการ และดาวน์โหลดข้อความที่แปลงเสร็จแล้วได้อย่างง่ายดาย ฟรี!`,
    url: 'https://tmage.vercel.app',
    siteName: 'Next.js',
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
    </html>
  );
}
