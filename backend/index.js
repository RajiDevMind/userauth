const express = require("express");
const router = require("./router/auth");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// middleware to convert
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello, world by raji o.i");
});

// user middleware
app.use("/auth", router);

const port = 3032;

const startServer = () => {
  app.listen(port, async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      console.log(`Server is listening on port ${port}...`);
    } catch (error) {
      console.log(error);
    }
  });
};
startServer();
