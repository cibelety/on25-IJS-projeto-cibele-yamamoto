/*
CAFÉ SALGADO - Consumir um café da manhã salgado
ENTRADA VEGGIE- Adicionar uma entrada de vegetal em uma refeição por dia
VINAGRE - 1 colher de sopa de vinagre antes da refeição do dia mais alta em glicose
MOVIMENTE-SE - Se comer, se movimente
*/

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