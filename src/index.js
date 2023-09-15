import {Hack} from './Hack/Hack.js';
import {Metric} from './Metric/Metric.js';
import {Research} from './Research/Research.js';
import {Record} from './Record/Record.js';

const hack1 = new Hack("Café da manhã salgado", "Consumir um café da manhã com poucos carboidratos e acúcares.");
const hack2 = new Hack("Entrada Veggie", "Adicionar uma entrada de vegetal em uma refeição por dia.");
const hack3 = new Hack("Vinagre", "Consuma uma colher de sopa de vinagre antes da refeição do dia mais alta em glicose.");
const hack4 = new Hack("Movimente-se", "Movimente-se por no mínimo 10min após refeição para reduzir o pico glicêmico.");

const metric1 = new Metric("Geral", "Em geral, como você se sentiu hoje?", "1-5");
const metric2 = new Metric("Cravings", "O quão forte foram os seus anseios por comida (cravings)?", "1-5");
const metric3 = new Metric("Energia", "O quanto de energia você teve?", "1-5");

const research1 = new Research("Controle Glicemia", "Monitorar efeito de ações que podem ajudar a reduzir picos glicêmicos.", Hack.listOfHacks, Metric.listOfMetrics);

console.log("=== Lista de Hacks ===")
console.log(Hack.listOfHacks);
console.log("=== Lista de Métricas ===")
console.log(Metric.listOfMetrics);
console.log("=== Lista de Pesquisas ===")
console.log(Research.listOfResearch);

console.log("=== Selecionando a Pesquisa a ser usada (índice 0) ===")
const myResearch = Research.listOfResearch[0];
console.log(myResearch);

console.log("=== Criando Registro 1 ===")
const hacksExecuted1 = ["Entrada Veggie"];
const metricsAnswers1 = [
    {"Geral": 3 },
    {"Cravings": 3 },
    {"Energia": 4}
];
const record1 = new Record(hacksExecuted1, metricsAnswers1);
console.log(record1)

console.log("=== Criando Registro 2 ===")
const hacksExecuted2 = ["Café da manhã salgado", "Movimente-se"];
const metricsAnswers2 = [
    {"Geral": 4 },
    {"Cravings": 2 },
    {"Energia": 5}
];
const record2 = new Record(hacksExecuted2, metricsAnswers2);
console.log(record2)

console.log("=== Registros Adicionandos na Pesquisa ===")
myResearch.addRecord(record1);
myResearch.addRecord(record2);

console.log(myResearch.records);

