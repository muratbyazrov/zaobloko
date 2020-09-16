import { Router } from 'express';

export const userRout = Router(); // используется в app.ts

import { getUsers, createUser, putUser } from '../controllers/userController';

userRout.get('/', getUsers);
userRout.post('/', createUser);
userRout.put('/:id', putUser);
