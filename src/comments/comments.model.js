import { Schema, model } from "mongoose";

const commentSchema = Schema({
    text:{
        type: String,
        required: [true, "The text is necessary"],
        maxLength: [250, "Text cannot exceed 250 characters"]
    },
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    publication: {
        type: Schema.ObjectId,
        ref: "Publication",
        required: true
    }
})

export default model("Comments", commentSchema)