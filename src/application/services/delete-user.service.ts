import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: number): Promise<boolean> {
    const user = await this.userRepository.deleteById(id);

    if (!user) {
      throw new NotFoundException(`o usuario com id ${id} não foi encontrado`);
    }
    return user;
  }
}
