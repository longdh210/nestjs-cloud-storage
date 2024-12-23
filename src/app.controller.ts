import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.appService.createUser(user);
  }

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.appService.getUserById(id);
  }
}
