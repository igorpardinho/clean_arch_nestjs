import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class FindAllUserService {
  constructor(private readonly userRespository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRespository.findAll();
  }
}
