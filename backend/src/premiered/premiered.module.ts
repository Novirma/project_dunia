import { Module } from '@nestjs/common';
import { PremieredService } from './premiered.service';
import { PremieredController } from './premiered.controller';

@Module({
  controllers: [PremieredController],
  providers: [PremieredService]
})
export class PremieredModule {}
