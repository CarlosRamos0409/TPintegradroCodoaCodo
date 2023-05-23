window.onload = inicio;

function inicio(){
    document.getElementById("limpiar").addEventListener('click',limpiar);
}

function limpiar() {
    document.getElementById("nombreTicket").value = "";
    document.getElementById("apellidoTicket").value = "";
    document.getElementById("correoTicket").value = "";
    document.getElementById("cantidadTicket").value = "";
    document.getElementById("totalTicket").value = "";
    document.getElementById("inputCategoria").value="Estudiante";
    
}

function calcular(){
    var porcentaje;
if (document.getElementById("cantidadTicket").value >0) {
    if (document.getElementById("inputCategoria").value=="Estudiante") {
        porcentaje=(document.getElementById("cantidadTicket").value * 200)*80/100
        document.getElementById("totalTicket").value = "Total a pagar: $ "+ ((document.getElementById("cantidadTicket").value * 200)- porcentaje)
    }else if (document.getElementById("inputCategoria").value=="Trainee"){
        porcentaje=(document.getElementById("cantidadTicket").value * 200)*50/100
        document.getElementById("totalTicket").value = "Total a pagar: $ "+ ((document.getElementById("cantidadTicket").value * 200)- porcentaje)
    }else if (document.getElementById("inputCategoria").value=="Junior"){
        porcentaje=(document.getElementById("cantidadTicket").value * 200)*15/100
        document.getElementById("totalTicket").value = "Total a pagar: $ "+ ((document.getElementById("cantidadTicket").value * 200)- porcentaje)
    }
}
}