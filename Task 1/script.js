/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let converter = document.querySelector(`form`).addEventListener(`click`, e => {
    e.preventDefault();
    let isvestis = document.querySelector(`#search`).value;
    document.querySelector(`#output`).innerHTML = `
    Svoris kg: ${isvestis} <br>
    Svoris svarais: ${isvestis * 2.2046} <br>
    Svoris gramais: ${isvestis * 0.001} <br>
    Svoris unicijomis: ${isvestis * 35.274}
    `
});