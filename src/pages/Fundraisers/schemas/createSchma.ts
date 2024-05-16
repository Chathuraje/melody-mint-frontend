import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];

export const campaignCreateSchema = z.object({
  fundraiser_name: z.string().min(3).max(50),
  short_description: z.string().min(3).max(100),
  goal: z.string().min(1),
  distribution_percentage: z.string().min(1).max(100),
  start_date: z.string().min(3).max(50),
  end_date: z.string().min(3).max(50),
  description: z.string().min(3).max(500),
  image: z
    .instanceof(FileList)
    .optional()
    .refine((fileList) => {
      if (!fileList || fileList.length === 0) return true;
      const firstFile = fileList[0];
      if (!ACCEPTED_FILE_TYPES.includes(firstFile.type)) {
        throw new Error(
          "Invalid file type. Only PNG and JPEG files are accepted."
        );
      }
      if (firstFile.size > MAX_UPLOAD_SIZE) {
        throw new Error("File size exceeds the maximum allowed size of 3MB.");
      }
      return true; // First file is valid
    }),
  collection_name: z.string().min(3).max(50),
  collection_description: z.string().min(3).max(100),
  collection_image: z
    .instanceof(FileList)
    .optional()
    .refine((fileList) => {
      if (!fileList || fileList.length === 0) return true;
      const firstFile = fileList[0];
      if (!ACCEPTED_FILE_TYPES.includes(firstFile.type)) {
        throw new Error(
          "Invalid file type. Only PNG and JPEG files are accepted."
        );
      }
      if (firstFile.size > MAX_UPLOAD_SIZE) {
        throw new Error("File size exceeds the maximum allowed size of 3MB.");
      }
      return true; // First file is valid
    }),
  collection_hero: z
    .instanceof(FileList)
    .optional()
    .refine((fileList) => {
      if (!fileList || fileList.length === 0) return true;
      const firstFile = fileList[0];
      if (!ACCEPTED_FILE_TYPES.includes(firstFile.type)) {
        throw new Error(
          "Invalid file type. Only PNG and JPEG files are accepted."
        );
      }
      if (firstFile.size > MAX_UPLOAD_SIZE) {
        throw new Error("File size exceeds the maximum allowed size of 3MB.");
      }
      return true; // First file is valid
    }),
  collection_symbol: z.string().min(3).max(7),
});
