const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_CONN_STR || "mongodb://mongo/cucumbot", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false);
let db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

module.exports = db;