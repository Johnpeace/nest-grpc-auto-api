import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Car } from '../cars/car.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'auto_db',
  entities: [Car],
  synchronize: true,
};
