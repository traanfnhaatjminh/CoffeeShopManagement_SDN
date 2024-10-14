const UnAuthenticatedError = require("../errors/unauthenticated");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const User = require("../model/user");
const asyncHandle = require("express-async-handler");

const protectRouter = asyncHandle(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Unauthorised user! You do not have permission right here",
        });
        // throw new UnAuthenticatedError("You do not have permission right here");
    }
    const decoderToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ _id: decoderToken.userId });
    req.user = user;
});
