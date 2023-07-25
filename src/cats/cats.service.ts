import { Injectable } from '@nestjs/common';
import { DataSource, InsertResult } from 'typeorm';
import { CatsModel } from './model/cats.model';
import { CatsDto } from './dto/cats.dto';
import { CatsMapper } from './mapper/cats.mapper';

@Injectable()
export class CatsService {

    constructor(
		private dataSource: DataSource,
		private readonly catsMapper: CatsMapper
	) { }

	async readAll(): Promise<CatsModel[]> {
        return await this.dataSource
			.getRepository(CatsModel)
			.find();
	}

	async create(catsDto: CatsDto): Promise<InsertResult> {
        return await this.dataSource
			.createQueryBuilder()
			.insert()
			.into(CatsModel)
			.values( this.catsMapper.mapToModel(catsDto))
			.execute();
	}

}
