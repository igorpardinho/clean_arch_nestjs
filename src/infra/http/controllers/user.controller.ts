import { Controller, Get } from '@nestjs/common';
import { CreateUserService } from '../../../application/services/create-user.service';
import { FindAllUserService } from '../../../application/services/findAll-user.service';
import { UserResponseDto } from '../../../application/dto/user-response.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findAllUserService: FindAllUserService,
  ) {}

  @Get()
  async findAll() {
    const users = await this.findAllUserService.execute();

    return users.map((user) => UserResponseDto.fromDomain(user));
  }
}
