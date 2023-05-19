// OPERACION DE ASIGNACION
function ejercicio1() {
	var palabras;
	var numero1 = new Number();
	var numero2 = new Number();
	var misterio = new Boolean();
	var letra = new String();
	var palabra = new String();
	numero1 = 10;
	numero2 = 19.67;
	misterio = false;
	letra = "a";
	palabras = "hola";
}

function ejercicio2() {
	var num = new Number();
	document.write(" digite un valor entero: ",'<BR/>');
	num = Number(prompt());
	document.write("el numero es: ",num,'<BR/>');
}

function ejercicio3() {
	var nume1, suma;
	var resultado = new Number();
	var num1 = new Number();
	var num2 = new Number();
	document.write("digite un numero: ",'<BR/>');
	num1 = Number(prompt());
	document.write(" digite otro numero: ",'<BR/>');
	num2 = Number(prompt());
	resultado = nume1+num2;
	document.write("el resultado es: ",suma,num1+num2,'<BR/>');
}

// OPERADOR RELACIONALES
function ejercicio4() {
	var resultado = new Boolean();
	resultado = 10==20;
	document.write(" el resultado es: ",resultado,'<BR/>');
}

function ejercicio5() {
	var a = new Number();
	var b = new Number();
	var c = new Number();
	var resultado = new Number();
	document.write(" digite el valor de A: ",'<BR/>');
	a = Number(prompt());
	document.write(" digite el valor de B: ",'<BR/>');
	b = Number(prompt());
	document.write(" digite el valor de c: ",'<BR/>');
	c = Number(prompt());
	resultado = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	document.write("El resultado es: ",resultado,'<BR/>');
}

// solucion de operacion logica 
function ejercicio6() {
	var resultado;
	var a = new Number();
	var b = new Number();
	var resultados = new Boolean();
	document.write("digite el valor de A; ",'<BR/>');
	a = Number(prompt());
	document.write("digite el valor de B: ",'<BR/>');
	b = Number(prompt());
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
	document.write("el resultado es: ",resultado,'<BR/>');
}

// intercambiar el valor de 2 variables 
function ejercicio7() {
	var a = new Number();
	var b = new Number();
	var aux = new Number();
	document.write("digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("el nuevo valor de a es: ",a,'<BR/>');
	document.write("el nuevo valor de b es: ",b,'<BR/>');
}

// calcular la cantidad de segundos que estan incluidos en el
// numero de horas,minutos ,y segundos ingresados para el usuario.
function ejercicio8() {
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	var total_seg = new Number();
	document.write("digite las horas: ",'<BR/>');
	horas = Number(prompt());
	document.write("digite los minutos: ",'<BR/>');
	minutos = Number(prompt());
	document.write("digite los segundos: ",'<BR/>');
	seg = Number(prompt());
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos+seg;
	document.write("los segundos equivalentes son: ",total_seg,'<BR/>');
}

// hacer un programa para ingresar el radio de un sirculo y se 
// reporte su area y la longitud de la circunferencia.
// area = pi * radio^2
// lomgitud=2 * pi* radio
function ejercicio9() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("digite el valor del radio: ",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	document.write("el area de la circunferencia es: ",area,'<BR/>');
	document.write("la longitud es: ",lon,'<BR/>');
}

// un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujeres hay en un grupo de estudiantes.
function ejercicio10() {
	var total_estudiantes;
	var num_hombres = new Number();
	var num_mujeres = new Number();
	var tatal_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("digite el numero de hombres: ",'<BR/>');
	num_hombres = Number(prompt());
	document.write("digite el numero de mujeres: ",'<BR/>');
	num_mujeres = Number(prompt());
	total_estudiantes = num_hombres+num_mujeres;
	porcentajeh = num_hombres/total_estudiantes*100;
	porcentajem = num_mujeres/total_estudiantes*100;
	document.write("el porcentaje de hombres es: ",porcentajeh,"%",'<BR/>');
	document.write("el porcentaje de mujeres es: ",porcentajem,"%",'<BR/>');
}

// un profesor prepara cuestorios de fila a,b,c y quiere saber cuanto se tarde 
// en revisar el cuestonario
function ejercicio11() {
	var mminutos;
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("digite la cantidad de cuestonarios A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("digite la cantidad de cuestonarios B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("digite la cantidad de cuestonarios C: ",'<BR/>');
	cantidadc = Number(prompt());
	// calcular los minutos que se tardara por cada cuestonatio 
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// calculemos el tiempo tota que le toma revisar todos los cuestonarios 
	tiempo_total = tiempoa+tiempob+tiempoc;
	// Calculamos las horas y minutos 
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("se tardara ",horas,"horas ",mminutos,"minutos",'<BR/>');
}

// una tienda ofrece un descuento del 15% sobre el total de la 
// compra y un cliente desea saber cuanto debera pagar finalmente por su compra.
function ejercicio12() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite el precio a pagar: ",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("el precio a es de: ",precio_final,'<BR/>');
}

// un alumno quiere saber cual sera su calificacion final en la materia 
// de Algoritmo
// 55% del promediode sus tres calificaciones parciales 
// 15% de la calificacion de un trabajo final 
// 30%  de la calificacion del examne final
function ejercicio13() {
	var parcial1 = new Number();
	var parcial2 = new Number();
	var parcial3 = new Number();
	var promediop = new Number();
	var notasparcial = new Number();
	var examen_final = new Number();
	var notaexamen = new Number();
	var notatrabajo = new Number();
	var notafinaltrabajo = new Number();
	var notafinal = new Number();
	document.write("digite las 3 notas de los parciales ",'<BR/>');
	parcial1 = Number(prompt());
	parcial2 = Number(prompt());
	parcial3 = Number(prompt());
	promediop = (parcial1+parcial2+parcial3)/3;
	notasparcial = promediop*0.55;
	document.write("digite la nota del  examen final: ",'<BR/>');
	examen_final = Number(prompt());
	notaexamen = examen_final*0.3;
	document.write("digite la nota del trabajo final: ",'<BR/>');
	notatrabajo = Number(prompt());
	notafinaltrabajo = notatrabajo*0.15;
	notafinal = notasparcial+notaexamen+notafinaltrabajo;
	document.write("la calificacion final es: ",notafinal,'<BR/>');
}

// digite un numero entero y reporte si es par o impar.
function ejercicio14() {
	var num = new Number();
	document.write("digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write("el numero ",num," es par",'<BR/>');
	} else {
		document.write("el numero ",num," es impar",'<BR/>');
	}
}

// determinar si un alumno aprueba o reprueba un curso
// sabiendo que aprobara si su promedio de tres calificaciones es 
// mayor o ingual a 70.
function ejercicio15() {
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	document.write("digite las 3 calificaciones:",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>=70) {
		document.write("el alumno esta aprobado con: ",promedio,'<BR/>');
	} else {
		document.write(" el alumno esta desaprobado con: ",promedio,'<BR/>');
	}
}

// en un almacen se hace un 20% de descuento a los clientes cuya compra
// supere a los $100
function ejercicio16() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite la cantidad a pagar: ",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("el precio a pagar es: ",precio_final,'<BR/>');
}

// leer dos numeros; si son iguales que los multiplique,si el 
// primer es mayor que el segundo que los reste y si no que los sume
function ejercicio17() {
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		resultado = num1-num2;
	} else {
		if (num1>num2) {
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	document.write("el resultado es: ",resultado,'<BR/>');
}

// leer tres numeros diferentes e imprimir 
// el numero mayor de los tres.
function ejercicio18() {
	var mum2;
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	document.write("digite tres numeros diferentes: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	num3 = Number(prompt());
	if (num1>num2 && num1>num3) {
		document.write("el mayor es: ",num1,'<BR/>');
	} else {
		if (num2>num1 && num2>num3) {
			document.write("el mayor: ",mum2,'<BR/>');
		} else {
			document.write(" el mayor es: ",num3,'<BR/>');
		}
	}
}

// una fruteria ofrece las manzanas con descuento segun la siguiente tabla.
function ejercicio19() {
	var preciok = new Number();
	var kilos = new Number();
	var precioi = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("cuanto cuenta el kilo de manzanas? ",'<BR/>');
	preciok = Number(prompt());
	document.write("cuantos kilos de manzanas a comprado? ",'<BR/>');
	kilos = Number(prompt());
	precioi = preciok*kilos;
	if (kilos>=0 && kilos<=2) {
		descuento = 0;
	} else {
		if (kilos>=2.01 && kilos<=5) {
			descuento = precioi*0.1;
		} else {
			if (kilos>=5.01 && kilos<=10) {
				descuento = precioi*0.15;
			} else {
				descuento = precioi*0.2;
			}
		}
	}
	precio_final = precioi-descuento;
	document.write("el precio a pagar es: ",precio_final,'<BR/>');
}

// um programa que me demuestre los dias de la semana ingresando un numero 
// como el 1 al 7.
function ejercicio20() {
	var num = new Number();
	document.write(" digite un numero del dia de la semana(1-7): ",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("lunes",'<BR/>');
		break;
	case 2:
		document.write("martes",'<BR/>');
		break;
	case 3:
		document.write("miercoles",'<BR/>');
		break;
	case 4:
		document.write("jueves",'<BR/>');
		break;
	case 5:
		document.write("viernes",'<BR/>');
		break;
	case 6:
		document.write("sabado",'<BR/>');
		break;
	case 7:
		document.write("domingo",'<BR/>');
		break;
	default:
		document.write(" error, no existe dia para ese numero: ",'<BR/>');
	}
}

// muestre el significado de aniversario de cada decada haste los 60.
function ejercicio21() {
	var decada = new Number();
	document.write("digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("bodas de hojalata",'<BR/>');
		break;
	case 20:
		document.write("bodas de pocelana",'<BR/>');
		break;
	case 30:
		document.write("bodas de perlas",'<BR/>');
		break;
	case 40:
		document.write("bodas de rubi",'<BR/>');
		break;
	case 50:
		document.write("bodas de oro",'<BR/>');
		break;
	case 60:
		document.write("bodas de diamante",'<BR/>');
		break;
	default:
		document.write("decada no existente",'<BR/>');
	}
}

// programa que tenga un menu con las siguientes opciones 
function ejercicio22() {
	var opcion = new Number();
	document.write("menu",'<BR/>');
	document.write("1.elevar un numero a una potencia x",'<BR/>');
	document.write("2.sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3.salir ",'<BR/>');
	document.write("digite una opcion: ",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("digite la potencia",'<BR/>');
		num = Number(prompt());
		document.write("digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("el resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("digite un numero: ",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write(" el numero es: ",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("se equivoco de opcion de mune",'<BR/>');
	}
}


// ciclo del 1 al 10.
function ejercicio23() {
	var i = new Number();
	for (i=1;i<=10;i+=1) {
		document.write(i,'<BR/>');
	}
}

// ciclo repetitivo 
function ejercicio24() {
	var i = new Number();
	i = 1;
	do {
		document.write(i,'<BR/>');
		i = i+1;
	} while (i<=10);
}

// calcular la suma de los "n" primeros numeros.
function ejercicio25() {
	var n = new Number();
	var suma = new Number();
	var i = new Number();
	document.write("digite la cantidad de numeros a sumarse: ",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write(" la suma es : ",suma,'<BR/>');
}

// se desea calcular independiente la suma de los numeros pares y impares,
function ejercicio26() {
	var soma_pares;
	var suma_pares = new Number();
	var suma_impares = new Number();
	var i = new Number();
	suma_pares = 0;
	suma_impares = 0;
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = soma_pares+i;
		} else {
			suma_impares = suma_impares+i;
		}
	}
	document.write("la suma de pares es: ",suma_pares,'<BR/>');
	document.write("la suma es impares es: ",suma_impares,'<BR/>');
}

// leer 10 numeros e imprimir cuantos son positivos, cuantos son negativos
// y cuantos son neutros 
function ejercicio27() {
	var num = new Number();
	var i = new Number();
	var conteo_positivos = new Number();
	var conteo_negativos = new Number();
	var conteo_neutros = new Number();
	conteo_positivos = 0;
	conteo_negativos = 0;
	conteo_neutros = 0;
	for (i=1;i<=10;i++) {
	}
	document.write(i,"digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num==0) {
		conteo_neutros = conteo_neutros+1;
	} else {
		if (num>0) {
			conteo_positivos = conteo_positivos+1;
		} else {
			conteo_negativos = conteo_negativos+1;
		}
	}
	document.write("la cantidad de positivos es: ",conteo_positivos,'<BR/>');
	document.write("la cantidad de negativos es: ",conteo_negativos,'<BR/>');
	document.write("la cantidad de neutro es: ",conteo_neutros,'<BR/>');
}

// suponga que se tiene un conjunto de calificaciones de un
// grupo de 10 alumnos. realizar un algoritmo para calcular 
// la calificacion promedio
function ejercicio28() {
	var calificacion_promedipo;
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,". digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		suma = suma+calificacion;
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("la calificacion promedio es: ",calificacion_promedipo,'<BR/>');
	document.write("la calificacion mas baja es: ",calificacion_baja,'<BR/>');
}

// calcular el factorial de un numero mayor o igual a 0
function ejercicio29() {
	var factorial;
	var num = new Number();
	var i = new Number();
	var factoral = new Number();
	do {
		document.write("digite un numero; ",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	document.write("el factoral es; ",factoral,'<BR/>');
}

// calcular la siguiente sumatoria de los "n"n elementos.
function ejercicio30() {
	var sumar;
	var n_elementos = new Number();
	var i = new Number();
	var suma = new Number();
	document.write("digite la cantidad de elementos a sumarse: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	sumar = 0;
	while (i<=n_elementos) {
		suma = suma+Math.pow(i,2);
		i = i+1;
		document.write("la suma es: ",suma,'<BR/>');
	}
}

//infresar "n" enteros, visualizar la suma de los numeros pares 
//de la lista, cuantos numeros pares existen y cual es el promedio 
//de los numeros impares.

function ejercicio31() {
	var connteo_pares, num, n_elemento, promedio_impares, promedio_ompares, sumar_pares, suma_importantes;
	var n_elementos = new Number();
	var i = new Number();
	var suma_pares = new Number();
	var conteo_pares = new Number();
	var suma_impares = new Number();
	var conteo_impares = new Number();
	var promedio = new Number();
	document.write("digite la cantidad de elementos a ingresar: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	suma_pares = 0;
	conteo_pares = 0;
	suma_impares = 0;
	conteo_impares = 0;
	while (i<=n_elemento) {
		document.write(i,". digite un numero: ",'<BR/>');
		while (i<=n_elementos) {
			document.write(i,".digite un numero: ",'<BR/>');
			num = Number(prompt());
			if (num%2==0) {
				suma_pares = suma_pares+num;
				connteo_pares = conteo_pares+1;
			} else {
				suma_impares = suma_impares+num;
				conteo_impares = conteo_impares+1;
			}
		}
		i = i+1;
		if (conteo_pares==0) {
			document.write("no se ha digitado numeros pares",'<BR/>');
		} else {
			document.write(" la suma de los numeros pares es: ",sumar_pares,'<BR/>');
			document.write("el conteo de los numeres pares es: ",conteo_pares,'<BR/>');
		}
		if (conteo_impares==0) {
			document.write("no se han digitado numeros impares",'<BR/>');
		} else {
			promedio_ompares = suma_importantes/conteo_impares;
			document.write("el promedio de impares es: ",promedio_impares,'<BR/>');
		}
	}
}


// calcular la salida de salario y la sumatoria de todo el salario 
function ejercicio32() {
	var hora, resultado;
	var horas = new Number();
	document.write(" dijite hora de trabajo: ",'<BR/>');
	hora = Number(prompt());
	resultado = hora*2.25;
	document.write("su pago por hora:",resultado,'<BR/>');
	document.write("su pago por quinsena:",resultado*15,'<BR/>');
	document.write("su pago por mes:",resultado*30,'<BR/>');
}














function selectivo() {
	ejercicio1();
	ejercicio2();
	ejercicio3();
	ejercicio4();
	ejercicio5();
	ejercicio6();
	ejercicio7();
	ejercicio8();
	ejercicio9();
	ejercicio10();
	ejercicio11();
	ejercicio12();
	ejercicio13();
	ejercicio14();
	ejercicio15();
	ejercicio16();
	ejercicio17();
	ejercicio18();
	ejercicio19();
	ejercicio20();
	ejercicio21();
	ejercicio22();
	ejercicio23();
	ejercicio24();
	ejercicio25();
	ejercicio26();
	ejercicio27();
	ejercicio28();
	ejercicio29();
	ejercicio30();
    ejercicio31();
    ejercicio32();
}

