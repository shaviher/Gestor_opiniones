import { Schema, model } from "mongoose";

const publicationSchema = new Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxLength: [20, "The title cannot exceed 20 characters."]
    },
    category:{
        type: String,
        enum: ["Technology", "Sports", "Policy","Food","Entertainment","Travel","Fashion","health","Education","Art"],
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
    Comments: [{
        type: Schema.ObjectId,
        ref: "Comments",
    }],
    User: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
    }
})

export default model("Publication", publicationSchema)