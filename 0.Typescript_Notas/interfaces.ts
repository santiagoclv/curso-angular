
interface Xmen {
  nombre: string,
  poder: string
}

interface Nombre{
  nombre: string
}

function enviarMision(xmen: {nombre:string}) {
  console.log("enviando a: " + xmen.nombre);
};

function enviarMisionNombre(xmen: Nombre) {
  console.log("enviando a: " + xmen.nombre);
};

function enviarCuartel(xmen: Xmen){
  console.log("volviendo: " + xmen.nombre);
};


let wolverine = {
  nombre: "Wolverine",
  poder: "Regeneracion"
};

let jane: Xmen = {
  nombre: "Jane",
  poder: "psicoslocos"
};

enviarMision(wolverine);
enviarCuartel(wolverine);
enviarMisionNombre(wolverine);

enviarMision(jane);
enviarCuartel(jane);
