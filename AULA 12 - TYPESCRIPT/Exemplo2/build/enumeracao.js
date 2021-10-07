"use strict";
var DayWeek;
(function (DayWeek) {
    DayWeek[DayWeek["DOMINGO"] = 1] = "DOMINGO";
    DayWeek[DayWeek["SEGUNDA"] = 2] = "SEGUNDA";
    DayWeek[DayWeek["TERCA"] = 3] = "TERCA";
    DayWeek[DayWeek["QUARTA"] = 4] = "QUARTA";
    DayWeek[DayWeek["QUINTA"] = 5] = "QUINTA";
    DayWeek[DayWeek["SEXT"] = 6] = "SEXT";
    DayWeek[DayWeek["SABADO"] = 7] = "SABADO";
})(DayWeek || (DayWeek = {}));
;
let dia = DayWeek.TERCA;
console.log(dia);
console.log(DayWeek[1]);
console.log(DayWeek[7]);
var TAXA;
(function (TAXA) {
    TAXA[TAXA["ICMS"] = 18] = "ICMS";
    TAXA[TAXA["IPI"] = 7] = "IPI";
    TAXA[TAXA["PIS"] = 10] = "PIS";
    TAXA[TAXA["COFINS"] = 5] = "COFINS";
})(TAXA || (TAXA = {}));
console.log("Taxa de ICMS : ", 10000 * TAXA.ICMS / 100);
console.log("Taxa de IPI : ", 10000 * TAXA.IPI / 100);
console.log("Taxa de PIS : ", 10000 * TAXA.PIS / 100);
console.log("Taxa de COFINS : ", 10000 * TAXA.COFINS / 100);
// Incrementa "1" a partir da numeração informada
var CONTAGEM;
(function (CONTAGEM) {
    CONTAGEM[CONTAGEM["MIL"] = 1000] = "MIL";
    CONTAGEM[CONTAGEM["MIL_HUM"] = 1001] = "MIL_HUM";
    CONTAGEM[CONTAGEM["MIL_DOIS"] = 1002] = "MIL_DOIS";
    CONTAGEM[CONTAGEM["MIL_TRES"] = 1003] = "MIL_TRES";
    CONTAGEM[CONTAGEM["DOISMIL"] = 2000] = "DOISMIL";
    CONTAGEM[CONTAGEM["DOISMIL_HUM"] = 2001] = "DOISMIL_HUM";
})(CONTAGEM || (CONTAGEM = {}));
;
console.log(CONTAGEM.MIL);
console.log(CONTAGEM.MIL_HUM);
console.log(CONTAGEM.MIL_DOIS);
console.log(CONTAGEM.MIL_TRES);
console.log(CONTAGEM.DOISMIL);
console.log(CONTAGEM.DOISMIL_HUM);
var PONTOS;
(function (PONTOS) {
    PONTOS[PONTOS["CHUTE_CORPO"] = 1] = "CHUTE_CORPO";
    PONTOS[PONTOS["SOCO_CORPO"] = 1] = "SOCO_CORPO";
    PONTOS[PONTOS["CHUTE_CABECA"] = 15] = "CHUTE_CABECA";
    PONTOS[PONTOS["SOCO_CABECA"] = 3] = "SOCO_CABECA";
})(PONTOS || (PONTOS = {}));
;
// Caso exista repetido, apresenta apenas o último (CUIDADO !)
console.log(PONTOS[1]);
console.log(PONTOS[3]);
console.log(PONTOS[15]);
