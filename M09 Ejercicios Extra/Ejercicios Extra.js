/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre = [];
   for(clave in objeto) {
      var array = [clave, objeto[clave]];
      arrayPadre.push(array);
   }

   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contadorLetras = {};

   for(var i = 0; i < string.length; i++) {
      var letra = string[i];
      if(contadorLetras.hasOwnProperty(letra)) {
         contadorLetras[letra]++;
      } else {
         contadorLetras[letra] = 1;
      }
   }
   return ordenador(contadorLetras);

   function ordenador(objeto) {
      var ordenado = {};
      var claves = Object.keys(objeto).sort();
      claves.forEach(function(clave) {
         ordenado[clave] = objeto[clave];
      })

      return ordenado;
   }
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var letrasMinus = '';
   var letrasMayus = '';

   for(var i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()) {
         letrasMayus = letrasMayus + string[i];
      } else {
         letrasMinus = letrasMinus + string[i];
      }
   }

   return letrasMayus + letrasMinus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   function reversar(string) {
      return string.split("").reverse().join("");
   }

   var arregloPalabras = frase.split(" "); //['The', 'Henry', 'Challenge', ...]
   var arregloInvertidas = arregloPalabras.map(function(palabra) {
      return reversar(palabra) // ['ehT', 'yrneH', 'egnellahC', ...]
   })

   return arregloInvertidas.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var stringNumero = numero.toString();
   var stringReverso = stringNumero.split("").reverse().join("");

   if (stringNumero === stringReverso) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) { // "acabar" --> "r"
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringResultado = '';
   for(var i = 0; i < string.length; i++) { //b
      if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
         stringResultado = stringResultado + string[i];
      }
   }

   return stringResultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "unfortunately", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   //                                               i^
   //                               j^
   //                             aux^
   // Tu código:
   for(var i = 0; i < arrayOfStrings.length -1; i++) {
      for(var j = i + 1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
            var aux = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[j];
            arrayOfStrings[j] = aux;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   // [1,3,4,1]    [3,5,4,2]
   //        i
   //                     j
   var interseccion = [];

   for(var i = 0; i < array1.length; i++) {
      for(var j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            interseccion.push(array1[i]);
         }
      }
   }
   
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};