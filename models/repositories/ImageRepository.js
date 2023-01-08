const Image = require('../Image');
exports.postImage = async(body) => {
    try {
        let image = new Image({ 
            url: body.url,
            uploadedDate: body.uploadedDate
        });
        return await image.save();
    } catch(err) {
        throw new Error(err);
    }
}

exports.getImageList = async(query) => {
    try {
        return await Image.find();
    }catch (error) {
        throw new Error(error);
    }    
}