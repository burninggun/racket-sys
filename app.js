const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require('mysql');


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cheng",
    database: "racket-system",
    port: 8889
})

db.connect( (err) => {
    if(err){
        throw err
    } else {
        console.log('connected to database')
    }
} )

app.listen(PORT, () => {
    console.log('Server is listening')
});