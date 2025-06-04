import { Repository } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class TypeOrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly ormRepository: Repository<UserEntity>,
  ) {}
  async deleteById(id: number): Promise<boolean> {
    const result = await this.ormRepository.delete(id);

    return (result.affected ?? 0) > 0;
  }

  async findAll(): Promise<User[]> {
    const userEntities = await this.ormRepository.find();

    return userEntities.map((entity) => this.toDomainEntity(entity));
  }

  async create(user: User): Promise<void> {
    const userEntity: UserEntity = this.toTypeOrmEntity(user);
    await this.ormRepository.save(userEntity);
  }

  async findOne(id: number): Promise<User | null> {
    const userEntity: UserEntity | null = await this.ormRepository.findOne({
      where: { id },
    });
    if (!userEntity) {
      return null;
    }
    return this.toDomainEntity(userEntity);
  }

  private toTypeOrmEntity(user: User): UserEntity {
    const userEntity: UserEntity = new UserEntity();

    userEntity.id = user.id;
    userEntity.name = user.name;
    userEntity.email = user.email;

    return userEntity;
  }

  private toDomainEntity(userEntity: UserEntity): User {
    return new User(userEntity.id, userEntity.name, userEntity.email);
  }
}
