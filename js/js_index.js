var classe="hora";
const hora= new clock(classe,1);
var d = new data("calendar");
d.show();
var ver=true;

function escolheTema(){
    if((hora.hora<6)||(hora.hora>18)){
        document.getElementById("artigo").style.backgroundImage="url(/imagens/noite.jpg)";
        hora.mudaCor("#FFFFFF","hora");
        d.mudaCor("#FFFFFF","calendar");
        document.getElementById("footer").style.backgroundColor="rgb(0,0,0)";
        document.getElementById("footer").style.color="rgb(255,255,255)";
    }else{
        document.getElementById("artigo").style.backgroundImage="url(/imagens/dia.jpg)";
    }
}

function mudarCor(cor){
    console.log(cor);
    hora.mudaCor(cor,"hora");
    d.mudaCor(cor,"calendar");   
}

function esconde(){
    if(ver){
        ver=false;
    }else{
        ver=true;
    }
    d.visivel(ver,"calendar");
}

window.addEventListener("load",escolheTema);