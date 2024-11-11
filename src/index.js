import dotenv, { config } from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
app.listen(process.env.PORT || 8000 , () => {
console.log(`server is running at the port ${process.env.PORT}`);
});
})
.catch((error) => {
console.log(`MONGODB connection filed !!!`, error);
})