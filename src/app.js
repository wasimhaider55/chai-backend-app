import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


// Routes Import
import userRouter from "./routes/user.route.js"; 

// Routes Declartion
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register


export { app }