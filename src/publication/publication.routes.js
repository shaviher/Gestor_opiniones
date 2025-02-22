import { Router } from "express";
import { addPublicationValidator, deletePublicationValidator, updatePublicationValidator } from "../middlewares/validar-publication.js";
import { addPublication, deletePublication, updatePublication } from "./publication.controller.js";

const router = Router()

router.post("/addPublication", addPublicationValidator, addPublication)

router.put("/updatePublication/:uid", updatePublicationValidator, updatePublication)

router.delete("/deletePublication/:uid", deletePublicationValidator, deletePublication)

export default router