import { hash, verify } from "argon2"
import User from "./user.model.js"

export const updateUser = async (req, res) => {
    try{
        const { user } = req
        const data = req.body
        
        const userUpdate = await User.findOneAndUpdate(user, { $set: data }, { new: true })

        if(!userUpdate){
            return res.status(403).json({
                success: false,
                message: "Can't edit administrators"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Successfully updated user"
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error updating user",
            error: err.message
        })
    }
}

export const updatePassword = async (req, res) => {
    try{
        const { uid } = req.params
        const { newPassword } = req.body

        const user = await User.findById(uid)

        const match = await verify(user.password, newPassword)
        
        if(!match) {
            return res.status(400).json({
                success: false,
                message: "The new password cannot be the same as the previous one"
            })
        }

        const encryptedPassword = await hash(newPassword)

        await User.findByIdAndUpdate(uid, {password: encryptedPassword}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Password update"
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error updating password",
            error: err.message
        })
    }
}