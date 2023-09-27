require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001


  app.use(cors())
  
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json())
app.use('/', routers)



app.listen(PORT, () => {

    console.log(`server on port ${PORT}`);
})

