import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsService } from './cats/cats.service';
import { CatsMapper } from './cats/mapper/cats.mapper';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      autoLoadEntities: true,
    }), 
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService, CatsService, CatsMapper],
})
export class AppModule {}
