const express = require('express')
const app = express()
const cors = require('cors')

// creation of mongodb database and the connection 
//with connector con variable.
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/User'
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', function () {
   console.log('connected...!')
})
mongoose.connect(url, { useNewUrlParser: true })



// use to gett he response in client due to browser security condition
// use so that the response is considers as json after the request
app.use(cors())
app.use(express.json())



//routes to get the request;
const register = require('./routes/register')// imported route
app.use('/api/register', register)// sending to register route.

// the way to call the path with out creating the path on folder
const User = require('./models/user.model.js')
app.post('/api/login', async (req, res) => {
   try {
      const userdata = await User.findOne({
         email: req.body.email,
         password: req.body.password
      })
      if (userdata) {
         return res.json({ status: 'user find', userdata })
      } else {
         return res.json({ status: 'error' })
      }


   } catch (err) {
      res.json('error : ' + err)
   }
})



app.get('/hello', (req, res) => {
   res.send("hello world!")
})



app.listen(9000, () => {
   console.log("server is started on 9000 port.....!")
})