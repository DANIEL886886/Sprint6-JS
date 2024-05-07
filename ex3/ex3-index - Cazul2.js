    // Cazul 2 cu un cod mai elegant
    const weekdays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'];

function numezi(nrzi) {
  if (typeof nrzi !== "number") {
    return nrzi + " nu este un numar ";
  }
  
  return (nrzi >= 1 && nrzi <= 7) ? weekdays[nrzi - 1] : 'Numarul nu este valid. Numerele inserate pot fi de la 1 la 7 inclusiv.';
}
    
    console.log(numezi(8)); 
    console.log(numezi(7));  
    console.log(numezi(6));
    console.log(numezi(5));
    console.log(numezi(4));
    console.log(numezi(3));
    console.log(numezi(2));
    console.log(numezi(1.5));
    console.log(numezi("ion"));
    