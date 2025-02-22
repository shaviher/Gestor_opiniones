"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnection } from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import userRoutes from "../src/user/user.routes.js" 
import publicationRoutes from "../src/publication/publication.routes.js"

const middlewares = (app) => {
    app.use(express.json());
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
}

const routes = async (app) => {
    app.use("/gestionOpiniones/v1/auth", authRoutes)
    app.use("/gestionOpiniones/v1/user", userRoutes)
    app.use("/gestionOpiniones/v1/publication", publicationRoutes)

}

const conectarDB = async () =>{
    try{
        await dbConnection()
    }catch(err){
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}

export const initServer = () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log(`Server running on port ${port} matutina`);
        });
    } catch (err) {
        console.log(`Server init failed: ${err}`);
    }
};
