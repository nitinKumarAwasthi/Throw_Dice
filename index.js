
let mano = 1;

let punto = 0;
function clickme() {


    // for (let i = 1; i <= 10; i++) {
    estraiunnumero().then(function (numeri) {
        if (numeri[0] == numeri[1]) {
            punto += 1;

        }

        let score = document.getElementById("score").innerText = `hai fatto ${punto} punti`;
        mano++;
    }).catch(function (err) {
        alert(err);
    });

    if (mano == 10) {
        document.getElementById("btn").disabled = true;
    }
}
// }



function estraiunnumero() {

    return new Promise(function (resolve, reject) {


        let numeroUtente = parseInt(prompt("Inserisci un numero: "));

        console.log(numeroUtente);

        // setTimeout(() => {

        let numero_estratto = Math.floor(Math.random() * (7 - 1) + 1);
        console.log(numero_estratto);

        if ((!isNaN(numeroUtente)) && (numeroUtente > 0 && numeroUtente < 7)) {
            resolve([numeroUtente, numero_estratto]);
            document.getElementById("uten").innerText += ` ${numeroUtente}`;
            document.getElementById("macc").innerText += ` ${numero_estratto}`;
        } 
        else if ((!isNaN(numeroUtente)) && (numeroUtente<1 || numeroUtente>7)){
            reject("Bisogna inserire numero tra 1 e 6");
    }
        else {
            reject("hai messo una stringa la posto di un numero");
        }

        // }, 5000);


    });


}

