/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
	var marca;
	var precio;
	var peso;
	var tipoProducto;
	var continuar;

	var acumuladorPesoTotal= 0;
	
	var marcaMasCaro;
	var marcaMasBarato;
	
	
	var flagMarcaCaro = true;
	var flagMarcaBarato = true;

	var maximoPrecioLiquido;
	var minimoPrecioSolido;

	do
	{
		marca = prompt("Ingrese marca : ");
		while(isNaN(marca) == false || marca == "")
		{
			marca = prompt("Incorrect, ingrese marca :");
		}

		precio = parseInt(prompt("Ingrese precio : "));
		while(isNaN(precio))
		{
			precio = parseInt(prompt("Incorrecto, Ingrese precio : "));
		}

		peso = parseInt(prompt("Ingrese peso (kg) : "))
		while(isNaN(peso))
		{
			peso = parseInt(prompt("Incorrecto, Ingrese peso (kg) : "))
		}

		tipoProducto = prompt("Ingrese tipo de producto (solido/liquido) : ");
		while(tipoProducto != "solido" && tipoProducto != "liquido")
		{
			tipoProducto = prompt("Ingrese tipo de producto (solido/liquido)");
		}

		acumuladorPesoTotal += peso
		
		switch (tipoProducto) {
			case "liquido":
				if(flagMarcaCaro == true || precio > maximoPrecioLiquido)
				{
					maximoPrecioLiquido = precio;
					marcaMasCaro = marca;
					flagMarcaCaro = false;
				}
				break;
			case "solido":
				if(flagMarcaBarato == true || precio < minimoPrecioSolido)
				{
					minimoPrecioSolido = precio;
					marcaMasBarato = marca;
					flagMarcaBarato = false;
				}
				break;
		}


		console.log("Marca : " + marca);
		console.log("Precio : " + precio);
		console.log("Peso : " + peso);
		console.log("Tipo Producto : " + tipoProducto);
	
	}while(continuar = confirm("¿Quiere seguir ingresando mas productos? :"));
	
	
	console.log("Peso Total de la compra : " + acumuladorPesoTotal + " kgs"); // Punto A

	if(flagMarcaCaro == false)
	{
		console.log("Marca del Liquido mas caro : " + marcaMasCaro); // Punto B
	}
	else
	{
		console.log("No se ingresaron liquidos")
	}

	if(flagMarcaBarato == false)    
	{
		console.log("Marca Sólido mas barato : " + marcaMasBarato); // Punto C
	}
	else
	{
		console.log("No se ingresaron sólidos")
	}

}

	
	/*var marca;
	var peso;
	var precio;
	var tipo;
	var respuesta;
	var acumuladorPeso;
	var marcaLiquidoCaro;
	var precioLiquidoIngresaso;
	var banderaPrimerLiquido;
	var banderaSolidoMasBarato;
	var marcaMasBaratoSolido;
	var precioMasBaratoSolido;

	banderaSolidoMasBarato=0;
	banderaPrimerLiquido=0;
	acumuladorPeso=0;
	

	respuesta="si";

	while(respuesta=="si")
	{
		marca=prompt("Ingrese por favor la marca");//puede ser numero
		while(marca==" ")
		{
			tipo=prompt("Error, ingrese una marca valida");
		}

		tipo=prompt("Ingrese por favor el tipo");
		while(!isNaN(tipo)||tipo!="solido"&&tipo!="liquido")
		{
			tipo=prompt("Error, ingrese un tipo valido");
		}

		peso=prompt("Ingrese el peso en kilogramos");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1)
		{
			
			peso=prompt("Error, Ingrese el peso en kilogramos");
			peso=parseInt(peso);
		}

		precio=prompt("Ingrese el precio por favor");
		precio=parseInt(precio);
		while(isNaN(precio)||precio<1)
		{
			precio=prompt("Ingrese el precio por favor");
			precio=parseInt(precio);

		}

		acumuladorPeso=acumuladorPeso+peso;		
  		

		switch(tipo)
		{
			case "liquido":
				if(banderaPrimerLiquido==0)
				{
					marcaLiquidoCaro=marca;
					precioLiquidoIngresaso=precio;
					banderaPrimerLiquido=1;
				}
				else
				{
					if(precio>precioLiquidoIngresaso)
					{
						marcaLiquidoCaro=marca;
						precioLiquidoIngresaso=precio;
					}
				}
				break;
			case "solido":
				if(banderaSolidoMasBarato==0)
				{
					marcaMasBaratoSolido=marca;
					precioMasBaratoSolido=precio;
					banderaSolidoMasBarato=1;
				}
				else
				{
					if(precio<precioMasBaratoSolido)
					{
						marcaMasBaratoSolido=marca;
						precioMasBaratoSolido=precio;
					}
				}
				break;
					
		}//cierre switch

		
		respuesta=prompt("Desea seguir?")
	} //cierre while



 console.log("El peso total de la compra es: "+acumuladorPeso); 					
 console.log("La marca del más caro de los liquidos es: "+marcaLiquidoCaro);
 console.log("La marca del más barato de los solidos es: "+marcaMasBaratoSolido);*/


