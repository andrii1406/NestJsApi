import { Injectable } from '@nestjs/common';
import { DataSource, InsertResult } from 'typeorm';
import { CatsModel } from './model/cats.model';
import { CatsDto } from './dto/cats.dto';

@Injectable()
export class CatsService {

    constructor(private dataSource: DataSource) { }

	async readAll(): Promise<CatsModel[]> {
        return await this.dataSource.getRepository(CatsModel).find();
	}

	async create(catsDto: CatsDto): Promise<InsertResult> {
        return await this.dataSource
			.createQueryBuilder()
			.insert()
			.into(CatsModel)
			.values([
				{
					name: catsDto.name,
					createdOn: new Date(catsDto.createdOn),
					fl: catsDto.fl
				},
			])
			.execute();
	}

}
