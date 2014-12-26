//los alert solo para verificar que funciona

//alert("Fuera");
var dibujo, cuadro, t, b;

function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	//alert("Dentro");
	dibujo = document.getElementById("dibujito");
	cuadro = dibujo.getContext("2d");
	//dibujarGrilla(cuadro);
	b.addEventListener("click", dibujarGrilla);

	/*cuadro.moveTo(0,0);
	cuadro.lineTo(300,0);
	cuadro.lineTo(300,300);
	cuadro.lineTo(0,300);
	cuadro.lineTo(0,0);
	cuadro.strokeStyle = "#FF0000";
	cuadro.stroke();*/
	
	/*cuadro.moveTo(100,100);
	cuadro.lineTo(200,100);
	cuadro.strokeStyle = "#00AA00";
	cuadro.stroke();*/
	//para dibujar un circulo debemos entender PI.
	//abrimos el path
	cuadro.beginPath();
	cuadro.strokeStyle = "#0040FF";
	//para dibujar un arco necesitamos parametros (el centro, el radio, radianes y un valor 
	//para saber si va con o en contra de las manecillas del reloj)
	//cuadro.arc(150,150,100, (3.1416*2), false);
	cuadro.arc(150,150,100, (Math.PI*2), false);
	//cerramos el path
	cuadro.closePath();
	cuadro.stroke();

}
function dibujarGrilla()
{
	var l = cuadro;
	var rayas = Number(t.value);

	var ancho = 300, alto =300;
	var linea;
	//var anchodeLinea = 30;
	var anchodeLinea = ancho / rayas;
	var limiteX = ancho / anchodeLinea;
	var limiteY = alto / anchodeLinea;
	for (linea=0; linea<=limiteX; linea++)
	{
		punto = linea*anchodeLinea;
		l.beginPath();
		l.strokeStyle ="#AAA";
		l.moveTo(punto, 0);
		l.lineTo(punto,ancho);
		l.closePath();
		l.stroke();

	}
	for (linea=0; linea<=limiteY; linea++)
	{
		l.beginPath();
		l.strokeStyle ="#AAA";
		l.moveTo(0, linea*anchodeLinea);
		l.lineTo(300, linea*anchodeLinea);
		l.closePath();
		l.stroke();
	}

}