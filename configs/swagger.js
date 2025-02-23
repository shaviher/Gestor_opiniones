import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Gestor de opiniones API",
            version: "1.0.0",
            description: "API para un sistema de gestion de opiniones",
            contact:{
                name: "Javier Alejnadro Hernandez Ochoa",
                email: "jhernandez-2020439@gkinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/gestionOpiniones/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/publication/publication.routes.js",
        "./src/comments/comments.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}