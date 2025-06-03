import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: number, name: string, email: string): Promise<void> {
    const user: User = new User(id, name, email);

    await this.userRepository.create(user);
  }
}
