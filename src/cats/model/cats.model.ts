import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatsModel {
	
    @PrimaryGeneratedColumn()
	id: Number;

	@Column({ length: 30, unique: true })
	name: String;

	@Column()
	createdOn: Date;

	@Column()
	fl: Boolean;

}