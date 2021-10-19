var express = require('express');
var router = new express.Router();
const User = require('../models/users')

router.post('/signup', async function(req, res ) {
    
    const user = new User(req.body)
    console.log("are we even here?")
    try {
      user.save()
      res.status(201).send(user);
    } catch (e) {
      res.status(400).send();
    }
  });

module.exports = router;




