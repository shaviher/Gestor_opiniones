import { Router } from "express";
import { updateUser } from "./user.controller.js";
import { updatedUserValidator } from "../middlewares/validar-user.js";

const router = Router()

router.put("/updateUser/:uid", updatedUserValidator, updateUser)

export default router;