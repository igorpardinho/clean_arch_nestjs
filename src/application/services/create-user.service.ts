import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';

export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<void> {
    const user: User = new User(dto.id, dto.name, dto.email);

    await this.userRepository.create(user);
  }
}
