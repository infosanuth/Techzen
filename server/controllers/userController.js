import User from "../models/User.js"

// Get user data
const getUserData = async (req, res) => {

    const userId = req.auth.userId

    try {

        const user = await User.findById(userId)

        if (!user) {
            return res.json({ success: false, message: 'User Not Found' })
        }

        res.json({ success: true, user })

    } catch (error) {

        res.json({ success: false, message: error.message })

    }
}

export {
    getUserData,

}
