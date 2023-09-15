import {Hack} from './Hack.js';

describe("Hack Class", () => {
    it("should successfully create a new Hack", () => {
        const hack1 = new Hack("Hack 1", "Desc Hack 1");

        expect(hack1).toBeInstanceOf(Hack);
        expect(hack1.title).toBe("Hack 1");
        expect(hack1.description).toBe("Desc Hack 1");
    });


});