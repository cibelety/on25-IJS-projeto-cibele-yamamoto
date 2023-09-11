export class Metric {

    static listOfMetrics = []; // Lista das métricas cadastradas
    title;
    description;
    responseType;

    constructor(title, description, responseType) {
        this.title = title;
        this.description = description;
        this.responseType = responseType;

        // Adiciona a métrica construída na lista as métricas cadastradas
        this.#addMetric(this);
    }

    #addMetric(metric) {
        Metric.listOfMetrics.push(metric);
    }

}