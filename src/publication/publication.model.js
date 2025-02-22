import { Schema, model } from "mongoose";
import { categories_allow } from "../../configs/categories.js";

const publicationSchema = new Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxLength: [20, "The title cannot exceed 20 characters."]
    },
    category:{
        type: String,
        enum: categories_allow,
        required: true
    },
    text:{
        type: String,
        required: [true, "The text is necessary"],
        maxLength: [150, "Text cannot exceed 150 characters"]
    },
    status:{
        type: Boolean,
        default: true
    },
    comments: [{
        type: Schema.ObjectId,
        ref: "Comments",
    }],
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
    }
})

export default model("Publication", publicationSchema)