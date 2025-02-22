import { body } from "express-validator"
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";
import { validarCampos } from "./validar-campos.js";
import { validarCategories } from "./validar-categories.js";


export const addPublicationValidator = [
    validateJWT,
    body("title").notEmpty().withMessage("Title is required"),
    validarCategories,
    body("text").notEmpty().withMessage("Text is required"),
    validarCampos,
    handleErrors
]

export const updatePublicationValidator = [
    validateJWT,
    param("uid").isMongoId().withMessage("Not a valid MongoDB ID"),
    body("title").notEmpty().withMessage("Title is required"),
    validarCategories,
    body("text").notEmpty().withMessage("Text is required"),
    validarCampos,
    handleErrors
]

export const deletePublicationValidator = [
    validateJWT, 
    param("uid").isMongoId().withMessage("Not a valid MongoDB ID"), 
    validarCampos,
    handleErrors 
]
