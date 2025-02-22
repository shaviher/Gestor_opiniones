import { body, param } from "express-validator"
import { userExists, usernameExists } from "../helpers/validar-db.js"
import { validarCampos } from "./validar-fields.js"
import { deleteFileOnError } from "./delete-file-on-error.js"
import { handleErrors } from "./handleErrors.js"
import { validateJWT } from "./validate-jwt.js"
import { hasRoles } from "./validar-roles.js"


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

export const updatePasswordValidator = [
    param("uid").isMongoId().withMessage("Not a valid MongoDB ID"),
    param("uid").custom(userExists),
    body("newPassword").isLength({ min:8 }).withMessage("The password must contain at least 8 characters"),
    validarCampos,
    handleErrors
]

export const updateProfilePictureValidator = [
    param("uid").isMongoId().withMessage("Not a valid MongoDB ID"),
    param("uid").custom(userExists),
    validarCampos,
    deleteFileOnError,
    handleErrors
]