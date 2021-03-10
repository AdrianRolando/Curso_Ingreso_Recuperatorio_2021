/*Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/


function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var continuar;

	var contadorProgramador = 0;
	var contadorAnalista = 0;
	var contadorQa = 0;
	var contadorNoBinario = 0;

	var acumuladorProgramador = 0;
	var acumuladorAnalista = 0;
	var acumuladorQa = 0;

	var promedioProgramador = 0;
	var promedioAnalista = 0;
	var promedioQa = 0;

	var flagSueldoMayor = true;
	var mayorSueldo;
	var sexoSueldoMayor;

	var flagFemeninoSueldoMayor = true;
	var sueldoMayorFemenino;
	var nombreMayorSueldoFemenino;

	// Bloque pedido de datos

	do
	{
		nombre = prompt("Ingrese nombre por favor :");
		while(isNaN(nombre) == false || nombre == "")
		{
			nombre=prompt("Incorrecto, Ingrese nombre por favor :");

		}

		edad = parseInt(prompt("Ingrese edad (mayor 17 años) : "));
		while(isNaN(edad) || edad < 17)
		{
			edad=parseInt(prompt("Incorrecto, Ingrese edad (mayor 17 años) :"));

		}

		sexo = prompt("Ingrese sexo (masculino/femenino/no binario) : ");
		while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
		{
			sexo = prompt("Incorrecto, Ingrese sexo (masculino/femenino/no binario) :");
		}

		puesto = prompt("Ingrese el puesto (programador/analista/Qa) : ");
		while(puesto != "programador" && puesto != "analista" && puesto != "Qa")
		{
			puesto = prompt("Ingrese el puesto (programador/analista/Qa) : ");
		}

		sueldo=parseInt(prompt("Ingrese el sueldo (Entre $15000 y $70000) :"));
		while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000)
		{
			sueldo = parseInt(prompt("Incorrecto, Ingrese el sueldo (Entre $15000 y $70000) :"));
		}

	// BLOQUE DE PROCESO DE DATOS
		
		switch (puesto) {
			case "analista":
				contadorAnalista++;
				acumuladorAnalista = acumuladorAnalista + sueldo;
				break;
		
			case "programador":
				contadorProgramador++
				acumuladorProgramador = acumuladorProgramador + sueldo;
				if(sexo == "no binario" && sueldo > 20000 && sueldo < 55000)
				{
					contadorNoBinario++;
				}
				break;
			
			case "Qa":
				contadorQa++;
				acumuladorQa = acumuladorQa + sueldo;
				break;
		}

		if(flagSueldoMayor == true || sueldo > mayorSueldo) // PUNTO B
		{
			mayorSueldo = sueldo;
			sexoSueldoMayor = sexo;
			flagSueldoMayor = false;
		}


		if(sexo == "femenino")  // PUNTO C
		{
			if(flagFemeninoSueldoMayor == true || sueldo > sueldoMayorFemenino)
			{
				nombreMayorSueldoFemenino = nombre;
				sueldoMayorFemenino = sueldo;
				flagFemeninoSueldoMayor = false;
			}

		}

		document.write("<br>Nombre : " + nombre);
		document.write("<br>Edad : " + edad);
		document.write("<br>Sexo : " + sexo);
		document.write("<br>Sueldo : "+ sueldo);
    
	}while(continuar = confirm("<br>Desea seguir ingresando mas empleados : "));

	
	
	document.write("<br>Sexo Mayor Sueldo : " + sexoSueldoMayor);


	if(contadorAnalista > 0) // PUNTO A
	{
		promedioAnalista = acumuladorAnalista / contadorAnalista;
		document.write("<br>El promedio de sueldo de Analista es: " + promedioAnalista);
	}
	else
	{
		document.write("<br>No se registran Analistas");
		
	}

	
	if(contadorProgramador > 0)
	{
		promedioProgramador = acumuladorProgramador / contadorProgramador;
		document.write("<br>El promedio de sueldo de Programador es: " + promedioProgramador);
	}
	else
	{
		document.write("<br>No se registran Programadores");
	}

	if(contadorQa > 0)
	{
		promedioQa = acumuladorQa / contadorQa;
		document.write("<br>El promedio de sueldo de Qa es: " + promedioQa);
	}
	else
	{
		document.write("<br>No se registran Qa");
	}

	
	document.write("<br>El sexo del que percibe mayor sueldo es : "+ sexoSueldoMayor); // PUNTO B

	
	if(flagFemeninoSueldoMayor == false) // PUNTO C
	{
	document.write("<br>El nombre del empleado femenino con mas sueldo es : " + nombreMayorSueldoFemenino);
	}
	else
	{
		document.write("<br>No se registraron ingresos femeninos");
	}
	
	if(contadorNoBinario > 0) // PUNTO D
	{
		document.write("<br>La cantidad de programadores de sexo No Binario que cobran entre $20000 y $55000 es : " + contadorNoBinario);
	}
	else
	{
		document.write("<br>No se registran ingresos de sexo No Binario con sueldo mayor entre $20000 y $55000)");
	}


}
