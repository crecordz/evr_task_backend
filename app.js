const express = require('express');
const helmet = require('helmet');
const { errors } = require('celebrate');
const path = require('path');
const cors = require('./middlewares/cors');

const { PORT = '3000' } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use('/textures', express.static('textures'));
app.use(cors);

app.post('/gettexture/', (req, res) => {
  const filePath = path.join(__dirname, 'textures/color.jpg');

  res.sendFile(filePath);
});

app.use(errors());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
