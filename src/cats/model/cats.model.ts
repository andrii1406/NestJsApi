import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatsModel {

	@PrimaryGeneratedColumn()
	private id: Number;

	@Column({ length: 30, unique: true })
	private name: String;

	@Column()
	private createdOn: Date;

	@Column()
	private fl: Boolean;

	constructor(id: Number, name: String, createdOn: Date, fl: Boolean) {
		this.id = id
		this.name = name
		this.createdOn = createdOn
		this.fl = fl
	}

}