const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('transfer/index.ejs');
});

module.exports = router;