import { Injectable } from "@nestjs/common";
import { CatsDto } from "../dto/cats.dto";
import { CatsModel } from "../model/cats.model";

@Injectable()
export class CatsMapper {
    
    public mapToModel(dto: CatsDto): CatsModel {
        return new CatsModel(
            dto.id,
            dto.name,
            new Date(dto.createdOn),
            dto.fl
        )
    }

}