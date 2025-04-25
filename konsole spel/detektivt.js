import readline from "read-console-input"

console.log("Du är en detektiv som utreder försvinnandet av en värdefull diamant. Tre misstänkta är: \n1. Butlern \n2. Husets ägare \n3. Gästen\n");

function startaSpel() {
    console.log("\nVem vill du förhöra?");
    console.log("1. Butlern");
    console.log("2. Husets ägare");
    console.log("3. Gästen");

    let input = readline("Skriv 1, 2 eller 3 för att välja: ")
    if (input === '1') {
        console.log("Butlern säger att han såg ägaren nära diamanten innan den försvann.");
        avslutaSpel();
    } else if (input === '2') {
        console.log("Husets ägare säger att gästen var intresserad av diamanten.");
        avslutaSpel();
    } else if (input === '3') {
        console.log("Gästen påstår att butlern har en nyckel till kassaskåpet.");
        avslutaSpel();
    } else {
        console.log("Ogiltigt val. Försök igen.");
        startaSpel();
    }
}


function avslutaSpel() {
    let input2 = readline("\nVill du spela igen? (j/n): ")
    if (input2.toLowerCase() === 'j') {
        startaSpel();
    } else {
        console.log("Tack för att du spelade!");
        rl.close();
    }
}



startaSpel();
