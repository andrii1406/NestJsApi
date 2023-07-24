import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService
    ) {}

  @Get()
  @Render('index')
  async render() {
    const message1 = 'This Page was updated by \'hbs\' template engine';
    const message2 = 'The data about \'Cats\' has gotten from database';
    const cats = await this.catsService.readAll();
    return { message1, message2, cats };
  }
  
}
