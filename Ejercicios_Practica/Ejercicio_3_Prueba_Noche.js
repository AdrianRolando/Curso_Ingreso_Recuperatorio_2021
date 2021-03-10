/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var sexo;
	var lugar;
	var temporada;
	var cantidadPersonas;
	var continuar;

	var acumuladorCantPersonasInvierno = 0;
	 
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var contadorInvierno = 0;

	var promedioPersonasInvierno = 0;

	var flagMasPasajeros = true;
	var sexoMasPasajeros;
	var maximaCantPasajeros;

	

	

	do
	{
		sexo = prompt("Ingrese sexo del titular (femenino/masculino) :")
		while(sexo != "femenino" && sexo != "masculino")
		{
			sexo = prompt("Incorrecto, ingrese sexo (femenino/masculino) :");
		}

		lugar = prompt("Ingrese destino (bariloche/cataratas/salta) :");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta")
		{
			lugar = prompt("Incorrecto, ingrese destino (bariloche/cataratas/salta) :")
		}

		temporada = prompt("Ingrese temporada (invierno/verano/otoño/primavera) :");
		while(temporada != "invierno" && temporada != "verano" && temporada != "otoño" && temporada != "primavera")
		{
			temporada = prompt("Incorrecto, Ingrese temporada (invierno/verano/otoño/primavera) :");
		}

		cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas que viajan : "));
		while(isNaN(cantidadPersonas) || cantidadPersonas == "")
		{
			cantidadPersonas = parseInt(prompt("Incorrecto, Ingrese cantidad de personas que viajan : "));
		}

		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;
		
			case "cataratas":
				contadorCataratas++;
				break;
			
			case "salta":
				contadorSalta++
				break;
		}

		if(flagMasPasajeros == true)  // ACA SE CALCULA EL SEXO CON MAS CANTIDAD DE PASAJEROS HACERLO POR FLAG Y GUARDAR EN VARIABLES EL SEXO Y LA CANTIDAD
		{
			sexoMasPasajeros = sexo;
			maximaCantPasajeros = cantidadPersonas;
			flagMasPasajeros = false;
		}
		else if(cantidadPersonas > maximaCantPasajeros)
		{
			sexoMasPasajeros = sexo;
			maximaCantPasajeros = cantidadPersonas;
		}

		
		if(temporada == "invierno")
		{
			contadorInvierno++;
			acumuladorCantPersonasInvierno += cantidadPersonas;
		}
		else
		{
			acumuladorCantPersonasInvierno = 0;
		}

		
		promedioPersonasInvierno = acumuladorCantPersonasInvierno / contadorInvierno;

		console.log("Sexo : " + sexo);
		console.log("Lugar : " + lugar);
		console.log("Temporada : " + temporada);
		console.log("Cantidad de personas : " + cantidadPersonas);
		
	
	}while(continuar = confirm("Desea seguir ingresando viajes? :"));

	
	
	console.log("Contador Bariloche : " + contadorBariloche);
	console.log("Contador Cataratas : " + contadorCataratas);
	console.log("Contador Salta : " + contadorSalta);
	
	
	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){ // Punto A   // FORMA DE COMPARAR CONTADORES MAS PROLIJA
		
		console.log("El Lugar mas elegido es : Bariloche");
	}
	else if(contadorCataratas > contadorSalta)
	{
		console.log("El lugar mas elegido es : Cataratas");
	}
	else 
	{
		console.log("El lugar mas elegido es : Salta");
	}

	console.log("El sexo del titular con mas pasajeros es : " + sexoMasPasajeros);

	
	if(contadorInvierno > 0)   // Punto C
	{
		console.log("El promedio de personas que viajan en invierno es : " + promedioPersonasInvierno);
	}
	else
	{
		console.log("No viajaron personas en invierno");
	}

 }
	






	/*var respuesta;
	var sexoTitular;
	var lugarIngresado;
	var temporadaIngresada;
	var cantidadPasajeros;

	var contadorBariloche;
	var contadorSalta;
	var contadorCataratas;
	var lugarMasElegido;
	var banderaMaximosPasajeros;
	var mayorCantidadPasajeros;
	var sexoMasPasajeros;
	var contadorViajesInvierno;
	var acumuladorPersonasInvierno;
	var promedioPersonasInvierno;

	respuesta="si";
	banderaMaximosPasajeros=0;
	contadorCataratas=0;
	contadorSalta=0;
	contadorBariloche=0;
	contadorViajesInvierno=0;
	acumuladorPersonasInvierno=0;


	while(respuesta=="si")
	{
		sexoTitular=prompt("Ingrese el sexo del titular 'f' para femenino, 'm' para masculino.");
		while(isNaN(sexoTitular)==false || sexoTitular!="f" && sexoTitular!="m")
		{
			sexoTitular=prompt("ERROR, ingrese un sexo valido");
		}

		lugarIngresado=prompt("Ingrese el lugar, sea 'cataratas', 'bariloche' o 'salta' ");
		while(isNaN(lugarIngresado)==false || lugarIngresado!="cataratas" && lugarIngresado!="bariloche" && lugarIngresado!="salta")
		{
			lugarIngresado=prompt("ERROR, ingrese el lugar correcto");
		}

		temporadaIngresada=prompt("Ingrese la temporada del año (estacion)");
		while(isNaN(temporadaIngresada)==false || temporadaIngresada!="otoño" && temporadaIngresada!="primavera" && temporadaIngresada!="verano" && temporadaIngresada!="invierno")
		{
			temporadaIngresada=prompt("ERROR, ingrese una estacion del año");
		}

		cantidadPasajeros=prompt("Ingrese la cantidad de pasajeros");
		cantidadPasajeros=parseInt(cantidadPasajeros);
		while(isNaN(cantidadPasajeros)==true || cantidadPasajeros<0)
		{
			cantidadPasajeros=prompt("ERROR, ingrese una cantidad correcta de pasajeros");
			cantidadPasajeros=parseInt(cantidadPasajeros);
		}


		//contadores de destinos
		switch(lugarIngresado)
		{
			case "bariloche":
				contadorBariloche++;
				break;
			case "salta":
				contadorSalta++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
		}


		//sexo del titular con mayor cantidad de pasajeros
		if(banderaMaximosPasajeros==0)
		{
			sexoMasPasajeros=sexoTitular;
			mayorCantidadPasajeros=cantidadPasajeros;

			banderaMaximosPasajeros++;
		}
		else
		{
			if(mayorCantidadPasajeros<cantidadPasajeros)
			{
				sexoMasPasajeros=sexoTitular;
				mayorCantidadPasajeros=cantidadPasajeros;
			}
		}

		//promedio de personas por viaje en invierno
		switch(temporadaIngresada)
		{
			case "invierno":
				contadorViajesInvierno++;
				acumuladorPersonasInvierno=acumuladorPersonasInvierno+cantidadPasajeros;
		}



		respuesta=prompt("Ingrese 'si' si desea ingresar otra estadia");
	}//fin del while principal


	//comparo contadores de destinos
	if(contadorCataratas>contadorSalta && contadorCataratas>contadorBariloche)
	{
		lugarMasElegido="Cataratas";
	}
	else
	{
		if(contadorSalta>contadorBariloche)
		{
			lugarMasElegido="Salta";
		}
		else
		{
			lugarMasElegido="Bariloche";
		}
	}

	document.write("El destino mas elegido es: "+lugarMasElegido+"<br>");
	document.write("El sexo del titular que lleva mas pasajeros es: "+sexoMasPasajeros+"<br>");


	//promedio de personas por viaje en invierno
	promedioPersonasInvierno=acumuladorPersonasInvierno / contadorViajesInvierno ;

	if(contadorViajesInvierno>0)
	{
		document.write("El promedio de personas por viaje en invierno es de: "+promedioPersonasInvierno+"<br>");
	}*/


