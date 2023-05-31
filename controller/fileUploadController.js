const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    console.log(uniqueName);
    cb(null, uniqueName);
  },
});

const upload = multer({
  dest: `${__dirname}/../uploads`,
  storage,
  limits: { fileSize: 1000000 * 100 },
});

exports.uploadMiddleware = upload.single("file");

exports.uploadFile = async (req, res, next) => {
  console.log(req.file);
  res.status(200).json({
    status: "success",
    message: "file received",
  });
};
