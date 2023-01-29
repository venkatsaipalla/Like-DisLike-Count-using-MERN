const express = require("express");
const cors= require("cors");
//mongoDB Connection
require("./config/db");
//Importing Routes
const count = require("./routes/api/countDetails");

const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
  }))
app.get("/", (req, res) => res.send("hello"));

// Use Routes
app.use("/api/countDetails", count);

const port = process.env.PORT || 3008;

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
