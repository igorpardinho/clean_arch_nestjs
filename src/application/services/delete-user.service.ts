import { UserRepository } from '../../domain/repositories/user.repository';

export class DeleteUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: number) {
    await this.userRepository.deleteById(id);
  }
}
