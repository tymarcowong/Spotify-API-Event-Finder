require("dotenv").config();

const express = require("express");
const routerAPI = require("./routes/api");
const cors = require("cors");

// persistence stuff
//const responseTime = require("response-time");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routerAPI);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
