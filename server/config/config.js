module.exports = {
    'database': 'mongodb://localhost:27017/clinix',
    'secret': 'SUPERsecretisSuperDaper', // change this to a hard to guess random string. it's for jwt encryption and decryption
    'api_user': 'your_username',
    'api_key': 'your_api_key',
    'jwtExpire': '5h', //set the jwtExpire in smaller period in production
    'paths': {
        // path for pets images
        serverPath: '../server/app',
        imagePath: 'server/uploads/forms/',
        docsPath:  'server/uploads/forms/',
        profileImagePath: 'server/uploads/profiles/',
        tmpImagePath: 'server/uploads/forms/',
        dist: '../dist',
        expressUploads: '/uploads',
        emailPath: 'server/views/email_templates/',
        source: './sendgrid.env',
    }
};