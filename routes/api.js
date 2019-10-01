"use strict";

const { Router } = require("express");
const router = Router();

const authenticationControllers = require("./../controllers/authentication");

router.post("/auth/signup", authenticationControllers.signUp);
router.post("/auth/signin", authenticationControllers.signIn);
router.get("/auth/loggedin", authenticationControllers.loggedIn);
// router.post("/auth/edit", authenticationControllers.edit);
// router.post("/auth/signout", authenticationControllers.signOut);

module.exports = router;
