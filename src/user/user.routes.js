import { Router } from "express";
import { updatePassword, updateProfilePicture, updateUser } from "./user.controller.js";
import { updatedUserValidator, updatePasswordValidator, updateProfilePictureValidator } from "../middlewares/validar-user.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

/**
 * @swagger
 * /updateUser/{uid}:
 *   put:
 *     summary: Update user details
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the user
 *               email:
 *                 type: string
 *                 description: The updated email of the user
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/updateUser/:uid", updatedUserValidator, updateUser)

/**
 * @swagger
 * /updatePassword/{uid}:
 *   patch:
 *     summary: Update user password
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: The current password of the user
 *               newPassword:
 *                 type: string
 *                 description: The new password of the user
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

/**
 * @swagger
 * /updateProfilePicture/{uid}:
 *   patch:
 *     summary: Update user profile picture
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: The new profile picture of the user
 *     responses:
 *       200:
 *         description: Profile picture updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.patch("/updateProfilePicture/:uid", uploadProfilePicture.single("profilePicture"), updateProfilePictureValidator, updateProfilePicture)

export default router;