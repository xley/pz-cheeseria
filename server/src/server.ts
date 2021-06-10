import express = require('express');
import apiRouter from './routes';
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(apiRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));