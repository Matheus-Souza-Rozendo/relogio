//variaveis
var b1 = "btn1";
var b2 = "btn2";
var painel = "painel";
var mili = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var iniciar = b1;
var continuar = b1;
var parar = b1;
var zerar = b2;
var contando = false;
var zerado = true;
var timer;
var verifica;
var voltando;

//mostra na tela
function mostra() {
    document.getElementById(painel).innerHTML = ("00" + horas).slice(-2) + ":" + ("00" + minutos).slice(-2) + ":" + ("00" + segundos).slice(-2) + "<small>" + ("00" + mili).slice(-2) + "</small>";
}

//conta o tempo
function contagem() {
    mili++;
    if (mili == 100) {
        segundos++;
        mili = 0;
    }
    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos == 60) {
        horas++;
        minutos = 0;
    }
    mostra();
}

//inicia o cronometro
function Iniciar() {
    contando = true;
    zerado = false;
    document.getElementById(iniciar).setAttribute("class", "btn btn-danger mx-2 mx-lg-5");
    document.getElementById(iniciar).innerHTML = "Parar";
    timer = setInterval(contagem, 10);
    verifica = setInterval(foco, 10);
}

//para o cronometro
function Parar() {
    contando = false;
    document.getElementById(iniciar).setAttribute("class", "btn btn-info mx-2 mx-lg-5");
    document.getElementById(iniciar).innerHTML = "Continuar";
    clearInterval(timer);
    clearInterval(verifica);
}

//zera o cronometro
function Zerar() {
    contando = false;
    zerado = true;
    clearInterval(timer);
    mili = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    mostra();
    document.getElementById(iniciar).setAttribute("class", "btn btn-success mx-2 mx-lg-5");
    document.getElementById(iniciar).innerHTML="Iniciar";
}

//verifica se a pagina esta em foco
function foco() {
    if(contando){
        if((document.hidden)&&(!voltando)) {
            var d = new Date();
            sessionStorage.dia = d.getDay();
            sessionStorage.horas = d.getHours();
            sessionStorage.minutos = d.getMinutes();
            sessionStorage.segundos = d.getSeconds();
            voltando = true;
        }
        if((!document.hidden)&&(voltando)) {
            clearInterval(timer);
            var dAtual = new Date();
            var h,m,s;
            //mesmo dia
            if ((dAtual.getDay()-sessionStorage.dia)==0){
                h = dAtual.getHours()-sessionStorage.horas;
            } else {
                //outro dia
                h =(24-sessionStorage.horas)+dAtual.getHours();
            }
            m = dAtual.getMinutes()-sessionStorage.minutos;
            s = dAtual.getSeconds()-sessionStorage.segundos;
            if (m < 0) {
                m += 60;
                h--;
            }
            if (s < 0) {
                s += 60;
                m--;
            }
            horas = h + parseInt(horas);
            minutos = m + parseInt(minutos);
            segundos = s + parseInt(segundos);
            //console.log(horas+":"+minutos+":"+seg);
            if (segundos > 60) {
                segundos -= 60;
                minutos++;
            }
            if (minutos > 60) {
                minutos -= 60;
                horas++;
            }
            voltando = false;
            timer = setInterval(contagem, 10);
        }
    }
}
//muda a cor do cronometro
function mudaCor(cor){
    document.getElementById(painel).style.color=cor;
}
