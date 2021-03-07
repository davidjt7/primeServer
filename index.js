const { connectToDB } = require('./src/db');
require('dotenv').config();
const { app } = require('./src/routes');

connectToDB();

const port = process.env.PORT || 8080;
app.listen(port, () => {});
