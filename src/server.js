const app = require("./app");

app.listen(process.env.SERVER, () => {
  console.log("Server running at", process.env.SERVER);
});
