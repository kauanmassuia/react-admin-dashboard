import { Injectable } from '@nestjs/common';
import { CreateProdutorDto } from './dto/create-produtor.dto';
import { UpdateProdutorDto } from './dto/update-produtor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutorService {
  constructor(private prisma: PrismaService) {}

  create(createProdutorDto: CreateProdutorDto) {
    return 'This action adds a new produtor';
  }

  findAll() {
    return `This action returns all produtor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtor`;
  }

  update(id: number, updateProdutorDto: UpdateProdutorDto) {
    return `This action updates a #${id} produtor`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtor`;
  }
}
