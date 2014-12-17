//Genera un numero aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
  return numero;
}


var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;

var opciones=["piedra", "papel", "tijera"];
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Que eliges:\n Piedra: 0\n Papel: 1\n Tijera: 2", 0);
//alert(opcionMaquina);
//alert("Elegiste:  " + opcionUsuario);
alert("Elegiste " + opciones[opcionUsuario]);
alert("javascript eligio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
  if(opcionMaquina == piedra)
  {
    alert("Empate!");
  }
  else if(opcionMaquina == papel)
  {
    alert("Perdistes!");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste!");
  }
}
else if(opcionUsuario == papel)
{
  if(opcionMaquina == piedra)
  {
    alert("Ganaste!");
  }
  else if(opcionMaquina == papel)
  {
    alert("Empate!");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Perdistes!");
  }
}
else if(opcionUsuario == tijera)
{
  if(opcionMaquina == piedra)
  {
    alert("Perdistes!");
  }
  else if(opcionMaquina == papel)
  {
    alert("Ganaste!");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Empate!");
  }
}
else
{
  alert("No Valido");
}
