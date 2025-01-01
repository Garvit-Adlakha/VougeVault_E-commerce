import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    },
    cartData: [{
        type: Schema.Types.ObjectId,
        ref: "Cart",
        default: []
    }]
}, {
    timestamps: true
});
// Pre-save hook to hash the password before saving the user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Custom method to check if the provided password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Custom method to generate an access token
userSchema.methods.generateAccessToken = function () {
    try {
        return jwt.sign(
            {
                _id: this._id,
                email: this.email,
                username: this.username // Ensure this matches your schema field name
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1h' // Default expiry if not set
            }
        );
    } catch (error) {
        console.error("Error generating access token:", error.message);
        throw new Error("Failed to generate access token");
    }
};

// Custom method to generate a refresh token
userSchema.methods.generateRefreshToken = function () {
   try {
     return jwt.sign(
         {
             _id: this._id
         },
         process.env.REFRESH_TOKEN_SECRET,
         {
             expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '7d'  // Default expiry if not set
         }
     );
   } catch (error) {
    console.error("Error generating refresh token:", error);
    throw new Error("Could not generate refresh token");
   }
};

// Export the User model
export const User = mongoose.model("User", userSchema);
