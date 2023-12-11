const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routers/url");

const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Monalisamishra:MDYlL3MKtGxQa59a@cluster0.7zrfpkj.mongodb.net/shortenerUrl",
    
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

route.post("/xyz", (req, res) => {
  res.send(req.body);
});
app.use("/", route);



app.listen(process.env.PORT || 3004, function () {
  console.log("Express app running on port " + (process.env.PORT || 3004));
});