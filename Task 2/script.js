/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let skaiciuoti = 0;
        const btn = document.getElementById("btn__element");
        const disp = document.getElementById("btn__state");

        btn.onclick = function () {
            skaiciuoti++;
            disp.innerHTML = skaiciuoti;
        };