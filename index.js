const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const globalErrHandler = require("./globalErrHandler");
const fileUploadRouter = require("./routes/fileUploadRoute");
dotenv.config({ path: "./.env" });
const app = express();
app.use(
  cors({
    origin: "https://file-uploader-client.vercel.app",
  })
);
app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/api", fileUploadRouter);

app.use(globalErrHandler);

app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port ${port}`);
});
