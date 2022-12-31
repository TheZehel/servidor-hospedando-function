function mensagemFinal(destino, frete) {
    let form = document.getElementById("form");
    let produto = form.elements["produto"].value;
    alert(`Ola, boas vindas a nossa Loja. \n Ja recebemos as informacoes e iremos mandar o produto ${produto} para ${destino} \n Frete: ${frete}`);
}

const estados = { SP: "R$ 5,00", RJ: "R$ 6.50", MG: "R$ 7.20", PR: "R$ 8,00", AM: "R$ 23.50", AC: "R$ 23.50", RO: "R$ 22,00", RR: "R$ 22,00" }
const regioes = { Sul: "R$ 10,00", Sudeste: "R$ 8,00", 'Centro Oeste': "R$ 11.50", Nordeste: "R$ 15,00", Norte: "R$ 20,00" }

function calculaFrete() {
    let form = document.getElementById("form");

    let select = form.elements["estados"];
    let estado = select.options[select.selectedIndex].value;

    select = form.elements["regioes"];
    let regiao = select.options[select.selectedIndex].value;

    let frete = "R$ 0,00";
    let destino = "";
    if (estados[estado] != undefined) {
        frete = estados[estado];
        destino = estado;
    } else if (regioes[regiao] != undefined) {
        frete = regioes[regiao];
        destino = regiao;
    }

    mensagemFinal(destino, frete);
}

function geraOption(elemento){

    let tipos = eval(elemento);
    let selectBox = document.getElementById(elemento);
    selectBox.options.add(new Option("Selecione Uma Opção", ""));
    for (const tipo in tipos) {
        selectBox.options.add(new Option(tipo, tipo));
    }
}

function geraOptions(){
    geraOption("regioes");
    geraOption("estados");
}