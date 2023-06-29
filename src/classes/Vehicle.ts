import { Delivery } from "./Delivery";

export class Vehicle extends Delivery {
    private _model: string;
    private _cc: string;
    private _matriculation: string;

    constructor(id: number, model: string, cc: string, matriculation: string) {
        super(id);
        this._model = model;
        this._cc = cc;
        this._matriculation = matriculation;
    }

    public get model() {
        return this._model;
    }
    
    public get cc() {
        return this._cc;
    }

    public get matriculation() {
        return this._matriculation;
    }
}