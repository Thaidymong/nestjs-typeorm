import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/entities/news.entity';
import { Repository } from 'typeorm';
import { CreateNewsDto, UpdateNewsDto } from './dto/createNewsDto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepo: Repository<News>,
  ) {}
  async findAll() {
    return await this.newsRepo.find();
  }
  async findOne(id: number) {
    return await this.newsRepo.findOne({ where: { id: id } });
  }
  async createNews(createNewsDto: CreateNewsDto) {
    const news = await this.newsRepo.create(createNewsDto);
    return await this.newsRepo.save(news);
  }
  async updateNews(id: number, updateNewsDto: UpdateNewsDto) {
    return this.newsRepo.update(id, updateNewsDto);
  }
  async deleteNews(id: number) {
    const { affected } = await this.newsRepo.delete(id);
    return Boolean(affected);
  }
}
