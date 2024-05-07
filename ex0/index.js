
// Tipuri de date:
// Date primitive
// 1. Nedefinit (undefined): undefined
// 2. Nula (object): null
// 3. Boolean (boolean): true / false
// 4. Numere (number): 123
//      negative
//      reale 123.5
//      stiintifice: 1.3e+4 => 13000
//      stiintifice: 1.2e-3 => 0.0012
//      BigInt (bigint) -> se creeaza sub forma BigInt()
//      Infinity, -Infinity
//      NaN (not a number)
// 5. String (string): "", "1", "ab", "ana are mere", "string cu \nrand nou"
// 6. Obiect (object): {}, {"cheie": "valoare"}
// 7. Liste (object) [], [123, "ana", true]
// Date obiectuale *
// 8. obiecte instantiabile (obiect): Date, orice tip costumizabil, BigInt

// Tipul unei valori se afla cu comanda de typeof

// Variabile:
//  1. const => nu se modifica
//  2. let => pot sa se modifice
//  3. var => deprecated => depreciat, nu se mai foloseste. 

// Operatori aritmetici => rezultatul este un numar
//  * (inmultire)
//  / (impartire)
//  + (adunare)
//  - (scadere)
//  % (modulo, restul la impartire)
//  Operatorii binare
//      &, |, ^, <<, >>



// Operatii logice (boolene) => da rezultat un tip boolean (true / false)
//  >, <, >=, <=,
//  == (se verifica doar valoarea, se ignora tipul)
//  === (se verifica si valoarea, dar si tipul)

//  && (and) si
//  || (or) sau
//  ! (not) negare
// != (xor) diferit

// && (true doar cand ambele sunt adevarate)
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// || (true cand cel putin una este adevarata)
// true || true => true
// true || false => true
// false || true => true
// false || false => false

// !
// ! true => false
// ! false => true

// != (diferit)
// true != true => false
// true != false => true
// false != true => true
// false != false => false


const alfa = true;
const beta = true;

console.log(true !== true);