/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

function mostrar()
{
	// BLOQUE DE DECLARACION DE VARIABLES (SI HAY TIEMPO ACOMODAR TODO ENTRE CONTADORES, ACUMULADORES, FLAGS, ORDEN ALFABETICO, ETC)

	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var marca;

	var contadorAlcohol = 0;
	var contadorIac = 0;
	var contadorQuat = 0;
	

	var acumuladorAlcohol = 0;
	var acumuladorIac = 0;
	var acumuladorQuat = 0;
	var acumuladorCombustible = 0;
	var acumuladorExplosivo = 0;
	var acumuladorIgnifugo = 0;
	var acumuladorCantPrecioMenorIac = 0;

	var promedioCantAlcohol = 0;
	var promedioCantIac = 0;
	var promedioCantQuat = 0;

	var mayorTipoProducto;
	var mayorMarcaProducto;
	var mayorPrecioProducto;

	// BLOQUE DONDE SE PIDEN LOS DATOS

	for(var i=0; i<5; i++){

		tipoProducto = prompt("Ingrese tipo producto (alcohol/iac/quat) :");
		while(tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat")
		{
			tipoProducto = prompt("Incorrecto , ingrese nuevamente (alcohol/iac/quat) :");
		}

		precioProducto = parseInt(prompt("Ingrese precio producto (Entre $100 y $300) :"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseInt(prompt("Incorrecto, ingrese precio (entre $100 y $300) :"));
		}

		cantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades (max 1000) :"));
		while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = parseInt(prompt("Incorrecto, ingrese cantidad (max 1000) :"));
		}

		tipoInflamable = prompt("Ingrese tipo inflamable (ignifugo/combustible/explosivo) :");
		while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt("Incorrecto, ingrese tipo inflamable (ignifugo/combustible/explosivo) :");
		}

		marca = prompt("Ingrese marca :");
		while(isNaN(marca) == false || marca == "")
		{
			marca = prompt("Incorrecto, ingrese marca :");
		}


	 // BLOQUE DONDE PROCESAMOS LOS DATOS PEDIDOS DENTRO DEL BUCLE , DONDE SE BUSCAN MAXIMOS MINIMOS Y DONDE EN CADA ITERACION BUCLES Y ACUMULADORES HACEN SU TRABAJO

		if(i == 0 || precioProducto > mayorPrecioProducto) // EJEMPLO DE COMO CALCULAR UN MAXIMO CON CONTADOR
		{
			mayorPrecioProducto = precioProducto;
			mayorTipoProducto = tipoProducto;
			mayorMarcaProducto = marca;
		}
	
		switch (tipoProducto){           // SWITCH CON CONTADORES Y ACUMULADORES Y UN IF QUE ACUMULA EL PRECIO MENOR O = A 200 DE IAC
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol += cantidadUnidades;
				break;
		
			case "iac":
				contadorIac++;
				acumuladorIac += cantidadUnidades;
				if(precioProducto <= 200)
				{
					acumuladorCantPrecioMenorIac = cantidadUnidades; 
				}
				break;
			
			case "quat":
				contadorQuat++;
				acumuladorQuat += cantidadUnidades;
				break;
		}

		switch (tipoInflamable) {                   // EJEMPLO DE ACUMULADOR PARA CANTIDADES
			case "combustible":
				acumuladorCombustible += cantidadUnidades;
				break;
			case "explosivo":
				acumuladorExplosivo += cantidadUnidades;
				break;
			case "ignifugo":
				acumuladorIgnifugo += cantidadUnidades;
				break;
		}
	}// ACA TERMINA EL FOR COMO GUIA PARA MINIMIZAR

	// ACA HACEMOS LOS CALCULOS QUE VAN POR FUERA DEL BUCLE COMO PROMEDIOS Y COMPARACIONES ENTRE ACUMULADORES Y CONTADORES

	if(contadorAlcohol != 0)  // EJEMPLO DE CALCULO DE PROMEDIO CON EL ELSE QUE LO DEJA EN 0 SINO NO TIRA DATOS
	{
        promedioCantAlcohol = acumuladorAlcohol / contadorAlcohol;
    }
    else
    {
        promedioCantAlcohol = 0;
    }
	if(contadorIac != 0)
	{
		promedioCantIac = acumuladorIac / contadorIac;
    }
    else
    {
        promedioCantIac = 0;
    }
	if(contadorQuat != 0)
	{
		promedioCantQuat = acumuladorQuat / contadorQuat;
    }
    else
    {
        promedioCantQuat = 0;
    }


	// BLOQUE DONDE SE MUESTRAN LOS DATOS Y NO SE HACE NINGUNA OPERACION, SOLO MUESTRA DE DATOS CON IF PARA VALIDAR O MOSTRAR MENSAJES DE QUE NO SE INGRESAN DATOS

	// Punto A
	console.log("El promedio de cantidad de Alcohol es : " + promedioCantAlcohol + "\n");
	console.log("El promedio de cantidad de Iac es : " + promedioCantIac + "\n");
	console.log("El promedio de cantidad de Quat es : " + promedioCantQuat + "\n");

	// Punto B
	if(acumuladorCombustible > acumuladorExplosivo && acumuladorCombustible > acumuladorIgnifugo) // EJEMPLO DE COMPARACION DE ACUMULADORES MAS BASICO
	{
		console.log("El tipo de inflamable con mas cantidad es : Combustible\n");
	}
	else if(acumuladorExplosivo > acumuladorCombustible && acumuladorExplosivo > acumuladorIgnifugo)
	{
		console.log("El tipo de inflamabe con mas cantidad es : Explosivo\n");
	}
	else
	{
		console.log("El tipo de inflamable con mas cantidad es : Ignifugo\n");

	}

	// Punto C
	console.log("La cantidad de productos Iac con valor <= 200 es de : " + acumuladorCantPrecioMenorIac + "\n");

	// Punto D
	console.log("El tipo de producto mas caro es : " + mayorTipoProducto + "\n");
	console.log("La marca del producto mas caro es : " + mayorMarcaProducto + "\n");

}
