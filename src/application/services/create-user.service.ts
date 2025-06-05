import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const user: User = new User(dto.id, dto.name, dto.email);

    return await this.userRepository.create(user);
  }
}
