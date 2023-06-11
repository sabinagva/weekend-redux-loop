const express = require('express');
const { Pool } = require('pg');
const router = new express.Router();
const pool = require('./pool')

router.get('/',(req,res) => {
console.log('connecting server to client')
pool.query('SELECT' * FROM "feedback")
.then(result => {
    res.send(result.rows);
}).catch((error) => {
    console.log('error in server get', error)
})
})

router.post('/',(req,res) =>{
    let newFeedback = req.body
    let values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]
    let sqlText = `INSERT INTO "feedback" ("feeling","understanding", "support", "comments")
                    VALUES($1,$2,$3,$4)`
    pool.query(sqlText, values)
    .then (res =>{
        res.sendStatus(201)
    })
    .catch(error => {
        console.log('error posting our feeback to database', error)
        res.sendStatus(500)
    })
})
module.exports = router
