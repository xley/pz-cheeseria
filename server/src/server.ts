import express = require('express');
import swaggerUi from "swagger-ui-express";

import apiRouter from './routes';
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
app.listen(port, () => console.log(`Server listening on port: ${port}`));