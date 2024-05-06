import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try {
        const { fullName, username, gender, password, confirmPassword } = req.body

        if(password !== confirmPassword){
            return res.status(400).json({
                message: "passwords do not match"
            })
        }

        const user = await User.findOne({ username })

        if(user){
            return res.status(400).json({
                message: "username already exists"
            })
        }

        //Hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // profile avatar
        // const male = `https://avatar.iran.liara.run/public/boy?username=${username}`
        // const female = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const randomAvatar = `https://api.multiavatar.com/${username}.png`

        const newUser = new User({
            fullName,
            username,
            gender,
            password: hashedPassword,
            // avatar: gender === 'male' ? male : female
            avatar: randomAvatar
        })
        
        if(newUser){

            generateToken(newUser._id, res)

            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                avatar: newUser.avatar,
                message: "user created successfully"
            })
        }
        else{
            res.status(400).json({
                message: "Error creating user"
            })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({message: "Error creating user"})
    }
}

export const login = async (req, res) => {
    try {
        const { username, password} = req.body
        const user = await User.findOne({ username })

        const isCorrectPassword = await bcrypt.compare(password, user?.password || "")

        if(!isCorrectPassword || !user){
            return res.status(400).json({
                message: "username or password is incorrect"
            })
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            lastName: user.lastName,
            username: user.username,
            avatar: user.avatar,
            message: "user logged in successfully"
        })

    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({message: "Error logging in user"})
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt","", { maxAge: 0 })
        res.status(200).json({message: "User logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({message: "Error logging out user"})
    }
}