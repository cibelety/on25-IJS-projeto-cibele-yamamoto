import {Hack} from './Hack/Hack.js';
import {Metric} from './Metric/Metric.js';
import {Research} from './Research/Research.js';
import {Record} from './Record/Record.js';

const hack1 = new Hack("hack1", "descHack1");
const hack2 = new Hack("hack2", "descHack2");
const hack3 = new Hack("hack3", "descHack3");

const metric1 = new Metric("metric1", "descMetric1", "respType1");
const metric2 = new Metric("metric2", "descMetric2", "respType2");
const metric3 = new Metric("metric3", "descMetric3", "respType3");

const research1 = new Research("research1", "descResearch1", Hack.listOfHacks, Metric.listOfMetrics);

console.log("=== Lista de Hacks ===")
console.log(Hack.listOfHacks);
console.log("=== Lista de Métricas ===")
console.log(Metric.listOfMetrics);
console.log("=== Lista de Pesquisas ===")
console.log(Research.listOfResearch);

console.log("=== Selecionando a Pesquisa a ser usada (índice 0) ===")
const myResearch = Research.listOfResearch[0];
console.log(myResearch);

console.log("=== Criando Registros na Pesquisa ===")
const hacksExecuted1 = ["1", "3"];
const metricsAnswers1 = ["222", "444"];

const record1 = new Record(hacksExecuted1, metricsAnswers1);
myResearch.addRecord(record1);

const hacksExecuted2 = ["2", "4"];
const metricsAnswers2 = ["111", "333"];
const record2 = new Record(hacksExecuted2, metricsAnswers2);
myResearch.addRecord(record2);

console.log(myResearch.records);

