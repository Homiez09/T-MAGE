export const metadata = {
    title: 'T-MAGE/About',
    openGraph: {
        title: 'T-MAGE',
        description: 'Easily convert images to text with T-MAGE, an online tool that helps you create text from images quickly and accurately. Just upload your image, select the text resolution, and T-MAGE will do the rest! Perfect for converting handwritten images, newspaper articles, posters, documents, and much more. | แปลงรูปภาพเป็นข้อความได้ง่ายๆ กับ T-MAGE เครื่องมือออนไลน์ที่ช่วยให้คุณสร้างข้อความจากรูปภาพได้อย่างรวดเร็วและแม่นยำ เพียงอัปโหลดรูปภาพของคุณ เลือกระดับความละเอียดของข้อความ และ T-MAGE จะจัดการที่เหลือ!  เหมาะสำหรับการแปลงรูปภาพลายมือ บทความในหนังสือพิมพ์ โปสเตอร์ เอกสาร และอื่นๆ อีกมากมาย',
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

export default () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 w-full gap-5">
            hello world
        </div>
    )
}