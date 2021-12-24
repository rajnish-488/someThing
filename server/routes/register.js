const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')

//register route take post responsce;
router.post('/', async (req, res) => {
   try {
      console.log('got the respnse data:');
      console.log(req.body);
      const userdata = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,

      })
      res.json({ status: 'userAdded', userdata })
   } catch (err) {
      res.send("error : " + err)
   }
});



module.exports = router