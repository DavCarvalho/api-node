import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";


const tmpFolder = resolve(__dirname, "..", "..", "tmp")

export default {
  tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString("hex"); //não ter arquivos co mnomes complicados
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName)
    },
  }),
}