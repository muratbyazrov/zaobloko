const express = require('express'); // подключили экспресс

const mongoose = require('mongoose'); // чтобы ts работал с MongoDB

const bodyParser = require('body-parser'); // объединяет приходящие пакеты

import { userRout } from './routes/userRout' // импортировали рут

const app = express(); // Создали приложение на express

app.use(bodyParser.json());
app.use('/api/user', userRout);

mongoose.connect('mongodb://localhost:27017/ts-express-app', { // подключили базу данных
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => { console.log('БД подключена!'); })
  .catch(() => { console.log('ошибка к подключению БД'); });

  // Наше приложение будеn слушать запросы, которые приходят на PORT
app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});