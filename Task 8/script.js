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