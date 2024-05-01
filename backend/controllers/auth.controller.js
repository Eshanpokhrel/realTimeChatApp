export const signup = (req, res) => {
    try {
        const { firstName, lastName, username, gender, password, confirmPassword } = req.body
    } catch (error) {
        
    }
}

export const login = (req, res) => {
    console.log("login")
}

export const logout = (req, res) => {
    console.log("logout")
}