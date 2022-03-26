const Worker = require("../models/worker");
const Admin = require("../models/admin");
const worker = require("../models/worker");

exports.getAdminLogin = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
  });
};

exports.postAddWorker = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email;
    const number = req.body.number
    const age = req.body.age
    const aadhar=req.body.aadhar
    const worker = new Worker({
        name: name,
        email: email,
        number: number,
        age: age,
        aadhar:aadhar,
        adminId:req.session.admin._id,
    })
    return worker.save()
//   const password = req.body.password;
//   Worker.findOne({ email: email })
//     .then((worker) => {
//       if (!worker) {
//         return res.redirect("/login");
//       }
//       bcrypt
//         .compare(password, worker.password)
//         .then((doMatch) => {
//           if (doMatch) {
//             // req.session.isLoggedIn = true;
//             req.session.worker = worker;
//             return req.session.save((err) => {
//               console.log(err);
//               return res.redirect("/");
//             });
//           }
//           res.redirect("/");
//         })
//         .catch((err) => {
//           console.log(err);
//           res.redirect("/login");
//         });
//     })
//     .catch((err) => console.log(err));
};
