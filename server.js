const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./controllers/homeRoutes.js"));
app.use(require("./controllers/apiRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
