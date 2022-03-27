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

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
app.use("/admin", adminRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(8080, () => {
      console.log("Database connected");
    });
  })
  .catch((err) => console.log(err));
