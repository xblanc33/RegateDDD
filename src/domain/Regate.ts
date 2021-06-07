import Bateau from "./Bateau";
import Cap from "./Cap";
import PointGPS from "./PointGPS";

export default class Regate {
    private _id : string;
    private _bateaux : Map<string, Bateau>;
    private _estOuverteAuxInscriptions : boolean;
    private _aDemarre : boolean;
    private _depart : PointGPS;
    private _arrive : PointGPS;

    constructor(id : string, depart : PointGPS, arrive : PointGPS) {
        this._id = id;
        this._depart = depart;
        this._arrive = arrive
        this._bateaux = new Map();
        this._estOuverteAuxInscriptions = true;
        this._aDemarre = false;
    }

    get id() : string {
        return this._id;
    }

    get estOuverteAuxInscriptions() : boolean {
        return this._estOuverteAuxInscriptions;
    }

    get aDemarre() : boolean {
        return this._aDemarre;
    }

    cloreLesInscriptions() {
        this._estOuverteAuxInscriptions = false;
    }

    demarrer() : "INSCRIPTION_ENCORE_OUVERTE" | "REGATE_A_DEMARRE" {
        if (!this._estOuverteAuxInscriptions) {
            this._aDemarre = true;
            return "REGATE_A_DEMARRE";
        } else {
            return "INSCRIPTION_ENCORE_OUVERTE"
        }
    }

    inscrireNouveauBateau() : string | "INSCRIPTIONS_CLOSES" {
        if (this._estOuverteAuxInscriptions) {
            const idDuBateau = this._id + this._bateaux.size;
            const nouveauBateau = new Bateau(idDuBateau);
            nouveauBateau.definirPosition(this._depart);
            this._bateaux.set(idDuBateau, nouveauBateau);
            return idDuBateau;
        } else {
            return "INSCRIPTIONS_CLOSES";
        }
    }

    changerCapDuBateau(idDuBateau : string, nouveauCap : Cap) : "ID_INCONNU" | "CAP_CHANGE" {
        const bateau = this._bateaux.get(idDuBateau);
        if (bateau) {
            bateau.changerDeCap(nouveauCap);
            return "CAP_CHANGE";
        } else {
            return "ID_INCONNU";
        }
    }

}