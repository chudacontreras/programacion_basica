var palabra = "tamarindo";
var hombre;
//Declaración de la clase ahorcado

var Ahorcado = function(con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}
Ahorcado.prototype.dibujar = function()
{
	
	var dibujo = this.contexto;
	//dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150, 100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth =10;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{
		//intenos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(150, 140, 40, 0, Math.PI *2, false);
		dibujo.lineWidth = 5;
		dibujo.strokeStyle = "#F00";
		dibujo.stroke();
		dibujo.closePath();
	}
	if (this.intentos > 1)
	 {
	 	//intentos = 2 --> torso
	 	dibujo.beginPath();
		dibujo.moveTo(150, 180);
		dibujo.lineTo(150, 250);
		dibujo.lineWidth = 5;
		dibujo.strokeStyle = "#F00";
		dibujo.stroke();
		dibujo.closePath();

		if (this.intentos > 2) 
		{
			//intentos = 3 --> brazitos
			dibujo.beginPath();
			dibujo.moveTo(120, 220);
			dibujo.lineTo(150, 180);
			dibujo.lineTo(180, 220);
			dibujo.lineWidth = 5;
			dibujo.strokeStyle = "#F00";
			dibujo.stroke();
			dibujo.closePath();


				if (this.intentos > 3) 
			{
				//intentos = 4 --> piernitas
				dibujo.beginPath();
				dibujo.moveTo(120, 290);
				dibujo.lineTo(150, 250);
				dibujo.lineTo(180, 290);
				dibujo.lineWidth = 5;
				dibujo.strokeStyle = "#F00";
				dibujo.stroke();
				dibujo.closePath();

				if (this.intentos > 4 ) 
					{
						//intentos = 5 --> ojos de ahorcado
						dibujo.beginPath();
						//ojo izquierdo
						dibujo.moveTo(125, 120);
						dibujo.lineTo(145, 145);
						dibujo.moveTo(145, 120);
						dibujo.lineTo(125, 145);
						//ojo derecho
						dibujo.moveTo(155, 120);
						dibujo.lineTo(175, 145);
						dibujo.moveTo(175, 120);
						dibujo.lineTo(155, 145);
						dibujo.lineWidth = 5;
						dibujo.strokeStyle = "blue";
						dibujo.stroke();
						dibujo.closePath();
					}
			}
		}
	 }

}

Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	 {
	 	this.vivo = false;
	 	alert("!Estas Muerto¡");
	 }
	 this.dibujar();
}

function iniciar()
{
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	palabra = palabra.toUpperCase();
	alert(palabra);
	//alert("Funciona");
	//hombre.trazar();
	//hombre.trazar();
	//hombre.trazar();
	//hombre.trazar();
	//hombre.trazar();
}