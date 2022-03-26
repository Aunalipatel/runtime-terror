const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

// router.get("/workerLogin", authController.getWorkerLogin);
// router.get("/adminLogin", authController.getAdminLogin);

router.post("/workerLogin", authController.postWorkerLogin);
router.post("/adminLogin", authController.postAdminLogin);

router.post("/logout", authController.postLogout);

module.exports = router;
