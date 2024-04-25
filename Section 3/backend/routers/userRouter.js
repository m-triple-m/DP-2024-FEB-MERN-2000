const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('Response from user add');
});

router.get('/delete', (req, res) => {
    res.send('Response from user delete');
});

router.get('/update', (req, res) => {
    res.send('Response from user update');
});

// getall
router.get('/getall', (req, res) => {
    res.send('Response from user getall');
});

module.exports = router;