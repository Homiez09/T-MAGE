import toast from "react-hot-toast";

export const isImageType = async (file: Blob) => {
    if (!file.type.includes("image")) {
        toast.error("Invalid file type, try again (image)");
        return false;
    }
    return true;
}