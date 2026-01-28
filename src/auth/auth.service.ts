import { Injectable, NotFoundException } from '@nestjs/common';
import { data } from 'src/data/MOCK_DATA';
@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'i am signup' };
  }

  findUser(id: number) {
    return { msg: `User found for id: ${id}` };
  }
  signin() {
    return { msg: 'i am LOGINNNNNNNNN' };
  }

  findAll() {
    return { users: data, msg: 'Users fetched successfully' };
  }

  findById(id: number) {
    const user = data.find((user) => user.id === id);
    if (!user) return new NotFoundException('User not found');
    return { msg: 'user found', user };
  }
}
 