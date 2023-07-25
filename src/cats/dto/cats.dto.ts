
export class CatsDto {
	
	private _id: Number;
	public get id(): Number {
		return this._id;
	}
	public set id(value: Number) {
		this._id = value;
	}

	private _name: String;
	public get name(): String {
		return this._name;
	}
	public set name(value: String) {
		this._name = value;
	}

	private _createdOn: Date;
	public get createdOn(): Date {
		return this._createdOn;
	}
	public set createdOn(value: Date) {
		this._createdOn = value;
	}

	private _fl: Boolean;
	public get fl(): Boolean {
		return this._fl;
	}
	public set fl(value: Boolean) {
		this._fl = value;
	}

	constructor(id: Number, name: String, createdOn: Date, fl: Boolean) {
		this.id = id
		this.name = name
		this.createdOn = createdOn
		this.fl = fl
	}
	
}