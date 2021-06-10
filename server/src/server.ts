import express = require('express');
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";
import { createConnection } from "typeorm";

import apiRouter from './routes/index';
import dbConfig from "./config/database";
import { cheeses } from './seeds/cheeses.seed';
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.use(apiRouter);

const port = process.env.PORT || 9000;

createConnection(dbConfig)
    .then(async connection => {
        await connection.manager.save(cheeses);
    })
    .then((_connection) => {
        app.listen(port, () => {
            console.log("Server is running on port", port);
        });
    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    });