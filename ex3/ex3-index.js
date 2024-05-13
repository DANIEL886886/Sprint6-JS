function numezi(nrzi) {
    let zi;
    switch (nrzi) {
        case 1:
            zi = "Luni";
            break;
        case 2:
            zi = "Marti";
            break;
        case 3:
            zi = "Miercuri";
            break;
        case 4:
            zi = "Joi";
            break;
        case 5:
            zi = "Vineri";
            break;
        case 6:
            zi = "Sambata";
            break;
        case 7:
            zi = "Duminica";
            break;
        default:
            zi = "Numarul nu este valid. Numerele inserate pot fi de la 1 la 7 inclusiv.";
    }
    
    return zi;
}

afiseaza = (n) => {
    console.log("Ziua saptamanii cu indexul " + n + " este: " + numezi(n));
}

for (let i = 9; i >= -1; i = i - 1) {
    afiseaza(i);
}