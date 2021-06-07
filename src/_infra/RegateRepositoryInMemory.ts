import Regate from "../domain/Regate";
import RegateRepository from "../domain/RegateRepository";

export default class RegateRepositoryInMemory implements RegateRepository {
    private _regates : Map<string, Regate>;

    constructor() {
        this._regates = new Map();
    }

    sauve(regate: Regate): Promise<"SAUVEGARDE_REALISEE"> {
        const savedRegate = this._regates.get(regate.id);
        if (savedRegate) {
            this._regates.delete(regate.id)
        } 
        this._regates.set(regate.id, regate);
        return Promise.resolve("SAUVEGARDE_REALISEE");
    }

    chargerRegateParId(id: string): Promise<Regate | undefined> {
        return Promise.resolve(this._regates.get(id));
    }
    
}