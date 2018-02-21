module.exports = {
    'database': 'mongodb://luckyH:Tempest16**@ds237868.mlab.com:37868/clinix',
    'secret': 'SUPERsecretisSuperDaper', // change this to a hard to guess random string. it's for jwt encryption and decryption
    'api_user': 'luckyH',
    'api_key': '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',
    // 'SENDGRID_API_KEY': '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',
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
        source: './sendgrid.env'
    }
};