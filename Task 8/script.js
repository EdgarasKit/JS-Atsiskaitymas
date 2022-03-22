/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum = (a, b) => {
        let atsakymas1 = a + b;
        return atsakymas1;
    };

    subtraction = (a, b) => {
        let atsakymas2 = a - b;
        return atsakymas2;
    };
    multiplication = (a, b) => {
        let atsakymas3 = a * b;
        return atsakymas3;
    };
    division = (a, b) => {
        let atsakymas4 = a / b;
        return atsakymas4;
    };
}

let skaiciuoti = new Calculator();
console.log(`sudeties veiksmas 10 + 2 = ${skaiciuoti.sum(10, 2)}`);
console.log(`atimties veiksmas 10 - 2 = ${skaiciuoti.subtraction(10 ,2)}`);
console.log(`daugybos veiksmas 10 * 2 = ${skaiciuoti.multiplication(10, 2)}`);
console.log(`dalybos veiksmas 10 / 2 = ${skaiciuoti.division(10, 2)}`);