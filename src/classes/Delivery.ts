export class Delivery {

    protected _id;

    constructor( id: number) {

        this._id = id;
    }

    
    protected get id() {
        return this._id;
    }

    public printId() {

        console.log('mio id:', this.id);
    }
}