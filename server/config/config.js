module.exports = {
    'database': 'mongodb://luckyH:Tempest16**@ds237868.mlab.com:37868/clinix',
    'secret': 'SUPERsecretisSuperDaper', // change this to a hard to guess random string. it's for jwt encryption and decryption
    'api_user': 'send_api_user',
    'api_key': 'send_api_key',
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
        source: './sendgrid.env',
    }
};