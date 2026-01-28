import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { data } from 'src/data/MOCK_DATA';

const users = data;
@Injectable()
export class UserService {
  createUser(body: createUserDto) {
    const exists = users.find((user) => user.email === body.email);
    if (exists) return { msg: 'user already exists', user: exists };
    users.push(body);
    return { msg: 'User created successfully', user: users[users.length - 1] };
  }

  updateUser(x: createUserDto) {
    const user = users.find((user) => user.id === x.id);
    if (!user) return { msg: 'no such user found with the given id' };
    user.email = x.email;
    user.last_name = x.last_name;
    return { msg: 'User details updated successfully', user };
  }

  deleteUser(id: number) {
    return { msg: 'deleting a user' };
  }

  getUserById(id: number) {
    const user = users.find((user) => user.id === id);
    return { msg: 'getting a user by id', id, user };
  }

  getAllUsers() {
    return { msg: 'getting all users', users };
  }
}
