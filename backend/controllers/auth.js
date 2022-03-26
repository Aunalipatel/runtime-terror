const Worker = require("../models/worker");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");

exports.getWorkerLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
  });
};

exports.getAdminLogin = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
  });
};

exports.postWorkerLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  Worker.findOne({ email: email })
    .then((worker) => {
      if (!worker) {
        return res.redirect("/login");
      }
      bcrypt
        .compare(password, worker.password)
        .then((doMatch) => {
          if (doMatch) {
            // req.session.isLoggedIn = true;
            req.session.worker = worker;
            return req.session.save((err) => {
              console.log(err);
              return res.redirect("/");
            });
          }
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/login");
        });
    })
    .catch((err) => console.log(err));
};

exports.postAdminLogin = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email);
  Admin.findOne({ email })
    .then((admin) => {
      //   if (!admin) {
      //     return res.redirect("/login");
      //   }
      console.log(admin);
      if (password === admin.password) {
        req.session.isLoggedIn = true;
        req.session.admin = admin;
        return req.session.save((err) => {
          console.log(err);
          return res.redirect("/");
        });
      }
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
