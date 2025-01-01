import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'

// User signup
const registerUser=asyncHandler(async (req,res)=>{
    const {fullname,username,email,password}=req.body

    //validation
    if([fullname,username,email,password].some((field)=>field?.trim()==="")
    )
        {
            throw new ApiError(400,"All fields are required")
        }
        //check for existing user
    const existedUser=await User.findOne(
        {
            $or:[{username},{fullname}]
        }
    )
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }
    try {
        const user= await User.create(
            {
                fullname,
                username:username.toLowerCase(),
                email,
                password,
                cart:[]
            }
        )
        const createdUser= await User.findById(user._id)
        .select(
            "-password -refreshToken"
        )
        if(!createdUser){
            throw new ApiError("500","Something went wrong while registering a user")
        }
        return res
        .status(200)
        .json(new ApiResponse(200,createdUser,"User registered Successfully"))
        
    } catch (error) {
        throw new ApiError(402,"error whilke registering user")
    }
})
// User login
const loginUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body
    if (
        [username, email, password].some((field) => field?.trim() === "")
      ) {
        throw new ApiError(400, "All fields are required")
      }

      const user= await User.findOne(
        {
            $or:[{username},{email}]
        }
      )
      if(!user){
        throw new ApiError(404,"user not Found")
      }

      const isPasswordvalid= await user.isPasswordCorrect(password)
      if(!isPasswordvalid){
        throw new ApiError(401,"Invalid user credentials")
      }
      const { accessToken, refreshToken } = await generateAccessandRefreshToken(user._id)

      const loggedInUser= await User.findById(user._id)
      .select("-password -refreshToken")
      if(!loggedInUser){
        throw new ApiError(401, "error while fetching logged in user") 
      }

      const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV || "production"
      }
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new ApiResponse(200,
        {user:loggedInUser,accessToken,refreshToken},
        "User logged in succesfully"
    ))
})
const generateAccessandRefreshToken=async(userId)=>{
    try {
        const user=await User.findById(userId)
        if(!user){
            throw new ApiError(401,"no user found while generating tokens")
        }
        const refreshToken=user.generateRefreshToken()
        const accessToken=user.generateAccessToken()

        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wronmg while generatin refresh and access token")
    }
}
const logoutUser=asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {new:true}
    )
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV || "production"
      }
      return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"))
})
const refreshAccessToken = asyncHandler(async (req, res) => {
    const incommingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
  
    if (!incommingRefreshToken) {
      throw new ApiError(401, "Refresh token is required")
    }
    try {
      const decodedToken = Jwt.verify(
        incommingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
      )
      const user = await User.findById(decodedToken?._id)
  
      if (!user) {
        throw new ApiError(401, "invalid refresh token")
      }
      if (incommingRefreshToken !== user?.refreshToken) {
        throw new ApiError(401, "invalid refresh token or expired")
      }
  
      const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV || "production"
      }
      const { accessToken, refreshToken: newRefreshToken } =
        await generateAccessandRefreshToken(user._id)
  
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refresh successflly"
        ))
    } catch (error) {
      throw new ApiError(500, "something went wrong while refreshing success token")
    }
  })
export{
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken
}