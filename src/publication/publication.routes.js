import { Router } from "express";
import { addPublicationValidator, deletePublicationValidator, updatePublicationValidator } from "../middlewares/validar-publication.js";
import { addPublication, deletePublication, updatePublication } from "./publication.controller.js";

const router = Router()

/**
 * @swagger
 * /addPublication:
 *   post:
 *     summary: Add a new publication
 *     tags: [Publication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the publication
 *               content:
 *                 type: string
 *                 description: The content of the publication
 *     responses:
 *       201:
 *         description: Publication added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/addPublication", addPublicationValidator, addPublication)

/**
 * @swagger
 * /updatePublication/{pid}:
 *   put:
 *     summary: Update a publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: pid
 *         schema:
 *           type: string
 *         required: true
 *         description: The publication ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the publication
 *               content:
 *                 type: string
 *                 description: The updated content of the publication
 *     responses:
 *       200:
 *         description: Publication updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updatePublication/:pid", updatePublicationValidator, updatePublication)

/**
 * @swagger
 * /deletePublication/{pid}:
 *   delete:
 *     summary: Delete a publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: pid
 *         schema:
 *           type: string
 *         required: true
 *         description: The publication ID
 *     responses:
 *       200:
 *         description: Publication deleted successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.delete("/deletePublication/:pid", deletePublicationValidator, deletePublication)

export default router