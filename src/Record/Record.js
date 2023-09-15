export class Record {

    datetime; // Date and time of the record
    hacksExecuted; // Hacks executed on the day of the record
    metricsAnswers; // Answers of the Metrics of the Research

    constructor(hacksExecuted, metricsAnswers) {
        this.datetime = new Date()
        this.hacksExecuted = hacksExecuted;
        this.metricsAnswers = metricsAnswers;
    }

}