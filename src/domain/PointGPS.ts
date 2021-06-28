export default class PointGPS {
    private _latitude : number; //degrés décimaux
    private _longitude : number; //degrés décimaux

    constructor(latitude : number, longitude : number) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    get latitude() : number {
        return this._latitude;
    }

    get longitude() : number {
        return this._longitude;
    }

    equals(other : any) : boolean {
        return other instanceof PointGPS && this._latitude === other.latitude && this._longitude === other.longitude;
    }
}