import { UserResponseDto } from './../../../application/dto/user-response.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserService } from '../../../application/services/create-user.service';
import { FindAllUserService } from '../../../application/services/findAll-user.service';
import { CreateUserDto } from '../../../application/dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findAllUserService: FindAllUserService,
  ) {}

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.findAllUserService.execute();

    return users.map((user) => UserResponseDto.fromDomain(user));
  }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<void> {
    return await this.createUserService.execute(dto);
  }
}
