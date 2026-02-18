import { findUserById } from "../dao/user.dao.js"
import { verifyToken } from "../utils/helper.js"

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken
    if(!token) return res.status(401).json({message:"Unauthorized"})
    try {
        const userId = verifyToken(token)
        const user = await findUserById(userId)

        if(!user) return res.status(401).json({message:"Unauthorized"})
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized",error})
    }
}