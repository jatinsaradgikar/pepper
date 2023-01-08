const multer = require('multer');
const storage = multer.memoryStorage();
const { MulterError } = require('multer');
const { postImage, getImageList } = require("../controllers/Image");
const express = require('express');
const router = express.Router();

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
});

router.post('/upload', upload.single('image'), postImage);

router.get('/', getImageList);

module.exports = router;