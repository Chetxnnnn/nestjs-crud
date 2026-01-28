import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('user')
  createUser(@Body() body: createUserDto) {
    console.log(body);
    return { msg: 'user created successfully', data: body };
  }

  @Get('user/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.authService.findById(id);
  }

  @Get('user')
  findUsers() {
    return this.authService.findAll();
  }
}
