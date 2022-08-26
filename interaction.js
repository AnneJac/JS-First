// Operaciones aritmetcas
var suma = 5.7 + 6.9
var resta = 5.0 - 2.7
var producto = 5 * 6
var division = 5 / 6
var residuo = 5 % 2
console.log(suma)
console.log(resta)
console.log(producto)
console.log(division)
console.log(residuo)

// Incrementar y reducir el valor de una variable
 suma++;
 residuo--;
console.log(suma);
console.log(residuo);

// Asignación de suma, resta, multiplicación y división
var c = 22;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c *= 5;
console.log(c);
c /= 5;
console.log(c);

// Cadenas de caracteres
var siPuedo;
siPuedo = "Todo lo que me propongo lo \"cumplo\"";
console.log(siPuedo);
siPuedo = "Todo lo que me propongo lo 'cumplo'";
console.log(siPuedo);

/* Secuenciad de escape
--------------------------
\' Comilla simple
\" Comilla doble
\\ Barra invertida
\n Linea nueva
\r Retorno de carro
\t Tabulación
\b Retroceso
\f Salto de página
---------------------------
*/

// Concatenar cadenas y construirlas con variables
 var nombreCompleto = "Anne" + " " + "Jacome ";
var apodo = "Dori";
console.log("Mi apodo es " + apodo);

// Agregar variables a cadenas
nombreCompleto += apodo;
console.log(nombreCompleto);

// Notación de corchetes
var miCadena = "Anne";
console.log(miCadena.length);
console.log(miCadena [0]);
miCadena [3] = "y"; // No se puede cambiar un solo valor de la cadena, si lla cadena completa (inmutabilidad)
miCadena = "Anny";
console.log(miCadena);
console.log(miCadena [miCadena.length - 1]);
n = 2;
console.log(miCadena [miCadena.length - n]);

// Arreglos
var miArreglo = ["Anne", 23, "azul", "Tomy", 1.59];
var miArregloAnidado = [["Anne", 23],["Caro", 29]];
console.log(miArreglo [4]);
console.log(miArregloAnidado [0][1]);
miArreglo [0] = "Dori";
console.log(miArreglo);

// Métodos
var notasMusicales = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
console.log(notasMusicales);
notasMusicales.push ("Do"); // AuAgregar un elemento al final del arreglo
console.log(notasMusicales);
notasMusicales.pop ("Do"); // Remover un elemento al final del arreglo
console.log(notasMusicales);
notasMusicales.shift (); //Remover el primer elemento del arreglo
console.log(notasMusicales);
notasMusicales.unshift ("Do"); //Agregar un elemneto al principio del arreglo
console.log(notasMusicales);

// Funciones (a y b son parametros y los valores asignados son los argumentos)
function sumar(a, b) {
    var suma = a + b;
    console.log ("El resultado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);

// Ambito global y local
var miNombre = "Anne"; //Esta variable es global y se mostrará cualquier parte del programa

function mostrarMiNombre () {
    var miNombre = "Dori"; //Esta variable es local y se mostrará solo al correr la función
    console.log(miNombre);
}
mostrarMiNombre();
console.log(miNombre)

//Return
function restar(a,b){
    return a - b;
}
console.log(restar(4,2));

function meLlamo (nombreCompleto){
    return "Me llamo " + nombreCompleto;
}
var nombre = meLlamo("Anne Jacome");
console.log(nombre);


//Próximo en la fila (queue)
function proximoEnLaFila(arreglo, elemento){
    arreglo.push(elemento); //Agregar al final del arreglo
    return arreglo.shift(); //Remover el primer elemento del arreglo
}
var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Despues: "+  JSON.stringify(miArreglo));

//Valores booleanos
console.log(5 == 5) ;//Igualdad
console.log(5 == "5");//Igualdad
console.log(5 === "5"); //Igualdad estricta
console.log(5 != 6); //Desigualdad
console.log(5 != "5"); //Desigualdad
console.log(5 !== "5"); //Desigualdad estricta
console.log(7 > 5); //Operador mayor que
console.log(5 >= 5); //Operador mayor que o igual que
console.log(7 < 9); //Operador menor que
console.log(7 <= 7); //Operador mayor que o igual que

//Operadores lógicos and, or, not
var a = 9
console.log((a > 5) && (a < 10));
console.log((a > 5) && (a < 7));
console.log((a > 11) && (a < 10));
console.log((a > 11) && (a < 7));
console.log((a > 5) || (a < 10));
console.log((a > 5) || (a < 7));
console.log((a > 11) || (a < 10));
console.log((a > 11) || (a < 7));
console.log(a > 7);
console.log(!(a > 7));
console.log(a > 11);
console.log(!(a > 11));

//Sentencias condicionales if, else, else if
function numDivisibles(valor){
    if (valor % 2 == 0) {
        console.log("Divisible entre 2.");
    } else if (valor % 3 == 0) {
      console.log("Divisible entre 3.");
    } else {
      console.log("No es divisible entre las opciones.");
    } 
  } 
numDivisibles(2)
numDivisibles(15)
numDivisibles(7)

//Sentencia switch
function seleccionarComida(valor){
  var comida;
  switch (valor) {
    case 1:
      comida = "Pizza";
      break;
    case 2:
      comida = "Hamburguesa";
      break;
    case 3:
      comida = "Lasaña";
      break;
    default:
      comida = "Tacos";
      break;
  }
  return comida;
}
console.log(seleccionarComida(1));
console.log(seleccionarComida(2));
console.log(seleccionarComida(3));
console.log(seleccionarComida(10));

//Retornar valores booleanos
function menorQue(a,b) {
  return a < b;
}
console.log(menorQue(6,3));

//Retorno anticipado
function raizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}
console.log(raizCuadrada(5))
console.log(raizCuadrada(-5))

// Objetos
var misDatos = {
  "nombre": "Anne",
  "apellido": "Jacome",
  "apodo": "Dori",
  "ciudad": "Quito",
  "edad": 22,
  "nivel eduacativo": ["Universidad"],
  "hobbies": ["nadar", "pintar"]
};
console.log(misDatos);
console.log(misDatos.edad); //Notación de punto
console.log(misDatos[ "nivel eduacativo"]); //Notación de corchetes para propiedades de más palabras

// Acceder a propiedades en objetos
var misDatosLista = {
  1: "Anne",
  2: "Jacome",
  3: "Dori",
  4: "Quito",
  5: 22,
  6: "Universidad"
};
var posicion = 2;
console.log(misDatosLista[posicion]);

// Actializar propiedades en objetos
console.log(misDatos.nombre); 
misDatos.nombre = "Anny";
console.log(misDatos.nombre); 

// Agregar propiedades en objetos
console.log(misDatos.hobbies); 
misDatos.hobbies.push("bailar");
console.log(misDatos.hobbies); 

// Eliminar propiedades en objetos
console.log(misDatos.hobbies); 
delete misDatos.hobbies;
console.log(misDatos.hobbies); 

//Verificar propiedades
console.log(misDatos.hasOwnProperty("nombre"));

//Objetos más complejos (Arreglo de objetos)
var estudiantePrimaria = [
  {
    "nombre": "Diana",
    "apellido": "Saenz",
    "edad": 7,
    "calificiones": [9, 8, 10, 9]

  },
  {
    "nombre": "Luisa",
    "apellido": "Perez",
    "edad": 8,
    "calificiones": [8, 8, 7, 5]

  }

];
console.log(estudiantePrimaria[0].edad)
console.log(estudiantePrimaria[0].calificiones[2])

//Objeto dentro de otro objeto
var ropaMujer = {
  "pantalon": "azul",
  "zapato": "verde",
  "camisetas": {
    "blusas": {
      "ceda": "naranja",
      "poliester": "azul"
    },
    "polos": {
      "pana": "rojo",
      "algodon": "blanco"
    }
  }
};
console.log(ropaMujer.camisetas.polos)
console.log(ropaMujer.camisetas.polos.pana)

//Ciclo while (no hay número exacto de iteraciones (# repeticiones))
var i = 0;
while (i <= 3) {
  console.log("Se cumple la condición");
  i++;
}

//Ciclo for (se sabe número exacto de iteraciones), hay que especificar 3 aspectos: inicializar el valor de una variable, luego se especifica la condición de la variable si el ciclo continue o no, y al final debemos especificar como se quiere actualizar esa variable en cada iteración
var miArreglo = [];
for (var i = 0; i < 10; i++) {
  miArreglo.push(i);
} 
console.log(miArreglo)

var miArreglo = [];
for (var i = 0; i < 10; i += 2) {
  miArreglo.push("Se cumple");
} 
console.log(miArreglo)