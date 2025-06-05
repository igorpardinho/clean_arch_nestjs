import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { UserEntity } from './typeorm/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { TypeOrmUserRepository } from './typeorm/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
