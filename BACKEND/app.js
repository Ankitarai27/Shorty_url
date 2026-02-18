import express from "express";
import helmet from "helmet";
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/monogo.config.js" // Check spelling!
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
dotenv.config() // Standard config call





const app = express();
app.use(rateLimit({
 windowMs: 15*60*1000,
 max: 100
}));
app.use(cors({
    origin: true,
    credentials: true
}));



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

// Use process.env.PORT for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})

app.use(helmet())