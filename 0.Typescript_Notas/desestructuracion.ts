// Desestructurar objetos y arrays.
// es una manera sensilla de obtener sus contenidos.
// objetos y arrays anidados y más

let  avenger = {
  nombre : "Steve",
  clave: "Capitan America",
  poder: "Droga"
}

let { nombre, clave, poder } = avenger;
// Alias y seleccion de atributos
// no es necesesario tomarlos todos
// :alias no es necesario aclarar el tipo.
let { nombre : pepe, poder: jojo } = avenger;

console.log(nombre, clave, poder);
console.log(pepe, jojo);


// arrays

let avengers:string[] = ["Thor", "Steve", "Tony"];

//alias a los valores de dentro
//es necesario respetar los lugares.
let [thor, , ironman] = avengers;

console.log(thor, ironman);
