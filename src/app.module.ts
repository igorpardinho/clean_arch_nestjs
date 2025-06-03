import { TypeOrmUserRepository } from './infra/database/typeorm/user.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/database/typeorm/user.entity';
import { UserController } from './infra/http/controllers/user.controller';
import { CreateUserService } from './application/services/create-user.service';
import { FindAllUserService } from './application/services/findAll-user.service';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUserService,
    FindAllUserService,
    {
      provide: 'UserRepository',
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class AppModule {}
