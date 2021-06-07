import chai from "chai";
const expect = chai.expect;
import Cap from "../../src/domain/Cap";


describe("Cap creation", () => {
    it("should create CAP", () => {
        const cap1 = new Cap("NO");
        expect(cap1.au).eql("NO");
    }),
    it("should compare two Cap", () => {
        const cap1 = new Cap("NO");
        const cap2 = new Cap("NO");
        expect(cap1.equals(cap2)).to.be.true;

        const cap3 = new Cap("O");
        expect(cap2.equals(cap3)).to.be.false;
    })
})