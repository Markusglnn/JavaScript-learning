// ============================================
// JavaScript Übungen für Anfänger bis Fortgeschrittene
// ============================================

// AUFGABE 1: Einfache Variablen und Ausgabe
// Erstelle 3 Variablen (Name, Alter, Stadt) und gib sie in der Konsole aus
console.log("=== AUFGABE 1: Variablen ===");
let names = "Max"; 
let alter = 25;
let stadt = "Berlin";
console.log("Name: ", names);
console.log("Alter: ", alter);
console.log("Stadt: ", stadt);
// Deine Lösung hier:
// const name = ...


// AUFGABE 2: Funktionen
// Schreibe eine Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt
console.log("\n=== AUFGABE 2: Funktionen ===");

// Deine Lösung hier:
// function addiere(a, b) { ... }
let a = 5;
let b = 4;
function addiere(a, b) {
    return a + b;
}
console.log("Ergebnis: ", addiere(a, b));

// AUFGABE 3: Arrays und Schleifen
// Erstelle ein Array mit 5 Zahlen und summiere alle Zahlen auf
console.log("\n=== AUFGABE 3: Arrays und Schleifen ===");
const zahlen = [10, 20, 30, 40, 50];
let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
    summe += zahlen[i];
}
console.log("Summe: ", summe);
// Deine Lösung hier:
// const zahlen = [10, 20, 30, 40, 50];
// let summe = 0;


// AUFGABE 4: Klassen und Vererbung (ES6)
// Erstelle eine abstrakte Klasse "Möbel" und lasse verschiedene Möbeltypen davon erben
console.log("\n=== AUFGABE 4: Klassen und Vererbung ===");

// Abstrakte Basis-Klasse
class Möbel {
    constructor(name, material, preis) {
        this.name = name;
        this.material = material;
        this.preis = preis;
    }

    info() {
        return `${this.name} aus ${this.material} - ${this.preis}€`;
    }
}

// Unterklasse: Tisch
class Tisch extends Möbel {
    constructor(name, material, preis, höhe, form) {
        super(name, material, preis);
        this.höhe = höhe;
        this.form = form; // "rund", "quadratisch", "rechteckig"
    }

    info() {
        return `${super.info()} | Tischform: ${this.form}, Höhe: ${this.höhe}cm`;
    }
}



// Unterklasse: Stuhl
class Stuhl extends Möbel {
    constructor(name, material, preis, rückenlehne) {
        super(name, material, preis);
        this.rückenlehne = rückenlehne; // true/false
    }

    info() {
        return `${super.info()} | Rückenlehne: ${this.rückenlehne ? "Ja" : "Nein"}`;
    }
}

// Unterklasse: Schrank
class Schrank extends Möbel {
    constructor(name, material, preis, breite, höhe, tiefe) {
        super(name, material, preis);
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
    }

    volumen() {
        return this.breite * this.höhe * this.tiefe;
    }

    info() {
        return `${super.info()} | Maße: ${this.breite}x${this.höhe}x${this.tiefe}cm | Volumen: ${this.volumen()}cm³`;
    }
}

// Beispiele erstellen und ausgeben
const wohnzimmertisch = new Tisch("Wohnzimmertisch", "Eiche", 299, 45, "rechteckig");
const küchenstuhl = new Stuhl("Küchenstuhl", "Kunststoff", 45, true);
const wohnzimmerschrank = new Schrank("Wohnzimmerschrank", "Buche", 599, 120, 200, 40);

console.log(wohnzimmertisch.info());
console.log(küchenstuhl.info());
console.log(wohnzimmerschrank.info());

// AUFGABE 5: Räume als Klassen
// Erstelle eine Klasse "Raum" die Möbel speichern kann
console.log("\n=== AUFGABE 5: Räume mit Möbeln ===");

// Deine Lösung hier:
// class Raum {
//     constructor(name, größe) {
//         this.name = name;
//         this.größe = größe;
//         this.möbel = [];
//     }
//
//     möbelHinzufügen(möbel) { ... }
//     möbelAuflisten() { ... }
// }


// AUFGABE 6: String-Methoden und Budgetberechnung
// Berechne das Gesamtbudget für alle Möbel eines Raums
console.log("\n=== AUFGABE 6: Budget-Berechnung ===");

// Deine Lösung hier:
// Erstelle ein Array mit verschiedenen Möbeln
// const möbelListe = [wohnzimmertisch, küchenstuhl, wohnzimmerschrank];
// Berechne die Gesamtkosten mit reduce()
// const gesamtkosten = ...
// Gib das Ergebnis formatiert aus


// AUFGABE 7: Filter und Map
// Filtere teure Möbel (>300€) und verdoppele die Preise für einen Sale
console.log("\n=== AUFGABE 7: Filter und Map (Sale-Preise) ===");

// Deine Lösung hier:
// const möbel = [wohnzimmertisch, küchenstuhl, wohnzimmerschrank];
// const teuer = möbel.filter(m => m.preis > 300);
// const salePreise = möbel.map(m => ({ ...m, salePreis: m.preis * 0.8 }));


// AUFGABE 8: ForEach
// Gehe durch verschiedene Räume und gib alle Möbel mit ihren Infos aus
console.log("\n=== AUFGABE 8: ForEach (Raum-Inventar) ===");

// Deine Lösung hier:
// const räume = [wohnzimmer, küche, schlafzimmer];
// räume.forEach(raum => {
//     console.log(`Raum: ${raum.name}`);
//     raum.möbel.forEach(möbel => console.log(`  - ${möbel.info()}`));
// });


// AUFGABE 9: Dekonstruktion
// Dekonstruiere Möbel-Properties und verwende sie
console.log("\n=== AUFGABE 9: Dekonstruktion ===");

// Deine Lösung hier:
// const { name, material, preis } = wohnzimmertisch;
// console.log(`Ich kaufe ${name} aus ${material} für ${preis}€`);


// AUFGABE 10: Pfeilfunktionen (Arrow Functions)
// Schreibe Pfeilfunktionen um Möbel zu filtern und zu sortieren
console.log("\n=== AUFGABE 10: Pfeilfunktionen ===");

// Deine Lösung hier:
// const getMöbelNachMaterial = (möbel, material) => möbel.filter(m => m.material === material);
// const sortierNachPreis = (möbel) => möbel.sort((a, b) => a.preis - b.preis);


// BONUS AUFGABE: Vollständige Haushaltsapp
// Schreibe eine komplette App mit:
// - Mehrere Räume (Wohnzimmer, Küche, Schlafzimmer)
// - Jeder Raum hat Möbel
// - Funktionen zum Möbel hinzufügen/entfernen
// - Budgetberechnung pro Raum und gesamt
console.log("\n=== BONUS: Haushaltsapp ===");

// Hinweis:
// 1. Erstelle die Klasse "Raum" mit Methoden für Möbel-Management
// 2. Erstelle mehrere Räume
// 3. Füge die vordefinierten Möbel zu den Räumen hinzu
// 4. Schreibe Funktionen für:
//    - getGesamtbudget()
//    - getBudgetProRaum()
//    - getSortedMöbel()
//    - teuerstesMöbel()
