const express = require("express");
const fileUploadController = require("../controller/fileUploadController");
const router = express.Router();
const path = require("path");

router
  .route("/uploadFile")
  .post(fileUploadController.uploadMiddleware, fileUploadController.uploadFile);

router.route("/").get(fileUploadController.greet);

router.route("/setCookie").get(fileUploadController.setCookie);

module.exports = router;
