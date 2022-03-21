// 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
// acceso a las naves de guerra los cuáles reposan en la base de datos
// central, para ello debe programar una función que permita recibir la
// palabra clave de cada nave y separar imprimiendo solo el nombre del
// piloto asignado a cada nave. 

function nombrarPiloto(cadenaTexto){
   return (cadenaTexto.split(":")[1])
}

let nombrarPiloto = cadenaTexto => cadenaTexto.split(":")[1]

let resultado = nombrarPiloto("0001:YorkLuzMa")
console.log(resultado)