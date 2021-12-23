const express = require('express')
const app = express()
const cors = require('cors')

// creation of mongodb database and the connection 
//with connector con variable.
const mongoose = require('mongoose')
const url = 'mongodb://localhost/User'
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', function () {
   console.log('connected...!')
})
mongoose.connect(url, { useNewUrlParser: true })



// use to gett he response in client due to browser security condition
app.use(cors())
// use so that the response is considers as json after the request
app.use(express.json())

//routes to get the request;

const register = require('./routes/register')
app.use('/api/register', register)
/*
app.post('/api/register', (req, res) => {
   console.log('got the respnse data:');
   console.log(req.body);
   res.json({ status: 'ok' });
})
*/
app.get('/hello', (req, res) => {
   res.send("hello world!")
})



app.listen(9000, () => {
   console.log("server is started on 9000 port.....!")
})