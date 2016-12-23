
function calcular()
{
	var numero1 = document.getElementById("numero1").value;
	var numero2 = parseInt(document.getElementById("numero2").value);
	var salida = document.getElementById("salida");
	
	var suma=parseInt(numero1)+parseInt(numero2);

	if(numero1 == "" || numero2 == "" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert_num alert-danger"><p>No se ingreso ningun numero</p></div>';
	}
	else if (numero1 == 10 || numero2 == 10 ) 
	{
		salida.innerHTML = "1";
		//retorna 1
		document.getElementById("mensajes").innerHTML = '<div class="alert_num alert-danger"><p>Escribiste un "10"</p></div>';
	
	}
	else if	(suma == 10)
	{
		salida.innerHTML = "1";
		//retorna 1
		document.getElementById("mensajes").innerHTML = '<div class="alert_num alert-danger"><p>NLa suma es "10"</p></div>';
	
	}
	else 
	{
		salida.innerHTML = "0";
		//retorna 0
		document.getElementById("mensajes").innerHTML = '<div class="alert_num alert-danger"><p>No hay problemas</p></div>';
	
	}

}
