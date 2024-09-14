import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/Codes/WEB_DEV/Project/E-commerce-2/backend/public/temp/upload/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer(
    { storage: storage } 
);


