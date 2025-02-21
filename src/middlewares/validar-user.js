import { body } from "express-validator"
import { usernameExists } from "../helpers/validar-db"
import { validarCampos } from "./validar-fields"
import { deleteFileOnError } from "./delete-file-on-error"
import { handleErrors } from "./handleErrors"
import { validateJWT } from "./validate-jwt"


export const resgisterValidator = [
    body("name").notEmpty().withMessage("The name is requered"),
    body("username").notEmpty().withMessage("The username is requered"),
    body("email").notEmpty().withMessage("The email is requered"),
    body("email").isEmail().withMessage("Invalid email"),
    body("username").custom(usernameExists),
    validarCampos,
    deleteFileOnError,
    handleErrors
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Invalid email"),
    validarCampos
]

export const updatedUserValidator = [
    hasRoles("CLIENT", "ADMIN"),
    body("username").custom(usernameExists),
    validarCampos,
    handleErrors,
    validateJWT
]