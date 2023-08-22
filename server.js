import express from "express";
import colors from "colors" ;
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors' ;

//config dotenv
dotenv.config();

//database config
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get('/',(req,res) => {
     res.send("<h1>Welcome to Ecommerce app </h1>")
});

//port
const port = process.env.port;

//run listen
app.listen(port, () => {
    console.log(`Server is running on ${process.env.dev_mode} mode on ${port}`.bgCyan.white);
});

