enum DayWeek{DOMINGO=1, SEGUNDA,TERCA,QUARTA,QUINTA,SEXT,SABADO};

let dia:DayWeek = DayWeek.TERCA;

console.log(dia);

console.log(DayWeek[1]);
console.log(DayWeek[7]);

enum TAXA{ICMS=18,IPI=7,PIS=10,COFINS=5}

console.log("Taxa de ICMS : ", 10000*TAXA.ICMS/100);
console.log("Taxa de IPI : ", 10000*TAXA.IPI/100);
console.log("Taxa de PIS : ", 10000*TAXA.PIS/100);
console.log("Taxa de COFINS : ", 10000*TAXA.COFINS/100);

// Incrementa "1" a partir da numeração informada
enum CONTAGEM{MIL=1000, MIL_HUM, MIL_DOIS, MIL_TRES, DOISMIL=2000, DOISMIL_HUM};

console.log(CONTAGEM.MIL);
console.log(CONTAGEM.MIL_HUM);
console.log(CONTAGEM.MIL_DOIS);
console.log(CONTAGEM.MIL_TRES);
console.log(CONTAGEM.DOISMIL);
console.log(CONTAGEM.DOISMIL_HUM);

enum PONTOS{CHUTE_CORPO=1,SOCO_CORPO=1,CHUTE_CABECA=15,SOCO_CABECA=3};
// Caso exista repetido, apresenta apenas o último (CUIDADO !)
console.log(PONTOS[1]);
console.log(PONTOS[3]);
console.log(PONTOS[15]);