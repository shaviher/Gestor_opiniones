import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { loginValidator, resgisterValidator } from "../middlewares/validar-user.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: The user's profile picture
 *     responses:
 *       201:
 *         description: User has been created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 successe:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/register", uploadProfilePicture.single("profilePicture"), resgisterValidator, register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *               username:
 *                 type: string
 *                 description: The user's username
 *               password:
 *                 type: string
 *                 description: The user's password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 userDetails:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     profilePicture:
 *                       type: string
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post("/login", loginValidator, login);

export default router