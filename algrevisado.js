
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

    var soma1 = (gas1 + eta1 + die1 + gnv1) / cab;
    soma1 = (soma1 * 12) / 1000
    soma1 = soma1.toFixed(2)

    localStorage.setItem('soma1', soma1);
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


    var elet1 = elet * (8 / 100);
    var buj1 = buj * (38);
    var mens1 = mens * (23 / 10);

    var soma2 = (elet1 + buj1 + mens1) / hou;
    soma2 = (soma2 * 12)  / 1000
    soma2 = soma2.toFixed(2)

    localStorage.setItem('soma2', soma2);
    document.getElementById("soma2").value = soma2;
}

function calco4() {
    //var p = document.getElementById("p").value;
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
    //p = parseFloat(p);


    var bov1 = bov * 27;
    var fra1 = fra * (288 / 100);
    var sui1 = sui * (585 / 100);
    var milk1 = milk * (19 / 10);
    var egg1 = egg * (62 / 100);

    var soma3 = (bov1 + fra1 + sui1 + milk1 + egg1);
    soma3 = (soma3 * 12) / 1000
    soma3 = soma3.toFixed(2)

    localStorage.setItem('soma3', soma3);
    document.getElementById("soma3").value = soma3;
}

function calco5() {
    var avi = document.getElementById("avi").value;

    avi = parseFloat(avi);

    var avi1 = (avi * (1615 / 10000)) / 1000;
    avi1 = avi1.toFixed(2);

    localStorage.setItem('soma4', avi1);
    document.getElementById("avi1").value = avi1;
}

function mostraresult() {
    var soma1 = parseFloat(localStorage.getItem('soma1'));
    var soma2 = parseFloat(localStorage.getItem('soma2'));
    var soma3 = parseFloat(localStorage.getItem('soma3'));
    var soma4 = parseFloat(localStorage.getItem('soma4'));

    var total = soma1 + soma2 + soma3 + soma4;
    total = total.toFixed(2)

    document.getElementById("resultotal").value = total + "tCO2e/ano";
    document.getElementById("resposta").style.display = "block";
    document.getElementById("testando").innerText = total + "tCO2e/ano";
    
    if (total < 4) {
        document.getElementById("media").innerText = "Você está abaixo da média de emissões de CO2!";
        document.getElementById("alerta1").style.display = "block";
        document.getElementById("alert-heading").innerText = "Muito Bem!";
        document.getElementById("paragrafo1").innerText = "Este resultado mostra que seu cotidiano está abaixo da média de emissões de CO2 na atmosfera. Uma baixa emissão de CO2 na atmosfera é um ótimo caminho para diminuir os efeitos causados pelo agravamento dos problemas ambientais. Continue assim!";
    } else {
        if (total < 7) {
            document.getElementById("media").innerText = "Você está dentro da média de emissões de CO2!";
            document.getElementById("alerta2").style.display = "block";
            document.getElementById("alert-heading2").innerText = "Ok!";
            document.getElementById("paragrafo2").innerText = "Este resultado mostra que seu cotidiano está dentro da média de emissões de CO2 na atmosfera. De acordo com os dados do SEEG (Sistema de Estimativas de Emissões e Remoções de Gases de Efeito Estufa), a média de CO2 emitido na atmosfera por uma pessoa varia entre 4tCO2e/ano a 7tCO2e/ano. Entretando, repensar seus hábitos é necessário!";
        } else {
            if (total > 7) {
                document.getElementById("media").innerText = "Você está acima da média de emissões de CO2!";
                document.getElementById("alerta3").style.display = "block";
                document.getElementById("alert-heading3").innerText = "Preocupante!";
                document.getElementById("paragrafo3").innerText = "Este resultado mostra que seu cotidiano está acima da média de emissões de CO2 na atmosfera. O aumento desenfreado das emissões de gases de efeito estufa contribui significativamente para as mudanças climáticas que estamos testemunhando globalmente. Essas alterações têm impactos devastadores no clima, causando eventos extremos, elevação do nível do mar e desequilíbrios nos ecossistemas. Como indivíduos, temos a responsabilidade de reduzir nossa pegada de carbono e adotar práticas mais sustentáveis em nossas vidas cotidianas. Recomendamos que avalie suas atividades diárias, busque maneiras de reduzir o consumo de energia e considere a adoção de práticas mais ecológicas."
            }
        }
    }
}

