import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract create(user: User): Promise<void>;
  abstract findOne(id: number): Promise<User | null>;
  abstract deleteById(id: number): Promise<boolean>;
}
