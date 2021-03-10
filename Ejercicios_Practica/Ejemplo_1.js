
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/ 


function mostrar()
{
	//Declarar variables. (Se podria ordenar alfabeticamente si hay tiempo despues de que todo funca acumuladores/contadores conviene tenerlos juntos)

	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var acumuladorBarbijo = 0;
	var acumuladorJabon = 0;
	var acumuladorAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	var contadorJabon = 0;
	var precioAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var promedioCompra;
	var mayorTipo;
	var flagPrimerAlcohol = true;
	var mensajeAlcohol = "A) No se compraron Alcoholes"; // incializamos la variable con el mensaje default si no hay ingresos.
	var mensaje_b;
	var mensajeJabon;

	for (var i = 0 ; i < 1; i++) // no se concentren en la iteracion , concentrense en el codigo de adentro.
	{

		tipo = prompt("Ingrese tipo (barbijo/alcohol/jabon) :");
		while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon")
		{
			tipo = prompt("Incorrecto, Ingrese tipo (barbijo/alcohol/jabon :)");
		}
		
		precio = parseFloat(prompt("Ingrese Precio (entre 100 y 300): "));
		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = parseFloat(prompt("Incorrect, Ingrese Precio (entre 100 y 300): "));
		}
		
		cantidad = parseInt(prompt("Ingrese Cantidad (max 1000): "));
		while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000)
		{
			cantidad = parseInt(prompt("Incorrecto, Ingrese Cantidad (max 1000): "));
		}

		marca = prompt("Ingrese Marca");
		fabricante = prompt("Ingrese fabricante");
	   
		// en caso de ser 3 conviene el if-elseif-else o switch si se quiere (ORDENAR ALFABETICAMENTE), con el switch nos podemos concentrar en cada tipo y lo que pasa dentro.
		// declarar contadores y acumuladores.
		switch (tipo)
		{
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;

				if(flagPrimerAlcohol == true || precioAlcoholBarato > precio) // Logica de maximo y minimo entra una vez por la bandera y despues vuelve a entrar por el precio.
				{                                                             // En este caso guarda el mas barato si fuera buscar el mas caro seria precio > precioMaximo.
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;                     // aca se cumple todo el punto A
					flagPrimerAlcohol = false;
				}
				
				break;
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo++;

				break;
			case "jabon":
				acumuladorJabon += cantidad;                                    // punto C ya se cumple aca
				contadorJabon++;
				
				break;
		}
	} // aca termina el for
    // aca se usa if-elseif-else para comparar los contadores y guardar el que mas cantidad acumulo
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{																					//Si el acumuladorAlcohol gano al menos una vez se ingreso y contadorAlcohol no vale 0
		mayorTipo = "Alcohol";
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon) //NECESITO EL NOMBRE DEL TIPO NO SU CANTIDAD (ME CONFUNDIIII)
	{
		mayorTipo = "Barbijo";
		promedioCompra = acumuladorBarbijo / contadorBarbijo;            // se calculan los promedios de cada tipo de producto.
	}
	else
	{
		mayorTipo = "Jabon";
		promedioCompra = acumuladorJabon / contadorJabon;
	}

	//

	if(contadorAlcohol != 0) // o usar el flagAlcohol == true tb porque entraste aunque sea 1 vez.
	{
		mensajeAlcohol = "A) Fabricante alcohol barato : " + fabricanteAlcoholBarato + 
		"\nCantidad : " + cantidadAlcoholBarato + 
		"\nPrecio : " + precioAlcoholBarato;  //PUNTO A
	}

	mensaje_b = "B) Tipo con mas unidades : " + mayorTipo + 
	"\nPromedio : " + promedioCompra;
	
	mensajeJabon = "C) Unidades de Jabon: " + acumuladorJabon;

	alert(mensajeAlcohol + "\n" + mensaje_b + "\n" + mensajeJabon);

	// Testeo con

	// 1  Tipo Jabon, Precio 200, Cantidad 500, Marca A, Fabricante R
	// 2  Tipo Alcohol,      250           200        B             S
	// 3  Tipo Jabon,        125           700        C             T  B) Jabon + Unidades 1200 unidades , promedio de compra 600 (dividio 2 interaciones)
	// 4  Tipo Alcohol,      270           300        D             U
	// 5  Tipo Alcohol,      230           100        E             V  A) Alcohol mas barato  230 V 100
	// 6  Tipo Barbijo,      150           600        F             W  C) cantidad de barbijos 1200 , 600 x 2 vueltas.



/*el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/ 

}
