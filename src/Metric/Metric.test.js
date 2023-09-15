import {Metric} from './Metric.js';

describe("Metric Class", () => {
    it("should successfully create a new Metric", () => {
        const metric1 = new Metric("Metric 1", "Desc Metric 1", "Tipo de Resposta 1");

        expect(metric1).toBeInstanceOf(Metric);
        expect(metric1.title).toBe("Metric 1");
        expect(metric1.description).toBe("Desc Metric 1");
        expect(metric1.responseType).toBe("Tipo de Resposta 1");
    });

});