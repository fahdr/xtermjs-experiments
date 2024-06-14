const express = require('express');
const app = express();
const port = 8111;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});