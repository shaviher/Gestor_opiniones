import { Router } from "express";
import { addCommentsValidator, updateCommentsValidator, deleteCommentsValidator } from "../middlewares/validatos-comments,js";
import { addComments, deletComments, updateComments } from "./comments.controller.js";

const router = Router()

router.post("/addComments/:pid", addCommentsValidator, addComments)

router.patch("/updateComments/:cid", updateCommentsValidator, updateComments)

router.delete("/deleteComments/:cid", deleteCommentsValidator, deletComments)

export default router