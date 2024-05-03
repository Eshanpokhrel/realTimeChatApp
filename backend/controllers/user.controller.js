import User from "../models/user.model.js";

export const sidebarUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id
        
        const filter = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filter)
        
    } catch (error) {
        console.log("error in sidebarUsers", error.message);
        res.status(500).json({error: "server error"})
    }
}