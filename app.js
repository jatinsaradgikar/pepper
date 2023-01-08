require('dotenv').config();
const express = require('express');

const connectDB = require('./models/helpers/DBHelper');
const imageRouter = require('./routes/Image');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api/image', imageRouter);

app.listen(port, () => console.log(`App is running on port: ${port}`));