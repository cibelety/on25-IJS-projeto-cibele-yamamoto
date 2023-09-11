export class Research {

    static listOfResearch = [];
    name;
    description;
    hacks; // List de hacks da pesquisa
    metrics; // Lista de metricas da pesquisa
    records; // Lista de registros da pesquisa

    constructor(name, description, hacks, metrics) {
        this.name = name;
        this.description = description;
        this.hacks = hacks;
        this.metrics = metrics;
        this.records = [];

        // Adiciona a Research contruída na lista de Research cadastradas
        this.#addResearch(this);
    }

    #addResearch(research) {
        Research.listOfResearch.push(research);
    }

    addRecord(record) {
        this.records.push(record);
    }

}