import { text } from "express";
import { Schema, model } from "mongoose";

const commentSchema = Schema({
    text:{
        type: String,
        required: [true, "The text is necessary"],
        maxLength: [150, "Text cannot exceed 100 characters"]
    },
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    }
})

export default model("Comments", commentSchema)