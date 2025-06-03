import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './typeorm/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [UserEntity],
  synchronize: true,
};
