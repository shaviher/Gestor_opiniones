import { populate } from "dotenv"
import Comments from "./comments.model.js"

export const addComments = async (req, res) => {
    try{
        const { user } = req
        const { publication_id } = req.params
        const { text } = req.body

        const publication = await Publications.findById(publication_id)
        if(!publication) {
            return res.status(404).json({
                success: false,
                message: "The publication is not exist"
            })
        }

        const newComments = new Comments({
            text,
            user: user._id,
            publication: publication_id
        })

        const saveComments = await newComments.save()

        publication.comments.push(saveComments._id)

        await publication.save()

        const publicationWithComments = await Publications.findById(publication_id).populate({
            path: "comments",
            select: "text -_id",
            populate: {
                path: "user",
                select: "username -_id"
            }
        })

        return res.status(201).json({
            success: true,
            message: "Comment created successfully",
            publication: {
                title: publicationWithComments.title,
                text: publicationWithComments.text,
                comments: publicationWithComments.comments
            }
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error creating comment",
            error: err.message
        })
    }
}