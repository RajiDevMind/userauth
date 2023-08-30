const express = require("express");
const router = require("./router/auth");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware to convert
app.use(express.json());

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
