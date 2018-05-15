
// promesa con funcion flecha
let promFlecha = new Promise ( (resolve, reject) => {
  setTimeout( () => {
    console.log("Promesa terminada");
    // Termina bien
    // con parametro ????
    if (true)
      resolve("pepe");
    reject();
  }, 1500 )
} );


// promesa con funcion normal
// secomportan de la misma manera que la flecha
let promNormal = new Promise ( function(resolve, reject){
  setTimeout( () => {
    console.log("Promesa terminada");
    // Termina bien
    if (true)
      resolve("pepe");
    reject();
  }, 1500 )
} );

console.log("Paso A");

promFlecha.then(function(nombre: string){console.log("Todo bien Flecha", nombre)}, function(){console.log("Todo mal Flecha")});

console.log("Paso B");

promNormal.then(function(nombre: string){console.log("Todo bien Flecha", nombre)}, function(){console.log("Todo bien")});

console.log("Paso C");

console.log("Paso D");
