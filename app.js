const UserController = require("./controllers/userController.ts");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  
app.post("/post", UserController.createUser);
