import { Router } from "express";
import { addCommentsValidator, updateCommentsValidator } from "../middlewares/validatos-comments,js";
import { addComments, updateComments } from "./comments.controller.js";

const router = Router()

router.post("/addComments/:pid", addCommentsValidator, addComments)

router.patch("/updateComments/:cid", updateCommentsValidator, updateComments)



export default router