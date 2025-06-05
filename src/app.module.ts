import { Module } from '@nestjs/common';
import { UserController } from './infra/http/controllers/user.controller';
import { CreateUserService } from './application/services/create-user.service';
import { FindAllUserService } from './application/services/findAll-user.service';
import { DatabaseModule } from './infra/database/database.module';
import { FindOneUserService } from './application/services/findOne-user.service';
import { DeleteUserService } from './application/services/delete-user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserService,
    FindAllUserService,
    FindOneUserService,
    DeleteUserService,
  ],
})
export class AppModule {}
