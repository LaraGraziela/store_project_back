const express = require('express');
const router = require('./routes');

const app = express();

router(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
    console.log('http://localhost:3000')
})