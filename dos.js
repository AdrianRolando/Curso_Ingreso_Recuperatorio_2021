/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar()
{
    var nombre;
    var carrera;
    var sexo;
    var cantidadMaterias;
    var notaPromedio;
    var edad;

    var flagMejorPromedioFisica = true;
    var nombreMejorPromedioFisica;
    var mayorPromedioFisica;

    var contadorFisica = 0;
    var contadorQuimica = 0;
    var contadorSistemas = 0;

    var flagFemeninoMasjoven = true;
    var edadMasJovenFemenino;
    var nombreFemeninoMasjoven;

    var totalAlumnosIngresados = 0;

    var procentajeQuimica;
    var porcentajeFisica;
    var porcentajeSistemas;

    var flagNoQuimica = true;
    var mayorCantidadMaterias;
    var nombreMayorCantidadMaterias;
    var edadMayorCantidadMaterias;


    for(var i=0; i<1; i++)
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

		carrera = prompt("Ingrese la carrera (quimica/fisica/sistemas) : ");
		while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas")
		{
			carrera = prompt("Incorrecto, Ingrese el carrera (quimica/fisica/sistemas) : ");
		}

        cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias ( entre 1 y 5) : "));
        while(isNaN(cantidadMaterias) || cantidadMaterias == "" || cantidadMaterias < 1 || cantidadMaterias > 5)
        {
            cantidadMaterias = parseInt(prompt("Incorrecto, Ingrese cantidad de materias entre 1 y 5 : "))
        }

        notaPromedio = parseInt(prompt("Ingrese nota promedio (entre 0 y 10)"));
        while(isNaN(notaPromedio) || notaPromedio == "" || notaPromedio < 0 || notaPromedio > 10)
        {
            notaPromedio = parseInt(prompt("Incorrecto, Ingrese nota promedio (entre 0 y 10)"));
        }

        document.write("<br>Nombre : " + nombre);
        document.write("<br>Edad : " + edad);
        document.write("<br>Sexo : " + sexo);
        document.write("<br>Carrera : " + carrera);
        document.write("<br>Cantidad Materias : "+ cantidadMaterias);
        document.write("<br>Nota Promedio : "+ notaPromedio);

        switch (carrera) {
            case "fisica":
                contadorFisica++;
                if(flagMejorPromedioFisica == true || notaPromedio > mayorPromedioFisica) // PUNTO A
                {
                    mayorPromedioFisica = notaPromedio;
                    nombreMejorPromedioFisica = nombre;
                    flagMejorPromedioFisica = false;
                }
                break;
            case "quimica":
                contadorQuimica++;
                break;
        
            case "sistemas":
                contadorSistemas++;
                break;
        }

        if(sexo == "femenino")
        {
            if(flagFemeninoMasjoven == true || edad < edadMasJovenFemenino)
            {
                edadMasJovenFemenino = edad;
                nombreFemeninoMasjoven = nombre;
                flagFemeninoMasjoven = false;
            }

        }

        if(carrera != "quimica") // PUNTO D
        {
            if(flagNoQuimica == true || cantidadMaterias > mayorCantidadMaterias )
            {
                mayorCantidadMaterias = cantidadMaterias
                nombreMayorCantidadMaterias = nombre;
                edadMayorCantidadMaterias = edad;
                flagNoQuimica = false;
            }

        }
    
    }//final for

    totalAlumnosIngresados = contadorQuimica + contadorFisica + contadorSistemas;
    
    if(flagMejorPromedioFisica == false) // PUNTO A
    {
        document.write("<br>El nombre del mejor promedio de Fisica es : " + nombreMejorPromedioFisica );
    }
    else
    {
        document.write("<br>No se ingresaron promedios en fisica"); 
    }

    
    
    if(flagFemeninoMasjoven == false) // PUNTO B
    {
        document.write("<br>El nombre de la alumna mas joven es : " + nombreFemeninoMasjoven);
    }

    
    if(contadorFisica > 0) // PUNTO C
    {
        porcentajeFisica = (contadorFisica * 100) / totalAlumnosIngresados;
        document.write("<br>El porcentaje de alumnos de Fisica es de : "+ porcentajeFisica);
    }
    else
    {
        document.write("<br>No se ingresaron alumnos en Fisica");
    }
    
    if(contadorQuimica > 0)
    {
        procentajeQuimica = (contadorQuimica * 100) / totalAlumnosIngresados;
        document.write("<br>El porcentaje de alumnos de Quimica es de : "+ procentajeQuimica);
    }
    else
    {
        document.write("<br>No se ingresaron alumnos en Quimica");
    }

    if(contadorSistemas > 0)
    {
        porcentajeSistemas = (contadorSistemas * 100) / totalAlumnosIngresados;
        document.write("<br>El porcentaje de alumnos de Sistemas es de : "+ porcentajeSistemas);
    }
    else
    {
        document.write("<br>No se ingresaron alumnos en Sistemas");
    }


    if(flagNoQuimica == false) // PUNTO D
    {
        document.write("<br>El nombre del alumno con mas materias que no sean quimica es : " + nombreMayorCantidadMaterias);
        document.write("<br>La Edad del alumno con mayor cantidad de materias es : " + edadMayorCantidadMaterias);
    }
    else
    {
        document.write("<br>No se anotaron alumnos en las materias de Fisica y Sistemas");
    }

}
