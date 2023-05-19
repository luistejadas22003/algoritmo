// OPERACION DE ASIGNACION
Funcion ejercicio1
	definir numero1 como entero;
	definir numero2 como reales;
	definir misterio como logica;
	definir palabra como cadena;
	
FinFuncion

funcion ejercicio2
	definir num como enteros;
	escribir " digite un valor entero: ";
	leer num;
	escribir "el numero es: ",num;
FinFuncion


Funcion ejercicio3
	definir resultado como entero;
	definir num1 como entero;
    definir num2 como entero;

	escribir "digite un numero: ";
	leer num1;

    escribir " digite otro numero: ";
    leer num2;

	resultado <- nume1 + num2;

	escribir "el resultado es: ",suma num1 + num2;

FinFuncion

// OPERADOR RELACIONALES
Funcion ejercicio4
	definir resultado como logico;
	
	resultado <- 10 = 20;
	escribir " el resultado es: ",resultado;
FinFuncion



Funcion ejercicio5
	Definir a,b,c,resultado como reales;

    escribir " digite el valor de A: ";
    Leer a;
    escribir " digite el valor de B: ";
    Leer b;
	escribir " digite el valor de c: ";
    leer c;

    resultado <- (-b + rc(b^2 - 4*a*c))/(2*a);

    escribir "El resultado es: ", resultado;
FinFuncion

// solucion de operacion logica 
Funcion ejercicio6
	definir a,b como reales;
    definir resultados como logicos;
	
	
    escribir "digite el valor de A; ";
    leer a;
    escribir "digite el valor de B: ";
    leer b;
	
    resultado <- ((3+5*8)<3 y ((-6/3*4)+2<2)) o (a>b);
	
	escribir "el resultado es: ",resultado;
	
FinFuncion 


// intercambiar el valor de 2 variables 
Funcion ejercicio7
	definir a,b,aux como enteros;

    escribir "digite el valor de a: ";
    leer a;
    escribir "digite el valor de b: ";
    leer b;

    aux <- a;
    a <- b;
	b <- aux;

	escribir "el nuevo valor de a es: ",a;
	escribir "el nuevo valor de b es: ",b;

FinFuncion

// calcular la cantidad de segundos que estan incluidos en el
// numero de horas,minutos ,y segundos ingresados para el usuario.
Funcion ejercicio8
	definir horas,minutos,seg como enteros;
	definir horas_seg, minutos_seg, total_seg como enteros;
	
	escribir "digite las horas: ";
	leer horas;
	escribir "digite los minutos: ";
	leer minutos;
	escribir "digite los segundos: ";
	leer seg;
	
	horas_seg <- horas * 3600;
	minutos_seg <- minutos * 60;
	
	total_seg <- horas_seg +minutos + seg;
	escribir "los segundos equivalentes son: ",total_seg;
FinFuncion



// hacer un programa para ingresar el radio de un sirculo y se 
// reporte su area y la longitud de la circunferencia.
// area = pi * radio^2
// lomgitud=2 * pi* radio
Funcion ejercicio9
	definir radio,area,lon como real;
	escribir"digite el valor del radio: ";
	leer radio;
	
	area <- pi * radio^2;
	lon <- 2* pi * radio;
	
	escribir "el area de la circunferencia es: ",area;
	escribir "la longitud es: ",lon;
FinFuncion


// un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujeres hay en un grupo de estudiantes.
Funcion ejercicio10
	definir num_hombres, num_mujeres como enteros
	definir tatal_estudiantes como enteros
	definir porcentajeH, porcentajeM como reales 
	
	Escribir "digite el numero de hombres: "
	
	Leer num_hombres
	
	Escribir "digite el numero de mujeres: "
	
	Leer num_mujeres
	
	total_estudiantes <- num_hombres + num_mujeres 
	porcentajeH <- num_hombres / total_estudiantes *100
	porcentajeM <- num_mujeres / total_estudiantes *100
	
	Escribir "el porcentaje de hombres es: ",porcentajeH,"%"
	Escribir "el porcentaje de mujeres es: ",porcentajeM,"%"
FinFuncion


// un profesor prepara cuestorios de fila a,b,c y quiere saber cuanto se tarde 
// en revisar el cuestonario
Funcion ejercicio11
	definir cantidadA,cantidadB,cantidadC como enteros;
	definir tiempoA,tiempoB,tiempoC como enteros;
	definir tiempo_total como entero;
	definir horas,minutos como enteros;
	
	escribir "digite la cantidad de cuestonarios A: ";
	leer cantidadA;
	escribir "digite la cantidad de cuestonarios B: ";
	leer cantidadB;
	escribir "digite la cantidad de cuestonarios C: ";
	leer cantidadC;
	
	//calcular los minutos que se tardara por cada cuestonatio 
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	//calculemos el tiempo tota que le toma revisar todos los cuestonarios 
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	
	//Calculamos las horas y minutos 
	horas <-trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	
	escribir "se tardara ",horas,"horas ",mminutos,"minutos";
FinFuncion


// una tienda ofrece un descuento del 15% sobre el total de la 
// compra y un cliente desea saber cuanto debera pagar finalmente por su compra.
Funcion ejercicio12
	
	definir precio,descuento,precio_final como real;
	escribir "digite el precio a pagar: ";
	leer precio;
	descuento <- precio*0.15;
	precio_final <- precio - descuento;
	escribir "el precio a es de: ", precio_final;
	
FinFuncion



// un alumno quiere saber cual sera su calificacion final en la materia 
// de Algoritmo
// 55% del promediode sus tres calificaciones parciales 
// 15% de la calificacion de un trabajo final 
// 30%  de la calificacion del examne final
Funcion ejercicio13
	Definir parcial1,parcial2,parcial3,promedioP,notasparcial Como Real
	Definir examen_final,notaexamen Como Real
	Definir notatrabajo,notafinaltrabajo Como Real
	Definir notafinal Como Real
	
	Escribir 'digite las 3 notas de los parciales '
	
	Leer parcial1,parcial2,parcial3
	
	promedioP <- (parcial1+parcial2+parcial3)/3
	notasparcial <- promedioP*0.55
	
	Escribir 'digite la nota del  examen final: '
	
	Leer examen_final
	
	notaexamen <- examen_final*0.3
	
	Escribir 'digite la nota del trabajo final: '
	
	Leer notatrabajo
	
	notafinaltrabajo <- notatrabajo * 0.15
	notaFinal <- notasparcial+notaexamen+notaFinaltrabajo
	
	Escribir "la calificacion final es: ",notafinal
FinFuncion


// digite un numero entero y reporte si es par o impar.
Funcion ejercicio14
	Definir num Como Entero
	Escribir "digite un numero: "
	
	Leer num
	Si num mod 2 = 0 entonces 
		escribir "el numero " ,num, " es par";
	SiNo
		escribir "el numero " ,num, " es impar";
	FinSi
FinFuncion


// determinar si un alumno aprueba o reprueba un curso
// sabiendo que aprobara si su promedio de tres calificaciones es 
// mayor o ingual a 70.
Funcion ejercicio15
	definir mota1,nota2,nota3 como reales
	definir promedio como real
	Escribir "digite las 3 calificaciones:"
	Leer nota1,nota2,nota3
	promedio <- (nota1+nota2+nota3)/3
	Si promedio>=70 Entonces
		Escribir "el alumno esta aprobado con: ",promedio
	SiNo
		Escribir " el alumno esta desaprobado con: ",promedio
	FinSi
	
FinFuncion


// en un almacen se hace un 20% de descuento a los clientes cuya compra
// supere a los $100
funcion ejercicio16
	definir compra como real
	definir descuento,precio_final como real
	
	Escribir "digite la cantidad a pagar: "
	
	Leer compra
	Si compra>100 Entonces
		descuento <- compra * 0.2
	SiNo
		descuento <- 0
	FinSi
	precio_final <- compra - descuento
	Escribir "el precio a pagar es: ",precio_final
	
FinFuncion


// leer dos numeros; si son iguales que los multiplique,si el 
// primer es mayor que el segundo que los reste y si no que los sume
funcion ejercicio17
	definir num1,num2,resultado como reales;
	escribir "digite dos numeros: ";
	leer num1,num2;
	
	si num1=num2 Entonces
		resultado <- num1 - num2;
	sino 
		si num1>NUM2 Entonces
			resultado <- num1 - num2;
		sino
			resultado <- num1+ num2;
		FinSi
	FinSi
	escribir "el resultado es: ",resultado;
FinFuncion


// leer tres numeros diferentes e imprimir 
// el numero mayor de los tres.
Funcion ejercicio18
	definir num1,num2,num3 como reales
	Escribir "digite tres numeros diferentes: "
	Leer num1,num2,num3
	Si num1>num2 y num1>num3 Entonces
		Escribir "el mayor es: ",num1
	SiNo
		Si num2>num1 y num2>num3 Entonces
			Escribir "el mayor: ",mum2
		SiNo
			Escribir " el mayor es: ",num3
		FinSi
	FinSi
FinFuncion


// una fruteria ofrece las manzanas con descuento segun la siguiente tabla.
Funcion ejercicio19
	definir precioK,kilos,precioI como reales
	definir descuento,precio_final como reales 
	Escribir "cuanto cuenta el kilo de manzanas? "
	Leer precioK
	Escribir "cuantos kilos de manzanas a comprado? "
	Leer kilos
	precioI <- precioK * kilos
	Si kilos>=0 y kilos <=2 Entonces
		descuento <- 0
	SiNo
		Si kilos>=2.01 y kilos<=5 Entonces
			descuento <- precioI *0.1
		SiNo
			Si kilos>=5.01 y kilos<=10 Entonces
				descuento <- precioI*0.15
			SiNo
				descuento <- precioI*0.2
			FinSi
		FinSi
	FinSi
	precio_final <- precioI - descuento
	Escribir "el precio a pagar es: ",precio_final
FinFuncion


// um programa que me demuestre los dias de la semana ingresando un numero 
// como el 1 al 7.
Funcion ejercicio20
	definir num como entero;
	escribir " digite un numero del dia de la semana(1-7): ";
	leer num;
	segun num hacer
		1: escribir "lunes";
		2: escribir "martes";
		3: escribir "miercoles";
		4: escribir "jueves";
		5: escribir "viernes";
		6: escribir "sabado";
		7: escribir "domingo";
		De Otro Modo:
			escribir " error, no existe dia para ese numero: ";
	FinSegun
FinFuncion


// muestre el significado de aniversario de cada decada haste los 60.
Funcion ejercicio21
	definir decada como entero
	Escribir "digite una decada"
	Leer decada
	Segun decada Hacer
		10:
			Escribir "bodas de hojalata"
		20:
			Escribir "bodas de pocelana"
		30:
			Escribir "bodas de perlas"
		40:
			Escribir "bodas de rubi"
		50:
			Escribir "bodas de oro"
		60:
			Escribir "bodas de diamante"
		De Otro Modo:
			Escribir "decada no existente"
	FinSegun
FinFuncion

// programa que tenga un menu con las siguientes opciones 
Funcion ejercicio22
	definir opcion como entero
	Escribir "menu"
	Escribir "1.elevar un numero a una potencia x"
	Escribir "2.sacar la raiz cuadrada de un numero"
	Escribir "3.salir "
	Escribir "digite una opcion: "
	Leer opcion
	Segun opcion Hacer
		1:
			definir num,pot,resultado como reales
			Escribir "digite la potencia"
			Leer num
			Escribir "digite la potencia"
			Leer pot
			resultado <- num^pot
			Escribir "el resultado es: ",resultado
		2:
			definir num,resultado como reales
			Escribir "digite un numero: "
			Leer  num
			resultado <- rc(num)
			Escribir " el numero es: ",resultado
		3:
		De Otro Modo:
			Escribir "se equivoco de opcion de mune"
	FinSegun
FinFuncion


// ciclo del 1 al 10.
Funcion ejercicio23
	definir i como entero
	para i<-1 hasta 10 con paso 1 hacer;
		escribir i;
	FinPara
FinFuncion


// ciclo repetitivo 
Funcion ejercicio24
	definir i como entero
	
	i <- 1;
	repetir
		escribir i;
		i <- i +1;
	hasta que i>10;
FinFuncion


// calcular la suma de los "n" primeros numeros.
Funcion ejercicio25
	definir N,suma,i como entero;
	escribir "digite la cantidad de numeros a sumarse: ";
	leer N;
	suma <- 0;
	para i<- 1 hasta N con paso 1 Hacer
		suma<- suma + i;
		
	FinPara
	
	escribir " la suma es : ",suma;
FinFuncion



// se desea calcular independiente la suma de los numeros pares y impares,
Funcion ejercicio26
	Definir suma_pares,suma_impares,i Como Entero
	suma_pares <- 0
	suma_impares <- 0
	Para i<-2 Hasta 49 Hacer
		Si i MOD 2=0 Entonces
			suma_pares <- soma_pares+i
		SiNo
			suma_impares <- suma_impares+i
		FinSi
	FinPara
	Escribir 'la suma de pares es: ',suma_pares
	Escribir 'la suma es impares es: ',suma_impares
FinFuncion


// leer 10 numeros e imprimir cuantos son positivos, cuantos son negativos
// y cuantos son neutros 
Funcion ejercicio27
	definir num,i como entero
	definir conteo_positivos,conteo_negativos,conteo_neutros como enteros 
	conteo_positivos <- 0
	conteo_negativos <- 0
	conteo_neutros <- 0
	Para i<-1 Hasta 10 Hacer
		
	FinPara
	Escribir i,"digite un numero: "
	Leer num 
	Si num=0 Entonces
		conteo_neutros <- conteo_neutros+1
	SiNo
		Si num>0 Entonces
			conteo_positivos <- conteo_positivos+1
		SiNo
			conteo_negativos <- conteo_negativos+1
		FinSi
	FinSi
	Escribir "la cantidad de positivos es: ",conteo_positivos
	Escribir "la cantidad de negativos es: ",conteo_negativos 
	Escribir  "la cantidad de neutro es: ",conteo_neutros 
FinFuncion


// suponga que se tiene un conjunto de calificaciones de un
// grupo de 10 alumnos. realizar un algoritmo para calcular 
// la calificacion promedio
Funcion ejercicio28
	definir calificacion_promedio,calificacion_baja como real;
	definir calificacion,suma como real;
	definir i como enteros;
	suma <- 0;
	calificacion_baja <- 99999
	para i<-1 hasta 10 con paso 1 Hacer
		escribir i,". digite una calificacion: ";
		leer calificacion;
		suma <- suma + calificacion;
		si calificacion < calificacion_baja entonces
			calificacion_baja <- calificacion;
			
		FinSi
	FinPara
	calificacion_promedio <- suma/10;
	escribir "la calificacion promedio es: ", calificacion_promedipo;
    escribir "la calificacion mas baja es: ",calificacion_baja;
FinFuncion


// calcular el factorial de un numero mayor o igual a 0
Funcion ejercicio29
	definir num como entero 
	definir i,factoral como enteros
	Repetir
		Escribir "digite un numero; "
		Leer num
	Hasta Que num>=0
	i <- 1
	factorial <- 1 
	// 
	Mientras i<=num Hacer
		factorial <- factorial * i
		i <- i + 1
	FinMientras
	Escribir "el factoral es; ",factoral
FinFuncion

// calcular la siguiente sumatoria de los "n"n elementos.
Funcion ejercicio30
	definir n_elementos como enteros 
	definir i, suma como enteros 
	Escribir "digite la cantidad de elementos a sumarse: "
	Leer n_elementos 
	i <- 1
	sumar <- 0
	Mientras i<=n_elementos  Hacer
		suma <- suma + i^2
		i <- i +1
		Escribir "la suma es: ",suma
	FinMientras
FinFuncion


//infresar "n" enteros, visualizar la suma de los numeros pares 
//de la lista, cuantos numeros pares existen y cual es el promedio 
//de los numeros impares.
Funcion ejercicio31
	definir n_elementos,i,num como enteros;
	definir suma_pares,conteo_pares como enteros;
	Definir suma_impares,conteo_impares como enteros;
	definir promedio como real;
	escribir "digite la cantidad de elementos a ingresar: ";
	leer n_elementos;
	i <- 1;
	suma_pares <- 0;
	conteo_pares <- 0;
	suma_impares <- 0;
	conteo_impares <- 0;
	Mientras i <= n_elementos_Hacer
		escribir i, ". digite un numero: ";
		
		mientras i <= n_elementos_Hacer
			escribir 1, ".digite un numero: ";
			leer num; 
			si num mod 2=0 entonces 
				suma_pares <- suma_pares+ num;
				connteo_pares <- conteo_pares +1;
			SiNo
				suma_impares <- suma_impares + num;
				conteo_impares <- conteo_impares + 1;
			FinSi
			
			i <- i +1;
		FinMientras
		
		
		si pares = 0 entonces
			escribir"no se ha digitado numeros pares" ;
		SiNo
			escribir " la suma de los numeros pares es: ",sumar_pares;
			escribir "el conteo de los numeres pares es: ",conteo_pares;
		FinSi
		
		si conteo_impares = 0 Entonces
			escribir "no se han digitado numeros impares";
		SiNo
			promedio_ompares <- suma_importantes/conteo_impares;
			escribir "el promedio de impares es: ",promedio_impares;
			
		FinSi
	FinMientras
	
FinFuncion


// calcular la salida de salario y la sumatoria de todo el salario 
Funcion ejercicio32
	Definir horas Como Entero
	escribir " dijite hora de trabajo: "
	leer hora
	resultado <- hora * 2.25
	
	escribir "su pago por hora:",resultado;
	escribir "su pago por quinsena:",resultado*15;
	escribir"su pago por mes:",resultado*30;
FinFuncion





algoritmo selectivo 
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

FinAlgoritmo
