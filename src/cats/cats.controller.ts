import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {

	constructor(private readonly catsService: CatsService) { }

	@Get()
	readAll() {
		return this.catsService.readAll();
	}

	@Post()
	create(@Body() catsDto: CatsDto) {
		return this.catsService
			.create(catsDto)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				throw new HttpException('catsService.create error: ' + error, HttpStatus.INTERNAL_SERVER_ERROR);
			})
	}

}
