import {Research} from './Research.js';
import {Hack} from '../Hack/Hack.js';
import {Metric} from '../Metric/Metric.js';
import {Record} from '../Record/Record.js';

describe("Research Class", () => {
    let research1;
    let hack1;
    let hack2;
    let metric1;
    let metric2;

    beforeAll(() => {
        hack1 = new Hack("Hack 1", "Desc Hack 1");
        hack2 = new Hack("Hack 2", "Desc Hack 2");
        const hacks = [hack1, hack2];

        metric1 = new Metric("Metric 1", "Desc Metric 1", "Tipo Resp 1");
        metric2 = new Metric("Metric 2", "Desc Metric 2", "Tipo Resp 2");
        const metrics = [metric1, metric2];

        research1 = new Research("Research 1", "Desc Research 1", hacks, metrics);
    });

    it("should have successfully created a new Research", () => {
        expect(research1).toBeInstanceOf(Research);
        expect(research1.name).toBe("Research 1");
        expect(research1.description).toBe("Desc Research 1");
        expect(research1.hacks[0]).toBe(hack1);
        expect(research1.hacks[1]).toBe(hack2);
        expect(research1.metrics[0]).toBe(metric1);
        expect(research1.metrics[1]).toBe(metric2);
    });

    it("should successfully add a record to the research", () => {
        const hacksExecuted = ["Hack 1", "Hack 2"];
        const metricsAnswers = [
            {"Metric 1": 3},
            {"Metric 2": 4},
            {"Metric 3": 5}
        ];        
        const record1 = new Record(hacksExecuted, metricsAnswers);

        research1.addRecord(record1);
        expect(research1.records[0]).toBeInstanceOf(Record);
        expect(research1.records[0]).toBe(record1)

    });


});