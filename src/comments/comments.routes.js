import { Router } from "express";
import { addCommentsValidator, updateCommentsValidator, deleteCommentsValidator } from "../middlewares/validar-comments.js";
import { addComments, deletComments, updateComments } from "./comments.controller.js";

const router = Router()

/**
 * @swagger
 * /addComments/{pid}:
 *   post:
 *     summary: Add a comment to a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: pid
 *         schema:
 *           type: string
 *         required: true
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The comment text
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/addComments/:pid", addCommentsValidator, addComments)

/**
 * @swagger
 * /updateComments/{cid}:
 *   patch:
 *     summary: Update a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: The comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: The updated comment text
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.patch("/updateComments/:cid", updateCommentsValidator, updateComments)

/**
 * @swagger
 * /deleteComments/{cid}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: The comment ID
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.delete("/deleteComments/:cid", deleteCommentsValidator, deletComments)

export default router