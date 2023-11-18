var avi1 = 0;
var soma3 = 0;
var soma1 = 0;
var soma2 = 0;
var stotal = 0;

function calco5() {
    var avi = document.getElementById("avi").value;
   
    avi = parseFloat(avi);
   
    avi1 = avi * (1615/10000);


    document.getElementById("avi1").value = avi1;
}

function calco4() {
    var bov = document.getElementById("bov").value;
    var fra = document.getElementById("fra").value;
    var sui = document.getElementById("sui").value;
    var milk = document.getElementById("milk").value;
    var egg = document.getElementById("egg").value;

    bov1 = parseFloat(bov1);
    fra1 = parseFloat(fra1);
    sui1 = parseFloat(sui1);
    milk1 = parseFloat(milk1);
    egg1 = parseFloat(egg1);


    var bov1 = bov * 27;
    var fra1 = fra * (288/100);
    var sui1 = sui * (585/100);
    var milk1 = milk * (19/10);
    var egg1 = egg * (62/100);

    soma3 = (bov1 + fra1 + sui1 + milk1 + egg1);


    document.getElementById("soma3").value = soma3;
}

function calco2() {
    var gas = document.getElementById("gas").value;
    var eta = document.getElementById("eta").value;
    var die = document.getElementById("die").value;
    var gnv = document.getElementById("gnv").value;
    var cab = document.getElementById("cab").value;


    gas = parseFloat(gas);
    eta = parseFloat(eta);
    die = parseFloat(die);
    gnv = parseFloat(gnv);
    cab = parseFloat(cab);

    var gas1 = gas * (23 / 10);
    var eta1 = eta * (364 / 100);
    var die1 = die * (26 / 10);
    var gnv1 = gnv * (233 / 100);

    soma1 = (gas1 + eta1 + die1 + gnv1)/cab;


    document.getElementById("soma1").value = soma1;
}

function calco3() {
    var hou = document.getElementById("hou").value;
    var elet = document.getElementById("elet").value;
    var buj = document.getElementById("buj").value;
    var mens = document.getElementById("mens").value;


    hou = parseFloat(hou);
    elet = parseFloat(elet);
    buj = parseFloat(buj);
    mens = parseFloat(mens);


    var elet1 = elet * (8/100);
    var buj1 = buj * (38);
    var mens1 = mens * (23/10);

    soma2 = (elet1 + buj1 + mens1)/hou;


    document.getElementById("soma2").value = soma2;
}

function total() {
    stotal = avi1 + soma1 + soma2 + soma3;
    document.getElementById("totais").value = soma1;
}