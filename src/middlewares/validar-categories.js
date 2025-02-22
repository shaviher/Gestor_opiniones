import { categories_allow } from "../../configs/categories.js";

export const validarCategories = (req, res, next) => {
    const { category } = req.body

    if(!categories_allow.includes(category)) {
        return res.status(400).json({
            success: false,
            message: `Category must be one of: ${categories_allow.join(", ")}`
        })
    }
    next()
}