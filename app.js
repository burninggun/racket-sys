const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require('mysql');
const bodyParser = require('body-parser')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cheng",
    database: "racket-system",
    port: 8889
})


db.connect( (err) => {
    if(err){
        throw err;
    } else {
        console.log('connected to database');
    }
} )

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
    console.log('reached test route');
    res.send('hello test');
});

app.post('/racket/new', (req, res) => {
    console.log(req.body)
    res.send('received!')
})

app.listen(PORT, () => {
    console.log('Server is listening');
});