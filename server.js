const redis = require('redis');
const express = require('express');
const stringUtils = require('./utils/strings.js')
const app = express();

const client = redis.createClient();

client.on('error', function(err) {
  console.log('Something went wrong ', err);
});

app.post('/setValue', function(req, res) {
  client.set('String record', 'this Is What is sAved In Redis', redis.print);
})

app.get('/savedRecord', function (req, res) {
  client.get('String record', function(err, result) {
    const lowercaseValue = stringUtils.lowercase(result);
    const fixedConcat = stringUtils.concatenate('value saved in lowercase: ', lowercaseValue)

    res.send(`original value: ${result} ------
      after edit: ${fixedConcat}`)
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})