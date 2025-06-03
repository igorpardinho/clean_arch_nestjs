import { User } from '../../domain/entities/user.entity';

export class UserResponseDto {
  id: number;
  name: string;
  email: string;

  static fromDomain(user: User): UserResponseDto {
    const dto: UserResponseDto = new UserResponseDto();
    dto.id = user.id;
    dto.name = user.name;
    dto.email = user.email;
    return dto;
  }
}
