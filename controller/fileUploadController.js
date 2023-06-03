const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./public/uploads"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    console.log(uniqueName);
    cb(null, uniqueName);
  },
});

const upload = multer({
  dest: `${__dirname}/../public/uploads`, // file upload using multer to the project directory on vercel is not supported
  storage,
  limits: { fileSize: 1000000 * 100 },
});

exports.greet = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to my file uploader web app",
  });
};

exports.setCookie = async (req, res, next) => {
  res
    .cookie("jwt", "this is my jwt cookie", {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      path: "/",
      domain: "file-uploader-server-production.up.railway.app", // there is difference between url and domain url: https://file-uploader-client.vercel.app, domain: file-uploader-client.vercel.app
      // domain: "localhost",
      sameSite: "none",
    })
    .json({
      status: "success",
      message: "Cookie is set",
    });
};

exports.getCookie = async (req, res, next) => {
  res.json({
    status: "success",
    cookie: req.cookies,
  });
};

exports.uploadMiddleware = upload.single("file");

exports.uploadFile = async (req, res, next) => {
  try {
    console.log(req.file);
    res.status(200).json({
      status: "success",
      message: "file received",
      file: req.file,
    });
  } catch (error) {
    next(error);
  }
};
