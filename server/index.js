require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./authController');
const app = express();

app.use(express.json());

//CONNECTION TO MY SERVER, DATABASE, AND USER SESSION
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

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