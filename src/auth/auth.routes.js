import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { loginValidator, resgisterValidator } from "../middlewares/validar-user.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.post("/register", uploadProfilePicture.single("profilePicture"), resgisterValidator, register)

router.post("/login", loginValidator, login)

export default router