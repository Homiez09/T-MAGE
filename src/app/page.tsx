'use client';

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { Upload } from "antd";
import { Toaster, toast } from 'react-hot-toast';
import Image from "next/image";
import { isImageType } from "@/libs/CheckType";
import { HistoryProps } from "@/interfaces/HistoryProps";
import { TextHistory } from "@/components/TextHistory";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const [blobURL, setBlobURL] = useState<string>("");
  const [textGen, setTextGen] = useState<any | null>(null);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API || "");
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const pasteImage = async () => {
    if (!(blobURL === "")) return toast.error('Please wait for the current image to finish generating');
    try {
      const clipboardItems = await navigator.clipboard.read();
      const blob = await clipboardItems[0].getType('image/png');
      await goGenerate(blob);
    } catch (e) {
      // console.error(e);
    }
  }

  const saveHistory = async (imageUrl: string, text: string) => {
    const newHistory = [{ imageUrl, text }, ...history];
    setHistory(newHistory);
  }

  const generateText = async (base64: string) => {
    await axios.get(base64, { responseType: 'arraybuffer' }).then(async (res) => {
      const result = await model.generateContent(["Copy Text in Image.", {
        inlineData: {
          data: Buffer.from(res.data, 'binary').toString('base64'),
          mimeType: "image/png"
        }
      }]);
      try {
        await setTextGen(result.response.text());
        await saveHistory(base64, result.response.text());
      } catch (e) {
        // console.error(e);
      }
    });
    setBlobURL("");
  }

  const goGenerate = async (file: Blob) => {
    const blob = await URL.createObjectURL(file);
    if (!(await isImageType(file))) return 0;

    await setBlobURL(blob);

    await toast.promise(generateText(blob), {
      loading: 'Generating text...',
      success: 'Text generated',
      error: 'large file, try again (crop image)'
    });
  }

  return (
    <div onPaste={() => pasteImage()}>
      <Analytics/>
      <Toaster />
      <div className="flex flex-col items-center justify-center p-5 w-full gap-5">
        {blobURL ?
          <>
            <Upload.Dragger
              multiple={false}
              showUploadList={false}
              disabled={true}
              className="flex items-center justify-center w-full h-64 border-gray-300 rounded-lg shadow-md">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Image src={blobURL} fill={true} className="rounded-lg object-cover" alt="TMAGE BY HOMIEZ09" />
              </div>
            </Upload.Dragger>
          </> : <>
            <Upload.Dragger
              multiple={false}
              showUploadList={false}
              beforeUpload={(file: any) => {
                const reader = new FileReader();
                reader.onload = async (e) => {
                  await goGenerate(file);
                };
                reader.readAsDataURL(file);
                return false;
              }}
              className="flex items-center justify-center w-full h-64 border-gray-300 rounded-lg shadow-md">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload </span>
                  or drag and drop or
                  <span className="text-blue-500"> Ctrl+V</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
              </div>
            </Upload.Dragger>
          </>
        }

        <TextHistory history={history}/>
      </div>
    </div>
  );
}
