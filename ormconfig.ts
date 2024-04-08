import { Comment } from 'src/entities/comment.entity';
import { News } from 'src/entities/news.entity';
import { Product } from 'src/entities/product.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'dymongDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Dymong@100',
  entities: [User, Topic, Comment, News, Product],
  synchronize: true,
  logging: true,
};

export default config;
