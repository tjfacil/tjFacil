function preparaNumero(input) {
    input = input.replace(/\D/g,'');
    if (input.length > 20) {
        input = input.slice(-20);
    }
    return input.padStart(20, "0");
}

function defineTribunal(tribunal, regiao) {
    switch (tribunal) {
        //TJRJ
        case "819":
            return "http://www4.tjrj.jus.br/ConsultaUnificada/consulta.do#tabs-numero-indice0";
            break;
        
        //TRF2
        case "402":
            if (regiao.charAt(1) == "1") {
                return "http://procweb.jfrj.jus.br/portal/consulta/cons_procs.asp";
                break;
            } else if (regiao.charAt(1) == "0") {
                return "http://www2.jfes.jus.br/jfes/portal/consulta/cons_procs.asp";
                break;
            }
        default:
            break;
    }
}

function buscaTJFacil() {
    
    let numeroProcesso = document.getElementById("barraBusca").value;
    let numeroCNJ = preparaNumero(numeroProcesso);
    let codTribunal = numeroCNJ.slice(13, -4);
    let codRegiao = numeroCNJ.slice(-4);
    console.log(codRegiao);
    let tribunal = defineTribunal(codTribunal, codRegiao);
    document.getElementById("frameConteudo").setAttribute("src", tribunal);


}




    // NUMERAÇÃO CNJ
    // NNNNNNN-DD.AAAA.JTR.OOOO 


    // TJRJ
    // document.getElementById("frameConteudo").setAttribute("src", "http://www4.tjrj.jus.br/ConsultaUnificada/consulta.do#tabs-numero-indice0");
    
    // JFRJ 
    // document.getElementById("frameConteudo").setAttribute("src", "http://procweb.jfrj.jus.br/portal/consulta/cons_procs.asp");

    // TJSP
    // document.getElementById("frameConteudo").setAttribute("src", "https://esaj.tjsp.jus.br/esaj/portal.do?servico=190090");

    // JFSP
    // document.getElementById("frameConteudo").setAttribute("src", "http://www.jfsp.jus.br/foruns-federais");