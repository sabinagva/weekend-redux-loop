const express = require('express');
const router = new express.Router();
const pool = require('./pool')

router.get('/',(req,res)=> {
console.log('connecting server to client')
pool.query('SELECT' * FROM "feedback")
.then(result => {
    res.send(result.rows);
}).catch((error) => {
    console.log('error in server get', error)
})
})
