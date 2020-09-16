import { userSchema } from '../models/users'; // подключили модель пользователя

export let getUsers = (req, res) => {
  userSchema.find({}) // здесь не понятно, где происходит поиск
    .then((users) => res.send({ users })) // в фигурных скобках отправляется JSON
    .catch((err) => res.send({ message: err }))
}

export let createUser = (req, res) => {
  const { name, email, password, enabled } = req.body;
  userSchema.create({
    name, email, password, enabled
  })
    .then((user) => res.send({ user }))
    .catch((err) => res.send({ message: err }))
}

export let putUser = (req, res) => {
  const id = req.params.id;
  const { name, email, password, enabled } = req.body;
  userSchema.findByIdAndUpdate(id, { name: name, email: email, password: password, enabled: enabled })
    .then((user) => res.send({ user }))
    .catch((err) => res.send({ message: err }))
}