import { HistoryProps } from "@/interfaces/HistoryProps";
import toast from "react-hot-toast";

export const TextHistory = ({ history }: Readonly<{ history: HistoryProps[] }>) => {
    const copyToClipboard = async (item: HistoryProps) => {
        if (item.text === null) return toast.error('No text to copy');
        navigator.clipboard.writeText(item.text);
        toast.success('Text copied to clipboard');
    }
    return (<>
        {history.length > 0 ?
            <div className="flex flex-col items-center justify-center w-full m-5 p-5 gap-5 border-t">
                {history.map((item, index) => (
                    <div key={index} onClick={() => copyToClipboard(item)} className="border p-5 w-full bg-gray-100 rounded-lg cursor-cell shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Click to copy</p>
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        {item.text}
                    </div>
                ))}
            </div> : null}
    </>
    )
}