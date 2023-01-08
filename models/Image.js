const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    uploadedDate: { 
        type: Date, 
        default: Date.now 
    }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;