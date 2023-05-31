const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalErrHandler = require("./globalErrHandler");
const fileUploadRouter = require("./routes/fileUploadRoute");
dotenv.config({ path: "./.env" });
const app = express();
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://file-uploader-client.vercel.app",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
const port = process.env.PORT || 8000;

app.use("/api", fileUploadRouter);

app.use(globalErrHandler);

app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port ${port}`);
});
