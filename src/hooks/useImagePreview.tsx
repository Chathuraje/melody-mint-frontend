import { useState } from "react";
import { useNotification } from "./useNotifications";

export const useImagePreview = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { sendNotification } = useNotification();

  const handleImageOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = e.target.files[0];
      if (files) {
        if (files.size > 1024 * 1024 * 3) {
          sendNotification(
            "error",
            "File size exceeds the maximum allowed size of 3MB."
          );
          return;
        } else if (files.type !== "image/png" && files.type !== "image/jpeg") {
          sendNotification(
            "error",
            "File size exceeds the maximum allowed size of 3MB."
          );
          return;
        } else {
          const fileUrl = URL.createObjectURL(files);

          const fileList = new DataTransfer();
          fileList.items.add(files);
          setPreviewImage(fileUrl);

          return fileList.files;
        }
      }
    }
  };

  return { previewImage, handleImageOnChange, setPreviewImage };
};
