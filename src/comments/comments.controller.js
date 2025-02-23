import { populate } from "dotenv"
import Comments from "./comments.model.js"
import Publications from "./publications.model.js";


export const addComments = async (req, res) => {
    try{
        const { user } = req
        const { pid } = req.params;
        const { text } = req.body

        const publication = await Publications.findById(pid)
        if(!publication) {
            return res.status(404).json({
                success: false,
                message: "The publication is not exist"
            })
        }

        const newComments = new Comments({
            text,
            user: user._id,
            publication: pid
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

export const updateComments = async (req, res) => {
    try{
        const { user } = req
        const { cid } = req.params
        const { text } = req.body

        const commentUpdate = await Comments.findOneAndUpdate(
            {_id: cid, user: user._id},
            { text },
            { new: true }
        )

        if(!commentUpdate) {
            return res.status(404).json({
                success: false,
                message: "the comment does not exist"
            })
        }

        const commentPopulated = await Comments.findById(commentUpdate._id).populate({
            path: "user",
            select: "name -_id"
        })

        const updatedComment  = {
            text: true,
            user: commentPopulated.user.name
        }
       
        return res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            updatedComment 
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error updating comment",
            error: err.message
        })
    }
}