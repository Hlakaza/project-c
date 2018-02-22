## TODO
1. Complete uploading of files
2. Implement sendgrid for emails

# Project-C

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.1.2.

## Prerequisites
1. MongoDB installed and running (http://mongodb.org)
2. Node.js and NPM installed (http://nodejs.org)

## Specs
1. User login/signup using JSON Web Token (jwt) with Passport.
2. User password reset via email (nodemailer & SendGrid) using HTML templates (welcome email included upon user registration).
3. Toastr Notifications (& Error Handling).
4. Storing files to file system.
5. Storing file path to MongoDB among text fields.
6. Edit form, user can edit the text inputs and the file or update only the file or update only the text fields.
7. Admin area, admin can edit or delete all forms in database.

## Packages Used
`Angular-cli v1.1.2` <br />
`Angular v4.2.3` <br />
`Webpack` <br />
`Node used in development v8.1.2` <br/>
`MongoDB used in development v3.4.1` <br/>
`Mongoose v4.10.7` <br />
`Express v4.15.3` <br />
`angular2-jwt v0.1.27` (for checking the expiration date of the jwt token, user role (admin or user)) and for using AuthHttp wrapper.<br />
`jsonwebtoken v7.4.1` <br />
`Multer v1.3.0` <br />
`ng2-toastr v4.1.0` <br />
`gm v1.23.0` <br />
`Passport v0.3.2` <br />
`Passport-jwt v2.2.1` <br />
`Bcrypt v1.0.2` <br />
`Node-schedule v1.2.3` <br />
`Find-remove v1.0.1` <br />
`BootStrap 3`  (css is included in `assets` folder) <br/>
`Font Awesome` (css is included in `assets` folder) <br/>
`Glyphicons`   (found in `fonts` folder under `assets`) <br/>

## Installing Dependecies
1. Clone this repo from Git
2. Run `npm install` in your command line.
3. Edit `config.js` in `/server/config` folder.
4. Run `node seed.js` to insert the admin user into database and create uploads folder. Admin email is `test@test.com` and password is `testpass`.  Make sure mongod is running.
5. After login navigate to `localhost:3000/#/admin` to access admin panel.

## Building the Angular app
Run `ng build`

A new `dist` folder will be created with all files needed to run the Angular 2 app in front end.

If you want to make changes on the Angular app and auto-refresh the `dist` folder then run the following command in your terminal:
 `ng build --watch`

## Running the server
Run `npm start` <br />
If you want to make changes on the Server and auto refresh the back end code then run: `nodemon npm start`. If you don't have nodemon installed, run `npm install nodemon -g`. <br />
If you want to execute the cron job in order to clean up `/uploads/tmp` folder every 1 hour for files that their age is greater than 1 hour, run `node cron.js`.

## Viewing the App
Open your favourite web browser and point to `http://localhost:3000`

Enjoy!

## Help with angular-cli
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

