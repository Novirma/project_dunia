import { Injectable } from '@nestjs/common';
import { CreatePremieredDto } from './dto/create-premiered.dto';
import { UpdatePremieredDto } from './dto/update-premiered.dto';

@Injectable()
export class PremieredService {
  create(createPremieredDto: CreatePremieredDto) {
    return 'This action adds a new premiered';
  }

  findAll() {
    return `This action returns all premiered`;
  }

  findOne(id: number) {
    return `This action returns a #${id} premiered`;
  }

  update(id: number, updatePremieredDto: UpdatePremieredDto) {
    return `This action updates a #${id} premiered`;
  }

  remove(id: number) {
    return `This action removes a #${id} premiered`;
  }
}
