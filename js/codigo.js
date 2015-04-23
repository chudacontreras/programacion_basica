var peso;
var pesoEnMarte //CameCase

alert("¿Quieres Saber tu peso en marte?");
peso = prompt("¿Cual es tu peso en KG?", "70");
//peso = parseInt(peso);
peso = Number(peso);

pesoEnMarte = ((peso / 9.81) * 3.17);
//alert(peso + 10);
alert("tu peso en Marte es: " + pesoEnMarte + " Kg ");




//alert es una función
// () : Parametros de la Función
// "" : Cadenas de texto
//var nombre = "Jesús";
//var apellido = "Contreras";
//var nick = "Chuda";
//var edad = 41;
//alert("nombre:" + " " + nombre + " " + "Apellido:" + " " + apellido + "\n" + "Nick:" + " " + nick + " " + "Edad:" + " " + edad + "años.");
//alert("2"+ 5*8);
