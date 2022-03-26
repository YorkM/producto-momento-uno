// 5. PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// nave vendida, menos el 5% de deducciones aplicada solo a las
// comisiones. Codifica un programa que calcule e imprima el
// salario mensual de un vendedor dado;

let calcularSalario = (nombreTrabajador, salario, navesVendidas) =>{
    let comision1 = 1500000 * navesVendidas
    let deducciones = comision1 * 5 / 100
    let comisionTotal = comision1 - deducciones

    return (`El salario mensual del trabajador ${nombreTrabajador} es de $${salario + comisionTotal}`)
}
let salarioMensual = calcularSalario("York", 3000000, 2)
console.log(salarioMensual)


