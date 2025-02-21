import { hash, verify } from "argon2"
import User from "../user/user.model.js"

export const register = async (req, res, nest) => {
    try{
        const data = req.body
        let profilePicture = req.file ? req.file.filename : null
        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword
        data.profilePicture = profilePicture

        const user = await User.create(data)

        return res.status(201).json({
            successe: "User has been created",
            name: user.name,
            email: user.email
        })
    
    }catch(err){
        return res.status(500).json({
            successe: false,
            message: "login failed, server error",
            errror: err.message
            
        })
    }
}