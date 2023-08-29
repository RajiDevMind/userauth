const express = require("express");
const router = require("./router/auth");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world by raji o.i");
});

// user middleware
app.use("/auth", router);

const port = 3032;
app.listen(port, console.log(`Server is listening on port ${port}...`));
