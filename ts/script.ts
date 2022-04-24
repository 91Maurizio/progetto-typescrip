interface Smartphone {
    carica: number;
    numeroChiamate: number;

    ricarica (carica: number, unaRicarica: number): void;
    chiamata (carica: number, minuriDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class firstUser implements Smartphone{
    public carica: number;
    public numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    public ricarica(unaRicarica: number): void{
        this.carica += unaRicarica;
    }
    public chiamata(minutiDurata: number): void {
        let costo = 0.20;
        this.carica = this.carica - (costo * minutiDurata);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

let smartphone1 = new firstUser(20, 20);
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Dopo l'azzeramento delle chiamate:" + smartphone1.azzeraChiamate());

class secondUser implements Smartphone{
    public carica: number;
    public numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    public ricarica(unaRicarica: number): void{
        this.carica += unaRicarica;
    }
    public chiamata(minutiDurata: number): void {
        let costo = 0.20;
        this.carica = this.carica - (costo * minutiDurata);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

let smartphone2 = new secondUser(30, 30);
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Dopo l'azzeramento delle chiamate:" + smartphone1.azzeraChiamate());

class thirdUser implements Smartphone{
    public carica: number;
    public numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    public ricarica(unaRicarica: number): void{
        this.carica += unaRicarica;
    }
    public chiamata(minutiDurata: number): void {
        let costo = 0.20;
        this.carica = this.carica - (costo * minutiDurata);
        this.numeroChiamate++;
    }
    public numero404(): number {
        return this.carica;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

let smartphone3 = new thirdUser(30, 30);
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Dopo l'azzeramento delle chiamate:" + smartphone1.azzeraChiamate());