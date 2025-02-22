import { validationResult } from "express-validator"

export const validarCampos = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(errors)
    }
}