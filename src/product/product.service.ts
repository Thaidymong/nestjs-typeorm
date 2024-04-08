import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.productRepo.create(createProductDto);
    return await this.productRepo.save(product);
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: number) {
    return await this.productRepo.findOne({ where: { id: id } });
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepo.update(id, updateProductDto);
  }

  async removeProduct(id: number): Promise<string> {
    const { affected } = await this.productRepo.delete(id);
    if (affected > 0) {
      return 'Delete product successful';
    } else {
      return 'Do not have product with id:' + id;
    }
  }
}
