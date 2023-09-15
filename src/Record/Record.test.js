import {Record} from './Record.js';

describe("Record Class", () => {
    it("should successfully create a new Record", () => {
        const hacksExecuted = ["Hack 1", "Hack 2"];
        const metricsAnswers = [
            {"Metric 1": 3},
            {"Metric 2": 4},
            {"Metric 3": 5}
        ];        
        const record1 = new Record(hacksExecuted, metricsAnswers);

        expect(record1).toBeInstanceOf(Record);
        expect(record1.hacksExecuted[0]).toBe("Hack 1");
        expect(record1.hacksExecuted[1]).toBe("Hack 2");
        expect(record1.metricsAnswers[0]).toMatchObject({"Metric 1": 3});
        expect(record1.metricsAnswers[1]).toMatchObject({"Metric 2": 4});
        expect(record1.metricsAnswers[2]).toMatchObject({"Metric 3": 5});
    });

});