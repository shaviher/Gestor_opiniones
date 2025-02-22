import { Router } from "express";
import { updatePassword, updateProfilePicture, updateUser } from "./user.controller.js";
import { updatedUserValidator, updatePasswordValidator, updateProfilePictureValidator } from "../middlewares/validar-user.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.put("/updateUser/:uid", updatedUserValidator, updateUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.patch("/updateProfilePicture/:uid", uploadProfilePicture.single("profilePicture"), updateProfilePictureValidator, updateProfilePicture)

export default router;