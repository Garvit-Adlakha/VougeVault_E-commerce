import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const verifyJwt = asyncHandler(async (req, res, next) => {
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        throw new ApiError(401, "Unauthorized: No token provided");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Unauthorized: Invalid user");
        }

        req.user = user; // Attach user to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        throw new ApiError(401, "Unauthorized: Invalid access token");
    }
});
