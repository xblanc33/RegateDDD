import chai from "chai";
import { receiveMessageOnPort } from "worker_threads";
const expect = chai.expect;
import Cap from "../../src/domain/Cap";
import PointGPS from "../../src/domain/PointGPS";
import Regate from "../../src/domain/Regate";


describe("Regate creation", () => {
    it("should create Regate", () => {
        const SAINT_MALO = new PointGPS(48.65426980183052, -2.0274826120074674);
        const CHERBOURG = new PointGPS(49.661541913570666, -1.60155142579818);
        const regate = new Regate("maRegate", SAINT_MALO, CHERBOURG);
        expect(regate.estOuverteAuxInscriptions).to.be.true;
        expect(regate.aDemarre).to.be.false;
        expect(regate.id).equal("maRegate");
    }),
    it("should register a new boat", () => {
        const SAINT_MALO = new PointGPS(48.65426980183052, -2.0274826120074674);
        const CHERBOURG = new PointGPS(49.661541913570666, -1.60155142579818);
        const regate = new Regate("maRegate", SAINT_MALO, CHERBOURG);
        const boatId = regate.inscrireNouveauBateau();
        expect(boatId).not.equal("INSCRIPTIONS_CLOSES");
    }),
    it("should not register a new boat when regata is closed", () => {
        const SAINT_MALO = new PointGPS(48.65426980183052, -2.0274826120074674);
        const CHERBOURG = new PointGPS(49.661541913570666, -1.60155142579818);
        const regate = new Regate("maRegate", SAINT_MALO, CHERBOURG);
        regate.cloreLesInscriptions();
        const boatId = regate.inscrireNouveauBateau();
        expect(boatId).equal("INSCRIPTIONS_CLOSES");
    }),
    it("should move a boat when regata is closed", () => {
        const SAINT_MALO = new PointGPS(48.65426980183052, -2.0274826120074674);
        const CHERBOURG = new PointGPS(49.661541913570666, -1.60155142579818);
        const regate = new Regate("maRegate", SAINT_MALO, CHERBOURG);
        const boatId = regate.inscrireNouveauBateau();
        regate.cloreLesInscriptions();

        const changementCap = regate.changerCapDuBateau(boatId, new Cap("S"));
        expect(changementCap).equal("CAP_CHANGE");
    })

})