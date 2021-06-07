import Regate from "./Regate";

export default interface RegateRepository {
    sauve(regate : Regate) : Promise<"SAUVEGARDE_REALISEE">;

    chargerRegateParId(id : string) : Promise<Regate | undefined>;

}