import { Router } from "express";
import { register } from "../controllers/user.controller.js";

const router = Router();    

// router.route("/register").post(register);
router.post("/register",register);



export default router;
