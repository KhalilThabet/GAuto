const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
const candidats = require("./routes/api/candidats");
const vehicules = require("./routes/api/vehicules");
const employees = require("./routes/api/employees");

const cors = require("cors");
var app = express();
const morgan = require("morgan");
app.use(bodyParser.json());
const db = require("./config/key").mongoURI;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan("tiny"));

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api/employees", employees);
app.use("/api/vehicules", vehicules);
app.use("/api/items", items);
app.use("/api/candidats", candidats);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
