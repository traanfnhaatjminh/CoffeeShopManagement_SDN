const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const User = require("../../model/user");

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser)
            return res.json({
                success: false,
                message: "User doesn't exits! Please register  first",
            });
        const checkPasswordMatches = await bcrypt.compare(
            password,
            checkUser.password
        );
        if (!checkPasswordMatches)
            return res.json({
                success: false,
                message: "Incorrect password! Please try again",
            });
        const token = jwt.sign(
            {
                id: checkUser._id,
                role: checkUser.role,
                email: checkUser.email,
                fullName: checkUser.fullName,
            },
            "JWT_ACCESS_TOKEN_SECRET",
            { expiresIn: "60m" }
        );
        res.cookie("token", token, { httpOnly: true, secure: false }).json({
            success: true,
            message: "Logged in successfully",
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id,
                userName: checkUser.userName,
            },
        });
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Some error service false",
        });
    }
};

module.exports = { loginUser };
