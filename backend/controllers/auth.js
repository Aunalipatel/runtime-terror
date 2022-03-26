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

exports.postAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    console.log(email);
    console.log(password);
    const admin = await Admin.find({ email, password });
    console.log(admin);
    console.log("test");
    // try {
    //   const admin = await Admin.find({ email, password });

    //   console.log(admin);
    //   console.log("x");
    // } catch (error) {
    //   console.log("ljklk");
    // }
    if (admin.length === 0) {
      return res.status(200).json({
        success: false,
      });
    } else if (password === admin[0].password) {
      // console.log("IFFFFFFFFFFFf");
      // return (res.data.success = true);
      return res.status(200).json({
        success: true,
        info: admin,
      });
    } else {
      return res.status(200).json({
        success: false,
      });
    }
    res.redirect("/");
    // })
    // .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
