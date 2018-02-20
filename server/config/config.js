module.exports = {
    'database': 'mongodb://test:testpass@012345.doglab.com:4568/databasename',
    'secret': 'SUPERsecret', // change this to a hard to guess random string. it's for jwt encryption and decryption
    'api_user': 'yourname',
    'api_key': 'thequickbrownfox',
    'jwtExpire': '5h', //set the jwtExpire in smaller period in production
    'paths': {
        // path for pets images
        serverPath: '../server/app',
        imagePath: 'server/uploads/forms/',
        profileImagePath: 'server/uploads/profiles/',
        tmpImagePath: 'server/uploads/tmp/',
        dist: '../dist',
        expressUploads: '/uploads',
        emailPath: 'server/views/email_templates/',
    }
};