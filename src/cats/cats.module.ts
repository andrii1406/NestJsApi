import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModel } from './model/cats.model';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsMapper } from './mapper/cats.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([CatsModel])],
  controllers: [CatsController],
  providers: [CatsService, CatsMapper]
})
export class CatsModule {}
