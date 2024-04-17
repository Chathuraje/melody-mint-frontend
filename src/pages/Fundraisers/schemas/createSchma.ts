import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];

export const campaignCreateSchema = z.object({
  username: z.string(),
  artist_description: z.string(),
  profile_image: z
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
  profile_hero: z
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
});
