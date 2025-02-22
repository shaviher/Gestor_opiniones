import publication from "./publication.model.js"

export const addPublication = async (req, res) => {
    try{
        const { user } = req
        const { tittle, category,text } = req.body

        const newPublication = new publication.create({
            title,
            category,
            text,
            user: user._id
        })

    const safePublication = await newPublication.save()
    
    return res.status(202).json({
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
