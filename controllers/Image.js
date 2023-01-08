const { s3upload } = require('../models/helpers/AWSHelper');
const ImageRepository = require('../models/repositories/ImageRepository');
exports.postImage = async(req, res) => {
    try {
        const result = await s3upload(req.file);
        const url = result.Location;
        const uploadedDate = result.Key.split('/')[1].split('T')[0];

        const image = await ImageRepository.postImage({url, uploadedDate});

        return res
                .status(200)
                .json({"status": "success", "message": "File uploaded successfully!", "data": image })
    } catch(err) {
        console.error(err);
        return res.status(500).json({"message": "Internal Server Error"});        
    }
}

exports.getImageList = async(req, res) => {
    try {
        const image = await ImageRepository.getImageList();
        return res.status(200).json({ "data": image })
    } catch(err) {
        console.error(err);
        return res.status(500).json({"message": "Internal Server Error"});        
    }
}