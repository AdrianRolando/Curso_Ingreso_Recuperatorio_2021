/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar()
{
	var nombre;
	var nombreMujerJoven;
	var estadoCivil;
	var edad;
	var edadJoven;
	var temperaturaCorporal;
	var sexo;

	var precioTotalSinDesc = 0;
	var precioTotalConDesc = 0;
	var contadorPasajeros = 0;
	var contadorPasajerosViudos = 0;
	var contadorMayores = 0;

	var porcentajeMayores;
	var flagMujerJoven = true;
	
	
	var precioPasaje = 600;
	var descuento;
	var continuar;
	
	do
	{	
		nombre = prompt("Ingrese nombre :");
		while(isNaN(nombre) == false || nombre == "")
		{
			nombre = prompt("Incorrecto, ingrese nombre :");
		}

		estadoCivil = prompt("Ingrese su estado civil (casado/soltero/viudo) :");
		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Incorrecto, ingrese estado civil (casado/soltero/viudo) :");
		}

		edad = parseInt(prompt("Ingrese edad (mayor a 17 años) :"));
		while(isNaN(edad) || edad < 18)
		{
			edad = parseInt(prompt("Incorrecto, Ingrese edad (mayor a 17 años) :"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal (entre 35 y 38 grados) :"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 38)
		{
			temperaturaCorporal = parseInt(prompt("Incorrecto, Ingrese temperatura corporal (entre 35 y 38 grados) :"));
		}

		sexo = prompt("Ingrese sexo (masculino/femenino/no binario) :");
		while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
		{
			sexo = prompt("Incorrecto, Ingrese sexo (masculino/femenino/no binario) :");
		}

		contadorPasajeros++;

		if(edad > 60 && estadoCivil == "viudo")
		{
			contadorPasajerosViudos++;
		}
		else if(estadoCivil == "soltero" && sexo == "femenino")
		{
			if(flagMujerJoven == true)
			{
				nombreMujerJoven = nombre;
				edadJoven = edad;
				flagMujerJoven = false;
			}
			else if(edad < edadJoven)
			{
				nombreMujerJoven = nombre;
				edadJoven = edad;
			}
		}

		if(edad > 60)
		{
			contadorMayores++;
		}

		console.log("Nombre : " + nombre);
		console.log("Estado Civil : " + estadoCivil);
		console.log("Edad : " + edad);
		console.log("Temp Corporal : " + temperaturaCorporal);
		console.log("Sexo : " + sexo);
		console.log("Precio pasaje : " + precioPasaje);
	
	}while(continuar = confirm("Quiere seguir cargando pasajeros? :"));

	

	porcentajeMayores = contadorMayores * 100 / contadorPasajeros; // EJEMPLO DE COMO SACAR PORCENTAJE  CANTIDAD X 100 / TOTAL
	precioTotalSinDesc = precioPasaje * contadorPasajeros;

	if(porcentajeMayores > 50) // EJEMPLO DE COMO SACAR PROCENTAJE
	{
		descuento = 0.25;
		precioTotalConDesc = precioTotalSinDesc - (precioTotalSinDesc * descuento); // CALCULO 
		
	}

	console.log("La cantidad total de pasajeros es : " + contadorPasajeros);

	console.log("La cantidad de pasajeros mayores a 60 y viudos es de : " + contadorPasajerosViudos); // Punto A

	console.log("El nombre de la mujer mas joven soltera es : " + nombreMujerJoven); // Punto B
	console.log("La edad de la mujer mas joven soltera es : " + edadJoven);

	console.log("Precio Total sin Descuento del viaje es : $" + precioTotalSinDesc); // Punto C

	console.log("Porcentaje Mayores de 60 es : " + porcentajeMayores);

	if(precioTotalConDesc > 0){
	console.log("El precio total con descuento es de : $" + precioTotalConDesc); //Punto D
	}
}