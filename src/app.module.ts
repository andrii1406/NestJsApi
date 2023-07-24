import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsService } from './cats/cats.service';

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
  providers: [AppService, CatsService],
})
export class AppModule {}
