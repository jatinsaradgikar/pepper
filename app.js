require('dotenv').config();
const express = require('express');
const { MulterError } = require('multer');
const multer = require('multer');
const { s3upload } = require('./models/helpers/AWSHelper');
const storage = multer.memoryStorage();
const connectDB = require('./models/helpers/DBHelper');

const app = express();
const port = process.env.PORT || 3000;

connectDB();
const fileFilter = (req, file, cb) => {
    if(file.mimetype.split('/')[1] === 'png' || file.mimetype.split('/')[1] === 'jpeg') {
        cb(null, true);
    } else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', false));
    }
}

const upload = multer({
    storage,
    fileFilter
})

app.post('/upload', upload.single('image'), async(req, res) => {
    const result = await s3upload(req.file);
    res.json({"status": "success", result});
})

app.listen(port, () => console.log(`App is running on port: ${port}`));