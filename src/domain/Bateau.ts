import Cap from "./Cap";
import PointGPS from "./PointGPS";

export default class Bateau {
    private _cap : Cap;
    private _position : PointGPS | undefined;

    constructor() {
        this._cap = new Cap("N");
    }

    get cap() {
        return this._cap;
    }

    get position() {
        return this._position;
    }

    changerDeCap(nouveauCap : Cap) {
        this._cap = nouveauCap;
    }

    definirPosition(nouvellePosition : PointGPS) {
        this._position = nouvellePosition;
    }

}