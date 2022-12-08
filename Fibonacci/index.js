const express = require ("express");
const dotenv = require ("dotenv");
const routes = require ("./routes/routes.js");

const app = express();

dotenv.config();

app.use('/api', routes);


app.listen(process.env.PORT, () => {
    console.log(`${process.env.MESSAGE} ${process.env.PORT}`);
});