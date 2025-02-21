import { Router } from "express";
import { register } from "./auth.model.js";
import { resgisterValidator } from "../middlewares/validar-user.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.post("/register", uploadProfilePicture.single("profilePicture"), resgisterValidator, register)

export default router