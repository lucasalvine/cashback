require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const app = require("./app");

app.listen(process.env.SERVER, () => {
  console.log("Server running at", process.env.SERVER);
});
