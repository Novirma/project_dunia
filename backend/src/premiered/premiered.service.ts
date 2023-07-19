import { Injectable } from '@nestjs/common';
import { CreatePremieredDto } from './dto/create-premiered.dto';
import { UpdatePremieredDto } from './dto/update-premiered.dto';
import { Sequelize } from 'sequelize-typescript'
import { premiered } from 'models/bookmart';

@Injectable()
export class PremieredService {

  constructor(private sequelize: Sequelize) {}

  create(createPremieredDto: CreatePremieredDto) {
    return 'This action adds a new premiered';
  }

  async findAll() {
    try {
      const result:any = await this.sequelize.query('select * from bookmart_anime.premiered')
      let name = result[0]
      console.log(name);
      
      return result[0]
      // return (result[0][0].name)
      
    } catch (error) {
      return error.message
    }
  }

  async findOne(id: any) {
    try {
      const result:any = await this.sequelize.query(`select * from bookmart_anime.premiered where premier_id = ${id}`)
      // if (result.length == 0) throw new Error('Data Premiered/Musim Tidak di Temukan!!')
      if (result[0].length == 0) throw new Error('Data Premiered/Musim Tidak di Temukan!!')
      return result[0];
    } catch (error) {
      return error.message
    }
  }

  async createPremiered(dataBody : any) {
    try {
      const result = await premiered.create({
        premier_id: dataBody.premier_id,
        name: dataBody.name,

      });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  update(id: number, updatePremieredDto: UpdatePremieredDto) {
    return `This action updates a #${id} premiered`;
  }

  remove(id: number) {
    return `This action removes a #${id} premiered`;
  }
}
