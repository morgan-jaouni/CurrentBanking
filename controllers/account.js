const express = require('express');
const router = express.Router();
const userdata;
router.get('/account', (req, res)=>{
	res.render('index.ejs');
});

module.exports = router;