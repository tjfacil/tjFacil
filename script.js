function controlC() {
    var copyText = document.getElementById("barraBusca");
    copyText.select();
    document.execCommand("copy");
}

function toggleDivComoUsar() {
    let divComoUsar = document.getElementById("divComoUsar")
    let linkInstrucoes = document.getElementById("link-instrucoes")
    let divLogo = document.getElementById("divLogo")

    if (divComoUsar.style.display === "none") {
        divComoUsar.style.display = "block"
        linkInstrucoes.innerHTML = "Fechar instruções"
        divLogo.style.height = "20vh";
    } else {
        divComoUsar.style.display = "none";
        linkInstrucoes.innerHTML = "Como utilizar"
        divLogo.style.height = "30vh";
    }
}


function preparaNumero(input) {
    input = input.replace(/\D/g,'');
    if (input.length > 20) {
        input = input.slice(-20);
    }
    let numero = input.padStart(20, "0");
    let codTribunal = numero.slice(13, -4);
    let codRegiao = numero.slice(-4);

    let numObj = {
        cnj: numero,
        tribunal: codTribunal,
        regiao: codRegiao
    };

    if (numObj.tribunal.charAt(0) == "4") {
        numObj.tribunal += numObj.regiao.charAt(0) + numObj.regiao.charAt(1);
    };

    if (numObj.tribunal.charAt(0) == "6") {
        numObj.tribunal = "600";
    }

    if (numObj.tribunal.charAt(0) == "7") {
        numObj.tribunal = "700";
    }

    return numObj;
}

function retornaInstancia() {
    if (document.getElementById("grau_2").checked == true) {
        return "segunda";
    } else if (document.getElementById("stj").checked == true) {
        return "unica";
    } else if (document.getElementById("stf").checked == true) {
        return "unica";
    } if (document.getElementById("tst").checked == true) {
        return "unica";
    } else {
        return "primeira";
    }
}

function tribunaisSuperiores() {
    if (document.getElementById("stj").checked == true) {
        return "STJ";
    } else if (document.getElementById("stf").checked == true) {
        return "STF";
    } else if (document.getElementById("tst").checked == true) {
        return "TST";
    } else {
        return "";
    }
}

function buscaTJFacil() {
    let input = document.getElementById("barraBusca").value;

	if (input.charAt(0) >= '0' && input.charAt(0) <= '9') {
        let numeroProcesso = preparaNumero(input);

        let tipoProcesso = "fisico";
        if (document.getElementById("eproc").checked == true) {
            tipoProcesso = "eletronico";
        }

        let instancia = retornaInstancia();

        let terceiroGrau = tribunaisSuperiores();
        if (terceiroGrau != "") {
            numeroProcesso.tribunal = terceiroGrau;
        }

        controlC();
        window.open(tribunais[numeroProcesso.tribunal][tipoProcesso][instancia], '_blank');

    } else {
        let nomeTribunal;

        for (let chave in tribunais) {

            nomeTribunal = tribunais[chave]["nome"];
            nomeTeste = nomeTribunal.toLowerCase();

            if (nomeTeste.startsWith(input.toLowerCase())) {
                controlC();
                window.open(tribunais[chave]["principal"], '_blank');
            }
        }
    }
}
