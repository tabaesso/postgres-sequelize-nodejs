const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('ta funcionando'));

// app.listen(3000);