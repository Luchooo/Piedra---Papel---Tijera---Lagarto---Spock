window.onload = function ()
{
	
}


function Aleatorio(){


	var palabra="";

	palabra=String(document.getElementById('lista').value)
 	var computador= parseInt(Math.random()*15);


 


//////////////SI EL USUARIO ELIJE TIJERAS/////////////////////////
if (palabra=="Tijeras") {
							if (computador<2) {

						//Entra a Tijeras
						console.log("PC Elije Tijeras")
					
						alert("Tijeras es igual a Tijeras !!EMPATE!!")
							
							};


							
						if (computador>=2&&computador<=5) {

						//Entra a piedra
						console.log("PC Elije Piedra")
						alert("Tijeras son destruidas por Piedra !!PERDISTE!!")
	
						};


						if (computador>5&&computador<=7) {
						//Entra a papel
						console.log("PC Elije Papel")
						alert("Tijeras cortan Papel !!GANASTE!!")

						};


						if (computador>7&&computador<=9) {
						//Entra a lagarto
						console.log("PC Elije Lagarto")
					
						alert("Tijeras decapitan Lagarto !!GANASTE!!")

						};


							if (computador>9) {
						//Entra a spock
						console.log("PC Elije Spock")
						alert("Tijeras son destruidas por Spock !!PERDISTE!!")

						};



					};


////////////////////////////SI EL USUARIO ELIJE PAPEL/////////////////////

					if (palabra=="Papel") {
							if (computador<2) {

						//Entra a Tijeras
						console.log("PC Elije Tijeras")
						alert("Papel es cortado por Tijeras !!PERDISTE!!")

							};


							
						if (computador>=2&&computador<=5) {

						//Entra a piedra
						console.log("PC Elije Piedra")	
						alert("Papel envuelve a Piedra !!GANASTE!!")
	
						};


						if (computador>5&&computador<=7) {
						//Entra a papel
						console.log("PC Elije Papel")
						alert("Papel es igual a Papel !!EMPATE!!")

						};


						if (computador>7&&computador<=9) {
						//Entra a lagarto
						console.log("PC Elije Lagarto")
						alert("Papel es comido por Lagarto !!PERDISTE!!")

						};


							if (computador>9) {
						//Entra a spock
						console.log("PC Elije Spock")
						alert("Papel refuta a Spock !!GANASTE!!")

						};


					};

////////////////////////////SI EL USUARIO ELIJE PIEDRA/////////////////////

					if (palabra=="Piedra") {
							if (computador<2) {

						//Entra a Tijeras
						console.log("PC Elije Tijeras")
						alert("Piedra destruye  Tijeras !!GANASTE!!")

							};


							
						if (computador>=2&&computador<=5) {

						//Entra a piedra
						console.log("PC Elije Piedra")
						alert("Piedra es igual a Piedra !!EMPATE!!")
	
						};


						if (computador>5&&computador<=7) {
						//Entra a papel
						console.log("PC Elije Papel")
						alert("Piedra es envuelto por Papel !!PERDISTE!!")

						};

						if (computador>7&&computador<=9) {
						//Entra a lagarto
						console.log("PC Elije Lagarto")
						alert("Piedra aplasta a Lagarto!!GANASTE!!")

						};


							if (computador>9) {
						//Entra a spock
						console.log("PC Elije Spock")
						alert("Piedra es evaporizada por Spock!!PERDISTE!!")

						};

					};



////////////////////////////SI EL USUARIO ELIJE LAGARTO/////////////////////

					if (palabra=="Lagarto") {
							if (computador<2) {

						//Entra a Tijeras
						console.log("PC Elije Tijeras")
						alert("Lagarto es decapitado por Tijeras !!PERDISTE!!")

							};


							
						if (computador>=2&&computador<=5) {

						//Entra a piedra
						console.log("PC Elije Piedra")
						alert("Lagarto es aplastado por piedra!!PERDISTE!!")
	
						};


						if (computador>5&&computador<=7) {
						//Entra a papel
						console.log("PC Elije Papel")
						alert("Lagarto se como el Papel !!GANASTE!!")

						};

						if (computador>7&&computador<=9) {
						//Entra a lagarto
						console.log("PC Elije Lagarto")
						alert("Lagarto == Lagarto!!EMPATE!!")

						};


							if (computador>9) {
						//Entra a spock
						console.log("PC Elije Spock")
						alert("Lagarto envenena a Spock !!GANASTE!!")
						

						};

					};



////////////////////////////SI EL USUARIO ELIJE SPOCK/////////////////////

					if (palabra=="Spock") {
							if (computador<2) {

						//Entra a Tijeras
						console.log("PC Elije Tijeras")
						alert("Spock destroza a Tijeras !!GANASTE!!")

							};


							
						if (computador>=2&&computador<=5) {

						//Entra a piedra
						console.log("PC Elije Piedra")
						alert("Spock evaporiza Piedra !!GANASTE!!")
	
						};


						if (computador>5&&computador<=7) {
						//Entra a papel
						console.log("PC Elije Papel")
						alert("Spock es refutado por el Papel !!PERDISTE!!")

						};

						if (computador>7&&computador<=9) {
						//Entra a lagarto
						console.log("PC Elije Lagarto")
						alert("Spock es envenenado por el Lagarto !!PERDISTE!!")

						};


							if (computador>9) {
						//Entra a spock
						console.log("PC Elije Spock")
						alert("Spock == Spock !!Empate!!")
						


						};

					};

}


function obtener_datos (div) {
	return document.getElementById(div)	
}
