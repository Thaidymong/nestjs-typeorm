import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    UserModule,
    CommentModule,
    TypeOrmModule.forRoot(config),
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
