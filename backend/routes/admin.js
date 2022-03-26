const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();
// router.get("/adminLogin", authController.getAdminLogin);

router.post("/addWorker", adminController.postAddWorker);
// router.post("/adminLogin", authController.postAdminLogin);

// router.post("/logout", authController.postLogout);

module.exports = router;
