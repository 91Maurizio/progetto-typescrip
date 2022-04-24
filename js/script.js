"use strict";
class firstUser {
    constructor(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costo = 0.20;
        this.carica = this.carica - (costo * minutiDurata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getnumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let smartphone1 = new firstUser(20, 50);
console.log("Numero delle chiamate" + smartphone1.getnumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getnumeroChiamate());
console.log("Dopo l'azzeramento delle chiamate:" + smartphone1.azzeraChiamate());
class secondUser {
    constructor(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costo = 0.20;
        this.carica = this.carica - (costo * minutiDurata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getnumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let smartphone2 = new secondUser(45, 89);
console.log("Numero delle chiamate" + smartphone1.getnumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getnumeroChiamate());
console.log("Dopo l'azzeramento delle chiamate:" + smartphone1.azzeraChiamate());
class thirdUser {
    constructor(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        let costo = 0.20;
        this.carica = this.carica - (costo * minutiDurata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getnumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let smartphone3 = new thirdUser(35, 80);
console.log("Numero delle chiamate" + smartphone1.getnumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getnumeroChiamate());
console.log("Dopo l'azzeramento delle chiamate:" + smartphone1.azzeraChiamate());
