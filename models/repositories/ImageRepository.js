const Image = require('../Image');

exports.postImage = async(body) => {
    try {
        const payload = {
            url,
            uploadedDate
        } 
        return await Image.create(payload);
    } catch(err) {
        throw new Error(err);
    }
}

exports.getImageList = async(query) => {
    try {
        return await Image.find(query);
    }catch (error) {
        throw new Error(error);
    }    
}

exports.getImage = async() => {
    try {
        return await Image.findOne(query);
    }catch (error) {
        throw new Error(error);
    }
}