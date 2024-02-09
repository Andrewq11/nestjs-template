import { DataSource, DataSourceOptions } from 'typeorm';
import config from 'src/config';

const {
  db: { host, port, username, password, database },
} = config;

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: ['dist/db/models/*.model.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: false,
};

// This DataSource is used by migrations
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
