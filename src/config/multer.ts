import { resolve } from "path";
import { diskStorage } from "multer";

export const avatarsPath = resolve(__dirname, "..", "..", "uploads", "avatars");

export const diskAvatars = diskStorage({
  destination: avatarsPath,
  filename(req, file, callback) {
    const name = new Date().getTime() + "-" + file.originalname;
    callback(null, name);
  },
});
