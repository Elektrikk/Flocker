const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api', (req,res) => {
    res.send("HALLO EVERYNYAN")
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });