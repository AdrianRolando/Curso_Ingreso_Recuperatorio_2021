/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var peso;
	var edad;
	var sexo;

	var acumuladorEdadTotal = 0;
	var contadorMujeres = 0;

	var pesoMayorHombre;
	var flagMasPesado = true;

	for(var i=0; i<5; i++)
	{
		nombre = prompt("Ingrese el nombre : ");
		while(isNaN(nombre) == false || nombre == "")
		{
			nombre = prompt("Incorrecto, ingrese nombre nuevamente : ");
		}

		peso = parseInt(prompt("Ingrese el peso : "));
		while(isNaN(peso))
		{
			peso = parseInt(prompt("Incorrecto, ingrese el peso nuevamente : "));
		}

		edad = parseInt(prompt("Ingrese edad : "))
		while(isNaN(edad))
		{
			edad = parseInt(prompt("Incorrecto, ingrese edad nuevamente : "));
		}

		sexo = prompt("Ingrese sexo (femenino/masculino/no binario): ");
		while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo = prompt("Incorrecto , ingrese sexo nuevamente : ");
		}

		acumuladorEdadTotal += edad;
		
		if(sexo == "femenino") //PUNTO A
		{
			contadorMujeres++;
		}
		else if(sexo == "masculino") // PUNTO B
		{
			if(flagMasPesado == true)
			{
				pesoMayorHombre = peso;
				flagMasPesado = false;
			}
			else if(peso > pesoMayorHombre)
			{
				pesoMayorHombre = peso;
			}
		}

		console.log("Nombre " + nombre);
		console.log("Peso " + peso);
		console.log("Edad " + edad);
		console.log("Sexo " + sexo);
	}// final for


	promedioEdad = acumuladorEdadTotal / i; // PUNTO C

	console.log("La cantidad de mujeres ingresadas es : " + contadorMujeres);
	console.log("El mas pesado de los hombres ingresados es : " + pesoMayorHombre);
	console.log("El promedio total de edad es : " + promedioEdad);
	
}

/*var contador;
var nombreIngresado;
var pesoIngresado;
var edadIngresada;
var sexoIngresado;
var acumuladorEdad;
var contadorMujeres;
var promedioEdadTotal;
var banderaDelMasPesado;
var pesoDelMasPesado;
var nombreDelMasPesado;


acumuladorEdad=0;
banderaDelMasPesado=true;
contadorMujeres=0;
contador=0;


	for(contador=0;contador<3;contador++)
	{
		sexoIngresado=prompt("ingrese el sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="femenino" && sexoIngresado!="masculino" && sexoIngresado!="no binario")
		{
			sexoIngresado=prompt("error, reingrese femenino, masculino o no binario");
		}

		pesoIngresado=prompt("ingrese el peso");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado)==true || pesoIngresado<0|| pesoIngresado>150)
		{
			pesoIngresado=prompt("error, reingrese un peso valido");
			pesoIngresado=parseInt(pesoIngresado);
		}
		
		nombreIngresado=prompt("ingrese el nombre");		
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("error, reingrese un nombre valido");			
		}

		edadIngresada=prompt("ingrese la edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>110)
		{
			edadIngresada=prompt("error, reingrese una edad valida");
			edadIngresada=parseInt(edadIngresada);
		}

		switch(sexoIngresado)
		{
			case "femenino":
			contadorMujeres++;
			break;
		}

		if(sexoIngresado=="masculino")
		{
			if(banderaDelMasPesado==true)
			{
				pesoDelMasPesado=pesoIngresado;
				nombreDelMasPesado=nombreIngresado;
				banderaDelMasPesado=false;
			}
			else
			{
				if(pesoDelMasPesado<pesoIngresado)
				{
					pesoDelMasPesado=pesoIngresado;
					nombreDelMasPesado=nombreIngresado;
				}
			}
		}

	acumuladorEdad=acumuladorEdad+edadIngresada;

	}

	promedioEdadTotal=acumuladorEdad/contador;
	
	console.log("la edad promedio es: "+promedioEdadTotal);

	if(contadorMujeres==0)
	{
		console.log("no se ingresaron mujeres");
	}
	else
	{
		console.log("La cantidad de mujeres es: "+contadorMujeres);
	}

	if(banderaDelMasPesado==true)
	{
		console.log("no se ingresaron hombres");
	}
	else
	{
		console.log("el hombre mas pesado es: "+nombreDelMasPesado);
	}*/

