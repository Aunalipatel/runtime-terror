const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const Worker = require("./models/worker");
const Admin = require("./models/admin");

const MONGODB_URI =
  "mongodb+srv://jay:jay@cluster0.36n65.mongodb.net/site?retryWrites=true&w=majority";
const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Server started</h1>"));

app.use((req, res, next) => {
  if (!req.session.worker) {
    if (!req.session.worker) {
      return next();
    }
    Admin.findById(req.session.admin._id)
      .then((worker) => {
        req.worker = worker;
        next();
      })
      .catch((err) => console.log(err));
  }
  Worker.findById(req.session.worker._id)
    .then((worker) => {
      req.worker = worker;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/auth", authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3001);
  })
  .catch((err) => console.log(err));
