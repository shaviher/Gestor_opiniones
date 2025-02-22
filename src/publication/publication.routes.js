import { Router } from "express";
import { addPublicationValidator, updatePublicationValidator } from "../middlewares/validator-publication.js";
import { addPublication, updatePublication } from "./publication.controller.js";

const router = Router()

router.post("/addPublication", addPublicationValidator, addPublication)

router.put("/updatePublication/:uid", updatePublicationValidator, updatePublication)

export default router