var express = require('express');
var router =  express.Router();
const User = require('../models/users')

/* GET users listing. */

router.get('/test' , (req, res, next) => {
  res.send(" works fine ")
})

module.exports = router;
