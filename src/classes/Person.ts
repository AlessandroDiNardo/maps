import { Delivery } from "./Delivery";

export class Person extends Delivery{
    private _name: string;
    private _surname: string;
    private _birthdate: string;

    constructor(id: number, name: string, surname: string, birthdate: string) {
        super(id);
        this._name = name;
        this._surname = surname;
        this._birthdate = birthdate;
    }

    public get name() {       
        return this._name;
    }
    
    public get surname() {
        return this._surname;
    }

    public get birthdate() {
        return this._birthdate;
    }
}