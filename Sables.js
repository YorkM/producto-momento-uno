// 4. PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo
// de 20 sables de luz y contabilizar la cantidad de sables que
// tienen energías menores a 20 Joules.

let sables =
[
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 18, portador: "York M"},
 {color: "Verde", energia: 10, portador: "Obi Wan"},
 {color: "Rojo", energia: 20, portador: "Juan C"},
 {color: "Azul", energia: 10, portador: "Jhon F"},
 {color: "Rosa", energia: 20, portador: "Luz M"},
 {color: "Purpura", energia: 10, portador: "Paola"},
 {color: "Amarillo", energia: 15, portador: "York M"},
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 20, portador: "York M"},
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 18, portador: "York M"},
 {color: "Verde", energia: 10, portador: "Obi Wan"},
 {color: "Rojo", energia: 20, portador: "Juan C"},
 {color: "Azul", energia: 10, portador: "Jhon F"},
 {color: "Rosa", energia: 20, portador: "Luz M"},
 {color: "Purpura", energia: 10, portador: "Paola"},
 {color: "Amarillo", energia: 15, portador: "York M"},
 {color: "Verde", energia: 50, portador: "Obi Wan"},
 {color: "Amarillo", energia: 20, portador: "York M"}
]

console.log(sables)

let filtradoEnergias = sables.filter(function(sable){
    return(sable.energia < 20)
})
console.log(filtradoEnergias)
console.log(`Las energias menores de 20 Joules son ${filtradoEnergias.length}`)

console.log('')

filtradoEnergias.forEach(element => {
    let energiasMenores =`Energia en Joules: ${element.energia} - Color: ${element.color} - Portador: ${element.portador}`
    console.log(energiasMenores)
}); 