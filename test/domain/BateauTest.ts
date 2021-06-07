import chai from "chai";
const expect = chai.expect;
import Bateau from "../../src/domain/Bateau";
import Cap from "../../src/domain/Cap";
import PointGPS from "../../src/domain/PointGPS";


describe("Bateau creation", () => {
    it("should create Bateau", () => {
        const bateau = new Bateau();
        expect(bateau.cap.au).eql("N");
        expect(bateau.position).to.be.undefined;
    }),
    it("should compare 2 Bateau", () => {
        const bateau1 = new Bateau();
        const bateau2 = new Bateau();
        
    }),
    it("should changeCap of Bateau", () => {
        const bateau = new Bateau();
        bateau.changerDeCap(new Cap("S"));
        expect(bateau.cap.au).eql("S");
    }),
    it("should change position of Bateau", () => {
        const SAINT_MALO = new PointGPS(48.65426980183052, -2.0274826120074674);
        const bateau = new Bateau();
        bateau.definirPosition(new PointGPS(48.65426980183052, -2.0274826120074674));
        expect(bateau.position).to.be.not.undefined;
        if (bateau.position) {
            expect(bateau.position.equals(SAINT_MALO)).to.be.true;
        }
    })
    
})