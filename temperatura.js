/*3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día */

let calcularTemperatura = (temperaturaMax, temperaturaMin) => (temperaturaMax + temperaturaMin) / 2
let temperaturaMedia = calcularTemperatura(35, 33)
console.log(`La temperatura media de la Luna de Endor fue de ${temperaturaMedia} grados`)

