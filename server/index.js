require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./authController');
const goalCtrl = require('./goalController');
const app = express();
// const nodemailer = require('nodemailer');

app.use(express.json());

//CONNECTION TO MY SERVER, DATABASE, AND USER SESSION
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, SERVER_EMAIL, SERVER_PASSWORD} = process.env

//TRANSPORTER EMAIL/ NODEMAILER
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: SERVER_EMAIL,
//       pass: SERVER_PASSWORD
//     }
//   })

//   app.set('tp', transporter)

//USER SESSEION BEGINS HERE
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 * 7},
    secret: SESSION_SECRET
}))

//ENDPOINTS
//Auth:
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.signIn)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)
app.put('/auth/update/:id', authCtrl.updateUser)

//Goal:
app.get('/api/goal/:goal_type_id', goalCtrl.getGoal)
app.get('/api/progress', goalCtrl.goalProgress)
app.put('/api/update/:goal_type_id', goalCtrl.updateGoal)

//CONNECTS ME TO MY DATABASE AND SERVER MAKING THE BACKEND FUNCTIONAL
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("Database is connected Ben, you rock!")
    app.listen(SERVER_PORT, () => console.log(`Server is Listening on ${SERVER_PORT}, way to go programmer!`))
}).catch(error => console.log(error,"could not connect to server"))