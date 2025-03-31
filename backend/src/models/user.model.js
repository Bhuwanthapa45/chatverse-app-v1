import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic:{
            type: String,
            default:"",
        },

    },
    {
        timestamps: true
    }
)
//In monoogse the name of the model is always singular and the first character is always upper case

const User = mongoose.model("User", userSchema);
//_id is created automatically by mongoose
export default User;
