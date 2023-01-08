const { S3 } = require('aws-sdk');

exports.s3upload = async(file) => {
    const s3 = new S3();

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${new Date().toISOString()}-${file.originalname}`,
        Body: file.buffer
    }

    return await s3.upload(params).promise();
}