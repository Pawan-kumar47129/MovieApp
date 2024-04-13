import express from "express";
import {Registor,Login,Logout} from "../controllers/user.controller.js"
const router=express.Router();
router.route("/registor").post(Registor);
router.route("/login").post(Login);// go controller login function

router.route("/logout").get(Logout);

export default router;