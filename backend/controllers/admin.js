const Worker = require("../models/worker");
const Admin = require("../models/admin");

exports.getWorkers = (req, res, next) => {
  Worker.find().then(workers=>{
    console.log(workers)
    res.send(workers)
  })
  // res.render("auth/signup", {
  //   path: "/signup",
  //   pageTitle: "Signup",
  // });
};

exports.postAddWorker = (req, res, next) => {
    const name = req.body.Emp_name
    const title=req.body.Title
    const email = req.body.email;
    const number = req.body.number
    const age = req.body.age
    const aadhar=req.body.aadhar
    const text=req.body.Text_block
    const hours=req.body.Hours_W
    const rating=req.body.Rating
    const loc=req.body.Project_Loc
    const worker = new Worker({
        Emp_name: name,
        Title:title,
        email: email,
        number: number,
        age: age,
        aadhar:aadhar,
        Text_block:text,
        Hours_W:hours,
        Rating:rating,
        Project_Loc:loc,
        // adminId:req.session.admin._id,
    })
    worker.save()
    return res.status(200).send({message: "Worker saved"})
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
