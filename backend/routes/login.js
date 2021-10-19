var express = require('express');
var router = express.Router();
const User = require('../models/users')

router.post('/login', async (req, res) => {
    try {
      const user = await User.findByCredentials(req.body.email) 
      console.log(user)  
    } catch (e) {
      res.status(400).send(e)
      }
    } );
  
module.exports = router;

