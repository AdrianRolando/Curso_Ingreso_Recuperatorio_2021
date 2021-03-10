/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota*/

function mostrar()
{
  // BLOQUE DONDE SE DECLARAN VARIABLES (SI HAY TIEMPO ORDENAR POR ORDEN ALFABETICO ENTRE ACUMULADORES , CONTADORES, ETC)
  var nombre;
  var nombreMejorNotaNoMasculino;
  var nombreMasJoven;
  var nombreNoRemota;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var nota;
  var edad;
  var edadMasJoven;
  var edadNoRemota;
  var continuar;

  var contadorCursadaLibre = 0;
  var contadorFemenino = 0;
  var contadorMasculino = 0;
  var contadorNoBinario = 0;
  
  var maximaNotaNoMasculino;
  var acumuladorNotaFemenino = 0;
  var acumuladorNotaMasculino = 0;
  var acumuladorNotaNoBinario = 0;

  var promedioNotaFemenino = 0;
  var promedioNotaMasculino = 0;
  var promedioNotaNoBinario = 0;

  var flagNoMasculino = true;
  var flagMasJoven = true;
  var flagNoRemota = true;
  
 

  do
  {
      nombre = prompt("Ingrese nombre");
      while(isNaN(nombre) == false || nombre == "")
      {
        nombre = prompt("Incorrecto, ingrese nuevamente");
      }

      tipoCursada = prompt("Ingrese tipo de cursada (libre/presencial/remota)");
      while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
      {
        tipoCursada = prompt("Incorrecto, ingrese nuevamente");
      }
      
      cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias (max 7):"));
      while(isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 7)
      {
        cantidadMaterias = parseInt(prompt("Incorrecto, ingrese nuevamente (max7):"));
      }

      sexo = prompt("Ingrese sexo (masculino/femenino/no binario):");
      while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
      {
        sexo = prompt("Incorrecto, ingrese nuevamente (masculino/femenino/no binario):");
      }

      nota = parseInt(prompt("Ingrese su nota promedio (entre 0 y 10):"));
      while(isNaN(nota) || nota < 0 || nota > 10)
      {
        nota = parseInt(prompt("Incorrecto, ingrese su nota promedio (entre 0 y 10):"));
      }

      edad = parseInt(prompt("Ingrese su edad (Mayor o igual a 18) :"));
      while(isNaN(edad) || edad < 18)
      {
        edad = parseInt(prompt("Incorrecto, ingrese su edad (Mayor o igual a 18) :"));

      }

      if(sexo != "masculino") // Punto A calculo nombre del mejor promedio no masculino.
      {
        if(flagNoMasculino == true) // FORMA DE CALCULAR MAXIMO DE FORMA MAS SEGURA
        {
        maximaNotaNoMasculino += nota;
        nombreMejorNotaNoMasculino = nombre;
        flagNoMasculino = false;
        }
        else if(nota > maximaNotaNoMasculino)
        {
          maximaNotaNoMasculino += nota;
          nombreMejorNotaNoMasculino = nombre;
        }
      }

      if(tipoCursada == "libre") // Punto B edad y nombre del mas joven en dar libre
      {
        contadorCursadaLibre++;

        if(flagMasJoven == true)
        {
          edadMasJoven = edad;
          nombreMasJoven = nombre;
          flagMasJoven = false;
        }
        else if(edad < edadMasJoven)
        {
          edadMasJoven = edad;
          nombreMasJoven = nombre;
        }
      }

      switch (sexo) // Punto C para sacar promedio
      {
        case "femenino":
          contadorFemenino++;
          acumuladorNotaFemenino += nota;
          break;
      
        case "masculino":
          contadorMasculino++;
          acumuladorNotaMasculino += nota;
          break;

        case "no binario":
          contadorNoBinario++;
          acumuladorNotaNoBinario += nota;
          break;
      }

      if(tipoCursada != "remota") // Punto D  edad , nombre y cantidad materias no remota
      {
        if(flagNoRemota = true)
        {
          edadNoRemota = edad;
          nombreNoRemota = nombre;
          maximoMateriasNoRemota = cantidadMaterias;
          flagNoRemota = false;
        }
        else if(cantidadMaterias > maximoMateriasNoRemota)
        {
          edadNoRemota = edad;
          nombreNoRemota = nombre;
          maximoMateriasNoRemota = cantidadMaterias;
        }
      }

      
      

    document.write("<br>tipo cursada " + tipoCursada);
    document.write("<br>nombre " + nombre);
    document.write("<br>cantidad materias " + cantidadMaterias);
    document.write("<br>sexo " + sexo);
    document.write("<br>nota " + nota);
    document.write("<br>edad " + edad); 

  }while(continuar = confirm("Desea seguir cargando datos?")); 


  if(contadorFemenino != 0) // Punto C promedio de nota por sexo
	{
		promedioNotaFemenino = acumuladorNotaFemenino / contadorFemenino;
	}
  else
  {
    promedioNotaFemenino = 0;
  }
	if(contadorMasculino != 0)
	{
		promedioNotaMasculino = acumuladorNotaMasculino / contadorMasculino;
  }
  else
  {
    promedioNotaMasculino = 0;
  }
	if(contadorNoBinario != 0)
	{
		promedioNotaNoBinario = acumuladorNotaNoBinario / contadorNoBinario;
  }
  else
  {
    promedioNotaNoBinario = 0;
  }


  // Salida de datos

  if(flagNoMasculino == false) // Punto A
  {
  document.write("<br>Nombre del mejor promedio no masculino es : " + nombreMejorNotaNoMasculino);
  }
  else
  {
    document.write("<br>Nombre del mejor promedio no masculino es : No se ingresaron datos");
  }

  if(contadorCursadaLibre != 0) // Punto B
  {
    document.write("<br>Nombre de la persona mas joven en dar libre es : " + nombreMasJoven); 
  
  }
  else
  {
    document.write("<br>Nombre de la persona mas joven en dar libre es : No se ingresaron datos");
  }


  document.write("<br>Promedio de nota Femenino es : " + promedioNotaFemenino); // Punto C
  document.write("<br>Promedio de nota Masculino es : " + promedioNotaMasculino);
  document.write("<br>Promedio de nota No Binario es : " + promedioNotaNoBinario);

  
  if(flagNoRemota == false) // Punto D
  {
    document.write("<br>El nombre del que cursa mas materias de forma no remota es : " + nombreNoRemota);
    document.write("<br>La edad del que cursa mas materias de forma no remota es : " +  edadNoRemota);

  }
  else
  {
    document.write("<br>El nombre del que cursa mas materias de forma no remota es : No se ingresaron datos");
    document.write("<br>La edad del que cursa mas materias de forma no remota es : No se ingresaron datos");

  }
}
