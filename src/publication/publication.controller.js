import publication from "./publication.model.js"

export const addPublication = async (req, res) => {
    try{
        const { user } = req
        const { title, category,text } = req.body

        const newPublication = new publication({
            title,
            category,
            text,
            user: user._id
        })

    const safePublication = await newPublication.save()
    
    return res.status(201).json({
        success: true,
        message: "Publication create",
        publication: safePublication
    })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error creating publication",
            error: err.message  
        })
    }
}


export const updatePublication = async (req, res) => {
    try{
        const { user } = req
        const { pid } = req.params
        const data = req.body

        const publicationUpdated = await publication.findOneAndUpdate({ _id: pid, user: user._id}, data, { new: true})

        if(!publicationUpdated) {
            return res.status(404).json({
                success: false,
                message: "The post does not exist or you do not have permission to update it"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Post successfully updated",
            publicationUpdated
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error updating post",
            error: err.message
        })
    }
}


export const deletePublication = async (req, res) => {
    try{
        const { user } = req
        const { pid } = req.params

        const publicationDelete = await publication.findOneAndDelete({_id: pid, user: user._id})

        if(!publicationDelete) {
            return res.status(404).json({
                success: false,
                message: "The post does not exist or you do not have permission to delete it"
            })
        }
        
        return res.status(200).json({
            success: true,
            message: "Post successfully deleted"
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error deleting post",
            error: err.message
        })
    }
}