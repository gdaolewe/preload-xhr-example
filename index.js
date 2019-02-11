const express = require('express');
const app = express();
const PORT = 3030;
app.get('/foo', function (req, res) {
  console.log('received request at ' + new Date());
  setTimeout(function () {
    console.log('sending response at ' + new Date());
    res.send({ listings: [{id: 1}, {id: 2}] });
  }, 2000);
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
