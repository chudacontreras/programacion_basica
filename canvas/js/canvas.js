//los alert solo para verificar que funciona

//alert("Fuera");
var dibujo, cuadro;
function inicio()
{
	//alert("Dentro");
	dibujo = document.getElementById("dibujito");
	cuadro = dibujo.getContext("2d");
	dibujarGrilla(cuadro);

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
function dibujarGrilla(l)
{
	var ancho = 300, alto =300;
	var lineas = 10;
	var linea;
	var limiteX = ancho / lineas;
	var limiteY = alto / lineas;
	for (linea=0; linea<=limiteX; linea++)
	{
		l.beginPath();
		l.strokeStyle ="#AAA";
		l.moveTo(linea*10, 0);
		l.lineTo(linea*10,300);
		l.closePath();
		l.stroke();

	}
	for (linea=0; linea<=limiteY; linea++)
	{
		l.beginPath();
		l.strokeStyle ="#AAA";
		l.moveTo(0, linea*10);
		l.lineTo(300, linea*10);
		l.closePath();
		l.stroke();
	}

}