export default class Cap {
    private _au : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO";

    constructor(au : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO") {
        this._au = au;
    }

    get au() : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO" {
        return this._au;
    }

    set au(nouvAu : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO") {
        this._au = nouvAu;
    }

    equals(other : any) : boolean {
        return other instanceof Cap && this._au === other.au;
    }
}