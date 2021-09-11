var data = new Date();
var hora= data.getHours();

function escolheTema(){
    if((hora<6)||(hora>=18)){
        document.getElementById("artigo").style.backgroundImage="url(imagens/noite.jpg)";
        mudaCor("#FFFFFF");
        document.getElementById("footer").style.backgroundColor="rgb(0,0,0)";
        document.getElementById("footer").style.color="rgb(255,255,255)";
    }else{
        document.getElementById("artigo").style.backgroundImage="url(imagens/dia.jpg)";
    }
}

function controle(){
    if(contando){
        Parar();
    }else{
        Iniciar();
    }
}
