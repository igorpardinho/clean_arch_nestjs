import { UserResponseDto } from './../../../application/dto/user-response.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserService } from '../../../application/services/create-user.service';
import { FindAllUserService } from '../../../application/services/findAll-user.service';
import { CreateUserDto } from '../../../application/dto/create-user.dto';
import { DeleteUserService } from '../../../application/services/delete-user.service';
import { FindOneUserService } from '../../../application/services/findOne-user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findAllUserService: FindAllUserService,
    private readonly deleteUserService: DeleteUserService,
    private readonly findOneUserService: FindOneUserService,
  ) {}

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.findAllUserService.execute();

    return users.map((user) => UserResponseDto.fromDomain(user));
  }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.createUserService.execute(dto);
    return UserResponseDto.fromDomain(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserResponseDto | null> {
    const user = await this.findOneUserService.execute(id);
    return UserResponseDto.fromDomain(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.deleteUserService.execute(id);
  }
}
