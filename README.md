README – Tutorio PWA


OVERVIEW

Tutorio is a Progressive Web Application (PWA) designed to connect students with tutors. The application allows users to create accounts, browse tutor profiles, manage dashboards, and exchange messages through an inbox system. The project was developed using Node.js, Express.js, MongoDB, EJS, Bootstrap 5, and service workers for offline support.



INSTALLATION INSTRUCTIONS

Extract the ZIP File

Extract the submitted project ZIP file to a folder on your computer.

Open Command Prompt / Terminal

Navigate into the project folder:

cd tutorio

Install Dependencies

Run the following command:

npm install

This installs all required project dependencies listed in package.json.



REQUIRED LIBRARIES

The project uses the following additional libraries and frameworks:

express → Web server framework
ejs → Templating engine
mongoose → MongoDB object modelling
express-session → Session authentication
bcrypt → Password hashing
bootstrap → Responsive UI styling
node-geocoder → Location/geocoding functionality
dotenv → Environment variable management

If any packages fail to install automatically, they can be installed manually using:

npm install NAMEOFPACKAGE

Example:

npm install express



MONGODB SETUP

Ensure MongoDB is installed and running locally before starting the application.

Default MongoDB connection:

mongodb://127.0.0.1:27017/tutorio

If MongoDB is not running, the application will fail to connect to the database.

ENVIRONMENT VARIABLES

Create a .env file in the root project directory if one is not already included.

Example:

PORT=3000

SESSION_SECRET=yourSecretKey

MONGO_URI=mongodb://127.0.0.1:27017/tutorio

The session secret is required for secure session authentication.

RUNNING THE APPLICATION

Run the application using:

npm start

or

node server.js

(Use the correct entry file name depending on your project configuration.)

ACCESSING THE APPLICATION

Open a browser and navigate to:

http://localhost:3000




PROGRESSIVE WEB APP (PWA) FEATURES

The application includes:

Offline support using service workers
Cached static assets for faster loading
Responsive mobile-friendly layouts
Installable Progressive Web App functionality

To test offline support:

Open the application in the browser
Visit several pages
Disconnect from the internet
Reload previously visited pages

Previously cached pages should continue to load.



TROUBLESHOOTING

Login Sessions Not Updating

If login sessions appear broken after updating the service worker:

Open browser Developer Tools
Go to:
Application → Service Workers
Click:
Unregister
Clear Storage
Hard refresh the page

Port Already In Use

If port 3000 is already in use, change the port number inside the .env file or application configuration.



DEFAULT USER FUNCTIONALITY

Users can:

Register as tutors or students
Log in and out
Edit dashboard information
Browse tutor profiles
Send and receive inbox messages
Access cached pages offline