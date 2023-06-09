const express = require("express");
const fileUploadController = require("../controller/fileUploadController");
const router = express.Router();
const path = require("path");

router
  .route("/uploadFile")
  .post(fileUploadController.uploadMiddleware, fileUploadController.uploadFile);

router.route("/").get(fileUploadController.greet);

router.route("/setCookie").post(fileUploadController.setCookie);

router.route("/getCookie").get(fileUploadController.getCookie);
module.exports = router;
