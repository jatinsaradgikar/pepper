const ImageRepository = require('../models/repositories/ImageRepository');
exports.postImage = async(req, res) => {
    try {
        const image = await ImageRepository.postImage({ url, uploadedDate });
        return res.status(200).json({ "data": image })

    } catch(err) {
        console.error(err);
        return res.status(500).json({"message": "Internal Server Error"});        
    }
}
exports.getImage = async(req, res) => {
    try {
        const image = await ImageRepository.getImage();
        return res.status(200).json({ "data": image })
    } catch(err) {
        console.error(err);
        return res.status(500).json({"message": "Internal Server Error"});        
    }
}