import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  findAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post('create')
  createUser(@Body() body: createUserDto) {
    return this.userService.createUser(body);
  }

  @Post('update')
  updateUser(@Body() user: createUserDto) {
    return this.userService.updateUser(user);
  }

  @Post('delete')
  deleteUser(@Body('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}

// create - post
// update - post
// delete - post
// retrieve: id - get
//         : all - get
