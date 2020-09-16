import { Schema, model } from 'mongoose';
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false // не возвращать это поле
  },
  enabled: {
    type: Boolean,
    required: true
  }
})

export const userSchema = model('user', schema);

// ВОПРОСЫ
/*
1 Почему не работает module.exports = {}
2 Почему не работает require
3. Что такое @types/node и можно ли его использовать? (в таком случае вопросы выше решаются)
*/