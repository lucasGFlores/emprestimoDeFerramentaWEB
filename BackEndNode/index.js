const dotev = require('dotenv')
const connectToDatabase = require('./src/db/connection')
dotev.config();
connectToDatabase();
require("./src/express.js")