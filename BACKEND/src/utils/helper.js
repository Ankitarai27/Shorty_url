import { customAlphabet } from "nanoid";
import { cookieOptions } from "../config/config.js";
import jsonwebtoken from "jsonwebtoken"

const nanoIdLowercase = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 7);

export const generateNanoId = (length = 7) =>{
    return nanoIdLowercase(length);
}

export const signToken = (payload) =>{
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"})
}

export const verifyToken = (token) =>{

    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    console.log(decoded.id)
    return decoded.id
}