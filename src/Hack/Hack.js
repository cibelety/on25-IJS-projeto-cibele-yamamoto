export class Hack {
    
    static listOfHacks = []; // Lista com os Hacks cadastrados
    title; // Título do Hack
    description; // Descrição do Hack


    constructor(title, description) {
        this.title = title;
        this.description = description;

        // Adiciona o Hack contruído na lista dos Hacks cadastrados
        this.#addHack(this);
    }

    #addHack(hack) {
        Hack.listOfHacks.push(hack);
    }

}