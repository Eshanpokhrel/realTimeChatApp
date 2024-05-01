import User from "../models/user.model.js"

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, gender, password, confirmPassword } = req.body

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
        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword = await bcrypt.hash(password, salt)

        //profile avatar
        // const male = ``
        // const female = ``

        const newUser = new User({
            firstName,
            lastName,
            username,
            gender,
            password,
            // avatar: gender === 'male' ? male : female
        })

        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            username: newUser.username,
            // avatar: newUser.avatar,
            message: "user created successfully"
        })

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({message: "Error creating user"})
    }
}

export const login = (req, res) => {
    console.log("login")
}

export const logout = (req, res) => {
    console.log("logout")
}