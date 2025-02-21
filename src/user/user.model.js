import { Schema, model } from "mongoose";

const userSchema = Schema({
    name:{
        type: String,
        required:[true, "name is required"]
    },
    lastname: {
        type: String,
        required:[true, "last name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        maxLength: [15,  "The username cannot exceed 15 characters"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    rol: {
        type: String,
        required: true,
        enum: ["ADMIN, CLIENT"],
        default: "CLIENT"
    },
    status: {
        type: Boolean,
        default: true
    },
    profilePicture: {
        type: String
    }
})

userSchema.methods.toJSON = function(){
    const { contra, _id, ...usuario } = this.toObject()
    usuario.uid = _id
    return usuario
}

export default model("User", userSchema)