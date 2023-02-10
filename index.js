var express = require('express');
var app = express();

app.get('/api/:date?', (req, res) => {
  const dateString = req.params.date
  const dateStringRegex = /^[0-9]+$/
  const numbersOnly = dateStringRegex.test(dateString)

  if (!numbersOnly) {
    const unixTimestamp = Date.parse(dateString)
    const utcDate = new Date(unixTimestamp).toUTCString()

    unixTimestamp
      ? res.json({ unix: unixTimestamp, utc: utcDate })
      : res.json({ error: "Invalid Date" })
  }
  else {
    const unixTimestamp = parseInt(dateString)
    const actualDate = new Date(unixTimestamp)
    const utcDate = actualDate.toUTCString()

    res.json({ unix: unixTimestamp, utc: utcDate })
  }

  app.get("/api", (req, res) => {
    let date = new Date();
    let UTC = date.getTime();
    UTC = new Date(UTC);
    UTS = UTC.toUTCString();
    let UNIX = date.getTime();
    res.json({ unix: UNIX, utc: UTS });
  })
})



var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
