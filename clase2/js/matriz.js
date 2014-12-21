/*var menu = ["Productos", "Ventas", "Contacto"];
document.write( menu[0]);*/

//var dofa =[["Fuerza","Oportunidades"],["Debilidades","Amenazas"]];
//document.write(dofa[1][0]);

function explosion()
{
  alert("BOOM!!!");
  document.write("<h1>BOOM! Elegistes un area minada :( </h1>")
}

function ganastes()
{
  document.write("<h1> Eres un ganador :) </h1>")
}
// 1=Bonba 0 = Ok
var campo = [[ 1 , 0 , 0 ],
             [ 0 , 1 , 0 ],
             [ 1 , 1 , 1 ] ];

var textos =["Cesped","Bomba"];
var x, y;

alert("Estas en un campo minado\n" +
      "Elige una posición entre el 0 y el 2 para X y para Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");


//document.write( textos[posicion] );
//console.log(posicion);

if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Elegistes " + textos[posicion]);
	//alert("Pocisión correcta");
	if(posicion == 1)
	{
		explosion();
	}
	else
	{
		ganastes();
	}
}
else
{
	document.write("Te saliste del campo!");
	explosion();
}

