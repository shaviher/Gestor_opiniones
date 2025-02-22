import Comments from "./comments.model.js"

export const addComments = async (req, res) => {
    try{
        const { user } = req
        const { publication_id } = req.params
        const { text } = req.body

        const newComments = new Comments({
            text,
            user: user._id,
            publication: publication_id
        })

        await newComments.save()

        return res.status(201).json({
            success: true,
            message: "Comment created successfully",
            comment: newComments
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error creating comment",
            error: err.message
        })
    }
}