import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModel } from './model/cats.model';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CatsModel])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
