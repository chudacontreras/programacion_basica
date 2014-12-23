//los alert solo para verificar que funciona

//alert("Fuera");
var dibujo, cuadro;
function inicio()
{
	//alert("Dentro");
	dibujo = document.getElementById("dibujito");
	cuadro = dibujo.getContext("2d");
	cuadro.moveTo(0,0);
	cuadro.lineTo(300,0);
	cuadro.lineTo(300,300);
	cuadro.lineTo(0,300);
	cuadro.lineTo(0,0);
	cuadro.strokeStyle = "#FF0000";
	cuadro.stroke();
	
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
	cuadro.arc(150,150,100, (3.1416*2), false);
	//cerramos el path
	cuadro.closePath();
	cuadro.stroke();

}