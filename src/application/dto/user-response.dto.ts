import { User } from '../../domain/entities/user.entity';

export class UserResponseDto {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly email: string,
  ) {}

  static fromDomain(user: User): UserResponseDto {
    const dto: UserResponseDto = new UserResponseDto(
      user.id,
      user.name,
      user.email,
    );

    return dto;
  }
}
