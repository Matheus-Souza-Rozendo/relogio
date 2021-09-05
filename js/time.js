
// objeto que ao se passar uma classe, mostra uma data na tela
class data {
    //atributos
    dias = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
    class = null;
    diaSemana = null;
    dia = null;
    mes = null;
    ano = null;
    //classe dos elementos onde sera mostrada a data
    constructor(c) {
        this.class = c;
        var d = new Date();
        this.diaSemana = this.dias[d.getDay()];
        this.dia = d.getDate();
        this.mes = d.getMonth() + 1;
        this.ano = d.getFullYear();
    }
    //mostra a data 
    show() {
        var painel = document.getElementsByClassName(this.class);
        for (let i = 0; i < painel.length; i++) {
            painel[i].innerHTML = this.diaSemana + " " + ("00" + this.dia).slice(-2) + "/" + ("00" + this.mes).slice(-2) + "/" + this.ano;
        }
    }
    //atualiza a data
    atualiza() {
        var d = new Date();
        this.diaSemana = this.dias[d.getDay()];
        this.dia = d.getDate();
        this.mes = d.getMonth() + 1;
        this.ano = d.getFullYear();
    }
    //esconde ou mostra algumas ou todas datas
    visivel(v, c) {
        var painel = document.getElementsByClassName(c);
        for (let i = 0; i < painel.length; i++) {
            if (v) {
                painel[i].hidden = false;
            } else {
                painel[i].hidden = true;
            }
        }
    }

    //muda cor de algumas ou todas as datas
    mudaCor(cor, c) {
        var painel = document.getElementsByClassName(c);
        for (let i = 0; i < painel.length; i++) {
            painel[i].style.color = cor;
        }
    }
}



class Base_clock {
    //atributos
    hora = null;
    minutos = null;
    segundos = null;

    constructor() {
        var data = new Date();
        this.hora = data.getHours();
        this.minutos = data.getMinutes();
        this.segundos = data.getSeconds();
    }

    mostra(c) {
        var painel = document.getElementsByClassName(c);
        for (let i = 0; i < painel.length; i++) {
            painel[i].innerHTML = ("00" + this.hora).slice(-2) + ":" + ("00" + this.minutos).slice(-2) + ":" + ("00" + this.segundos).slice(-2);
        }
    }

    //muda cor de algumas ou todas as horas
    mudaCor(cor, c) {
        var painel = document.getElementsByClassName(c);
        for (let i = 0; i < painel.length; i++) {
            painel[i].style.color = cor;
        }
    }

}

class clock extends Base_clock {
    //atributos
    intervalo = null;
    timer = null;

    constructor(c, i) {
        super();
        this.classe = c;
        this.intervalo = i * 1000;
        this.timer = setInterval(this.atualiza, this.intervalo);
    }

    //mostra a hora
    atualiza() {
        var data = new Date();
        this.hora = data.getHours();
        this.minutos = data.getMinutes();
        this.segundos = data.getSeconds();
        super.mostra(this.classe);
    }

}


