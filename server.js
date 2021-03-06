const dotenv = require('dotenv');
const app = require('./app');
require('./db');

dotenv.config();

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Live at ${PORT}`));