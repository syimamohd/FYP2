const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, PUT")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Serve only the static files form the dist directory
app.use(express.static('www'));

app.get('/*', function(req,res) {

  if(req.url === '/') {
    res.sendFile(path.join(__dirname,'/www/index.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '/www' + req.url))
  }

});

app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
  var port = app.get('port')
  console.log(`No. Port ${port}`)
})