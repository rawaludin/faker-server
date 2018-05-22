const express = require('express')
const faker = require('faker')
const app = express()
const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', function (req, res) {
  let property = req.query.property
  if (property == null) {
    let result = faker.name.findName()
    res.send(result)
  } else {
    var attribute = property.split('.')[0];
    var method = property.split('.')[1];
    let result = faker[attribute][method]()
    res.send(result)
  }

})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
