import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class FindOneUserService {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`o usuario com id ${id} não foi encontrado`);
    }
    return user;
  }
}
