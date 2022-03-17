// RELÓGIO

var hours, min, sec;

var today = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
var month = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
//var today;

    var clock = function (){
    var dia = new Date();

    hours   = dia.getHours().toString().length < 2 ? "0" + dia.getHours() : dia.getHours(); 
    min     = dia.getMinutes().toString().length < 2 ? "0" + dia.getMinutes() : dia.getMinutes(); 
    sec     = dia.getSeconds().toString().length < 2 ? "0" + dia.getSeconds() : dia.getSeconds(); 

    var time = hours + ":" + min + ":" + sec;
    var teste = `${today = dia.getDate()} de ${month [dia.getMonth()]} de ${dia.getFullYear()}`
    //var teste = (today = dia.getDate() + " de " + month [dia.getMonth()] + " de " + dia.getFullYear());

    

    document.getElementById("hora").innerHTML = time;
    document.getElementById("data").innerHTML = teste;
    
}

/*function teste (){
    var hoje = new Date();
    today = hoje.getDate(), hoje.getMonth()+1, hoje.getFullYear();

    var day = hoje;


    document.getElementById("data").innerHTML = day;

}

teste();*/
setInterval(clock, 1000)
clock ();

Só nos testes hahaha


