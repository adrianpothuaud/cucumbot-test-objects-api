const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect("mongodb://" + process.env.DB_HOST + "/cucumbot", { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

module.exports = db;