const { Router } = require('express')
const express = require('express')
const router = express.Router()


router.post('/', async (req, res) => {
   try {
      console.log('got the respnse data:');
      console.log(req.body.name);
      res.json({ status: 'ok' })
   } catch (err) {
      res.send("error : " + err)
   }
});

module.exports = router