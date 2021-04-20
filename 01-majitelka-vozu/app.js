// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka : 'BMW',
    barva : 'modra',
    rokVyroby: 2015,
    spz: '1A6 2356',

}

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel ={};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni ='Czechita';


// Přepiš značku na Škoda
auto['znacka']= 'Škoda';


// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitel = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
document.getElementById('majitelka').innerHTML = majitel;

let znacka = auto.znacka;
document.getElementById('znacka').innerHTML = znacka;

let spz = auto.spz;
document.getElementById('spz').innerHTML = spz;