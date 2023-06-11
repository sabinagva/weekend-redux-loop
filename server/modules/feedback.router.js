const express = require('express');
const { Pool } = require('pg');
const router = new express.Router();
const pool = require('./pool')



router.post('/',(req,res) =>{
    let newFeedback = req.body
    console.log('new feedback is', newFeedback)
    let values = [newFeedback.feelings/1, newFeedback.understanding/1, newFeedback.support/1, newFeedback.comments]
    console.log('values are ', values)
    let sqlText = `INSERT INTO "feedback" ("feeling","understanding", "support", "comments")
                    VALUES($1,$2,$3,$4)`
    pool.query(sqlText, values)
    .then (result =>{
        res.sendStatus(201)
    })
    .catch(error => {
        console.log('error posting our feedback to database', error)
        res.sendStatus(500)
    })
})
module.exports = router
