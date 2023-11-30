const cuenta1 = {
    tipo: "corriente", // "ahorro"
    importe: 200000,
    tipoMoneda: "peso", // "euro", // "dolar",
    plazoFijo: [{
    estado: "activo", // "inactivo"
    importe: 100000,
    fechaCreacion: "2020-01-01",
    plazo: 30, // en dias
    }],
    }

const cuenta2 = {
    tipo: "ahorro",
    importe: 300000,
    tipoMoneda: "dolar", // "euro", // "dolar",
    plazoFijo: [{
    estado: "inactivo", // "inactivo"
    importe: 200000,
    fechaCreacion: "2020-06-10",
    plazo: 60, // en dias
    }],
    }
const cuenta3 = {
    tipo: "ahorro", // "ahorro", "corriente"
    importe: 50000,
    tipoMoneda: "dolar", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "inactivo", // "inactivo", // "activo"
    importe: 50000,
    fechaCreacion: "2021-10-25",
    plazo: 45, // en dias
    }],
    }
const cuenta4 = {
    tipo: "corriente", // "ahorro", "corriente"
    importe: 150000,
    tipoMoneda: "euro", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "inactivo", // "inactivo", // "activo"
    importe: 100000,
    fechaCreacion: "2022-12-18",
    plazo: 45, // en dias
    }],
    }
const cuenta5 = {
    tipo: "ahorro", // "ahorro", "corriente"
    importe: 50000,
    tipoMoneda: "peso", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "activo", // "inactivo", // "activo"
    importe: 10000,
    fechaCreacion: "2023-01-25",
    plazo: 90, // en dias
    }],
    }

const cuenta6 = {
    tipo: "corriente", // "ahorro", "corriente"
    importe: 20000,
    tipoMoneda: "peso", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "activo", // "inactivo", // "activo"
    importe: 20000,
    fechaCreacion: "2023-11-28",
    plazo: 120, // en dias
    }],
    }
const cuenta7 = {
    tipo: "ahorro", // "ahorro", "corriente"
    importe: 250000,
    tipoMoneda: "dolar", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "activo", // "inactivo", // "activo"
    importe: 50000,
    fechaCreacion: "2021-08-14",
    plazo: 60, // en dias
    }],
    }
const cuenta8 = {
    tipo: "ahorro", // "ahorro", "corriente"
    importe: 130000,
    tipoMoneda: "peso", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "inactivo", // "inactivo", // "activo"
    importe: 30000,
    fechaCreacion: "2022-05-22",
    plazo: 120, // en dias
    }],
    }
const cuenta9 = {
    tipo: "ahorro", // "ahorro", "corriente"
    importe: 180000,
    tipoMoneda: "peso", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "activo", // "inactivo", // "activo"
    importe: 50000,
    fechaCreacion: "2023-07-03",
    plazo: 30, // en dias
    }],
    }
const cuenta10 = {
    tipo: "corriente", // "ahorro", "corriente"
    importe: 1000000,
    tipoMoneda: "euro", // "euro", // "dolar", // "peso"
    plazoFijo: [{
    estado: "activo", // "inactivo", // "activo"
    importe: 600000,
    fechaCreacion: "2022-03-16",
    plazo: 90, // en dias
    }],
    }

const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6, cuenta7, cuenta8, cuenta9, cuenta10]


// a) Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
// fecha dada.

cuentasActivas = []
cuentasActivasPorFecha = []
function pfActivoPorFecha (listadoCuentas , fecha) {
for (let index = 0; index < listadoCuentas.length; index++) {
    if (listadoCuentas[index].plazoFijo[0].estado === "activo"){
    cuentasActivas.push (listadoCuentas[index]);}
}
for (let index = 0; index < cuentasActivas.length; index++) {
    if (cuentasActivas[index].plazoFijo[0].fechaCreacion >= fecha){
    cuentasActivasPorFecha.push (cuentasActivas[index]);
}
}
return cuentasActivasPorFecha
}
console.log (pfActivoPorFecha(cuentas , "2023-01-01"))

// b) Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
// días.

cuentasPorPlazo = []
function pfPlazoMayor (listadoCuentas , dias) {
for (let index = 0; index < listadoCuentas.length; index++) {
    if (listadoCuentas[index].plazoFijo[0].plazo > dias){
        cuentasPorPlazo.push (listadoCuentas[index]);}
}
return cuentasPorPlazo
}
console.log (pfPlazoMayor (cuentas , 30))

// c) Realiza una función que devuelva todos las cuentas del tipo corriente.

cuentasCorrientes = []
function pfPorTipoDeCuenta (listadoCuentas , tipoDeCuenta) {
for (let index = 0; index < listadoCuentas.length; index++) {
    if (listadoCuentas[index].tipo === tipoDeCuenta) {
        cuentasCorrientes.push (listadoCuentas[index])
    }
}
return cuentasCorrientes
}
console.log (pfPorTipoDeCuenta (cuentas , "corriente"))

// d) Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.

cuentasPorMoneda = []
function pfPorMoneda (listadoCuentas , Moneda) {
    for (let index = 0; index < listadoCuentas.length; index++) {
        if (listadoCuentas[index].tipoMoneda === Moneda) {
            cuentasPorMoneda.push (listadoCuentas[index])
        }
    }
    return cuentasPorMoneda
}
console.log (pfPorMoneda (cuentas , "euro"))

// e) Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
// todas las cuentas en la lista.

cuentasModificadas = []
function mantenimientoDeCuenta ( listadoCuentas , descuentoPorMantenimiento){
    for (let index = 0; index < listadoCuentas.length; index++) {
        nuevoSaldo = listadoCuentas[index].importe - descuentoPorMantenimiento
        listadoCuentas[index].importe = nuevoSaldo
        cuentasModificadas.push (listadoCuentas[index])
    }
    return cuentasModificadas
}
console.log (mantenimientoDeCuenta (cuentas , 25))

// f) Realiza una función que permita incrementar un porcentaje dado (por veneficios
// exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.

cuentasConBeneficio = []
function beneficioExclusivo (listadoCuentas , incremento) {
    for (let index = 0; index < listadoCuentas.length; index++) {
        if (listadoCuentas[index].plazoFijo[0].importe > 500000){
        saldoConBeneficio = listadoCuentas[index].importe + (listadoCuentas[index].importe * incremento / 100)
        listadoCuentas[index].importe = saldoConBeneficio
        cuentasConBeneficio.push (listadoCuentas[index])
        }
    }
    return cuentasConBeneficio
}
console.log (beneficioExclusivo (cuentas , 10))

// g) Realiza una función que permita cargar una nueva cuenta al final de la lista.

function cargarNuevaCuenta (listadoCuentas) {
    const cuentaNueva = {
        tipo: datoTipo = prompt ("Ingresar tipo de cuenta: corriente o ahorro"),
        importe: datoImporte = parseInt (prompt ("Ingresar importe de la cuenta:")),
        tipoMoneda: datoTipoDeMoneda = prompt ("Ingresar el tipo de moneda: peso, euro, dolar"),
        plazoFijo: [{
            estado: datoEstado = datoTipo = prompt ("Ingresar estado de la cuenta: activo o inactivo"),
            importe: datoImportePf = parseInt (prompt ("Ingresar importe del Plazo Fijo:")),
            fechaCreacion: datoFechaCreacion = prompt ("Ingresar fecha de creación en el formato año-mes-día"),
            plazo: parseInt (prompt ("Ingresar días del Plazo Fijo:")),
        }],
    }
    listadoCuentas.push (cuentaNueva)
    return listadoCuentas
}
console.log (cargarNuevaCuenta (cuentas))
