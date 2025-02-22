import { Router } from "express";
import { addCommentsValidator } from "../middlewares/validatos-comments,js";
import { addComments } from "./comments.controller.js";

const router = Router()

router.post("/addComments/:uid", addCommentsValidator, addComments)

export default router