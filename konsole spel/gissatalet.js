import readline from "read-console-input";

console.log("Välkommen till gissningsspelet!");

let randomNumber = Math.floor(Math.random() * 101);
while (true) {
    let input = readline("skriva ett nummer ")


    if (input > randomNumber) {
        console.log("nummer e förhögt ")


    } else if (input < randomNumber) {
        console.log("nummer e förlog")

    } else if (input == randomNumber) {
        console.log("du har gissat rätt ")
        break
    } else if (input < 1 || input > 100) {
        console.log('ogiltigt tal försök igen')

    }
}