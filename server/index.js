const express = require("express");
const routerAPI = require("./routes/api");

const app = express();

app.use("/api", routerAPI);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
