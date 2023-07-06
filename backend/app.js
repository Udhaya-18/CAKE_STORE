const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/cake-routes");
const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/cakes", router);

// app.use("/", (req, res, next) => {
//   res.send("Hello . Shall we start");
// });

mongoose.connect("mongodb://127.0.0.1:27017/cakestore", {
  useNewUrlParser: true,
});

app.listen(2000, () => {
  console.log("Server started on port 2000");
});
