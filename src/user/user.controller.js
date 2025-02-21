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