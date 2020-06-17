require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();

app.use(express.json());
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 * 7},
    secret: SESSION_SECRET
}))

//endpoints

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