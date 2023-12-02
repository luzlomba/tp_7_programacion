console.log ("EJERCICIO N°1")
// 1) Dada una lista con cuentas bancarias con la siguiente información:
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
/*
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
*/

// h) Realiza una función que permita ordenar la lista según el importe de cada cuenta.

function OrdenarImporteDeMenorAMayor (listadoCuentas){
    const cuentasOrdenadas = listadoCuentas.sort((a, b) => a.importe - b.importe) //releer metodo SORT
        return cuentasOrdenadas
    }
console.log (OrdenarImporteDeMenorAMayor (cuentas))

// i) Realiza una función que permita ordenar la lista según el vencimientos de los plazos fijos. // RELEER!!!

function ordenarPorFechaVencimiento(cuentas) {
  for (let i = 0; i < cuentas.length - 1; i++) {
    for (let j = i + 1; j < cuentas.length; j++) {
      const fechaA = new Date(cuentas[i].plazoFijo[0].fechaCreacion);
      const fechaB = new Date(cuentas[j].plazoFijo[0].fechaCreacion);

      // Compara las fechas
      if (fechaA > fechaB) {
        // Intercambia las posiciones si la fechaA es mayor que fechaB
        const temp = cuentas[i];
        cuentas[i] = cuentas[j];
        cuentas[j] = temp;
      }
    }
  }
}

// Llama a la función de ordenación
ordenarPorFechaVencimiento(cuentas);

// Imprimir la lista ordenada
console.log(cuentas);

console.log ("EJERCICIO N°2")
// 2) Dada una lista con venta de pasajes con la siguiente información:
pasaje1 = {
categoria: "primera", // "segunda"
precio: 300,
descuento: 30,
estado: "disponible", // "vendido"
}

pasaje2 = {
categoria: "segunda", // "segunda"
precio: 200,
descuento: 20,
estado: "vendido", // "vendido"
}

pasaje3 = {
    categoria: "segunda", // "segunda"
    precio: 100,
    descuento: 10,
    estado: "disponible", // "vendido"
    }

pasaje4 = {
    categoria: "primera", // "segunda"
    precio: 500,
    descuento: 10,
    estado: "vendido", // "vendido"
}

pasajes = [pasaje1, pasaje2, pasaje3, pasaje4]

// a) Realiza una función que devuelva la cantidad de pasajes disponibles.

disponibles = 0
function pasajesDisponibles (listadoPasajes) {
    for (let index = 0; index < listadoPasajes.length; index++) {
        if (listadoPasajes[index].estado == "disponible") {
        disponibles++
        }
    }
    return disponibles
}
pasajesDisponibles (pasajes)
console.log (`La cantidad de Pasajes disponibles es ${disponibles}`)

//b) Realiza una función que ordene los pasajes por precio de mayor a menor. ((IMPORTANTE))

listaPasajesDeMayorAMenor = []
function ordenarDeMayorAMenor (listadoPasajes){
listaPasajesDeMayorAMenor.push (listadoPasajes.sort((a, b) => b.precio - a.precio))
return listaPasajesDeMayorAMenor
}
console.log (ordenarDeMayorAMenor(pasajes))

//c) Realiza una función que devuelva todos los pasajes con descuento mayor a un valor dado.

pasajesOrdenados = []
function descuentoMayorMenor (listadoPasajes, descuentoUsuario){
    for (let index = 0; index < listadoPasajes.length; index++) {
        if (listadoPasajes[index].descuento >= descuentoUsuario){
        pasajesOrdenados.push (listadoPasajes[index])
        }
    }
    return pasajesOrdenados
}
console.log (descuentoMayorMenor (pasajes, 20))

//d) Realiza una función que devuelva todos (los pasajes de una categoria especificada)--> lo modifique yo al enunciado
// las cuentas de un tipo de moneda especificado.
listaPasajesCategoria = []
function pasajesPorCategoria (listadoPasajes , categoriaElegida){
    for (let index = 0; index < listadoPasajes.length; index++) {
        if (listadoPasajes[index].categoria === categoriaElegida){
            listaPasajesCategoria.push (listadoPasajes[index])
        }       
    }
    return listaPasajesCategoria
}
console.log (pasajesPorCategoria (pasajes, "segunda"))

//e) Realiza una función que permita agregar un descuento a un pasaje y aplicarlo al importe.
pasajesConDescuento = []
function aplicarDescuento (listadoPasajes, pasajeBonificado, montoDescontar){
    for (let index = 0; index < listadoPasajes.length; index++) {
        if (listadoPasajes[index] = pasajeBonificado){
            listadoPasajes[index].
        }
        
    }
}