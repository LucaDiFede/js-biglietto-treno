const Km = parseInt(prompt("Kilometri?"));
console.log(Km);

const Età = parseInt(prompt("Età?"));
console.log(Età);

const Prezzo = Km * 0.21;
console.log(Prezzo);

let Totale = Prezzo;
console.log(Totale);

if (Età < 18) {
    const Min = Prezzo * 0.20;
    Totale = Prezzo - Min;
}

else if (Età > 65) {
    const Mag = Prezzo * 0.40;
    Totale = Prezzo - Mag;
}

document.getElementById("Risultato").innerHTML = "Prezzo:" + Totale.toFixed(2) + "€";