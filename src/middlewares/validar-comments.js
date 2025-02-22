import { body, param } from "express-validator";
import { validateJWT } from "./validate-jwt.js";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";


export const addCommentsValidator = [
    validateJWT,
    body("text").notEmpty().withMessage("Text is required"),
    param("uid").isMongoId().withMessage("This is not a valid MongoDB ID"),
    validarCampos,
    handleErrors
]