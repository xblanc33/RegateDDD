export default class Cap {
    private _au : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO";

    constructor(au : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO") {
        this._au = au;
    }

    get au() : "N" | "NE" | "E" | "SE" | "S" | "SO" | "O" | "NO" {
        return this._au;
    }

    equals(cap : Cap) : boolean {
        return this._au === cap.au;
    }
}