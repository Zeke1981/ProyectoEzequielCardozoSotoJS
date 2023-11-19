// Comision 49795
// Alumno: Victor Ezequiel Cardozo Soto
// Primera pre-entrega
// Descripcion: Ticket de compra de Licoreria "Elissir Bebidas"


const SI = `si`;
const NO = `no`;
const MAYOR_EDAD = 18;

let edadUsuario;
let nombreCliente;
let nombreBebida;
let precio;
let cantidad;
let total = 0;
let fila;
let continuar;
let ticket = `Nombre     Precio      Cantidad        Subtotal \n  `


edadUsuario= parseInt(prompt(`Por favor ingrese la edad del cliente`));
if (edadUsuario >= MAYOR_EDAD) {
    alert(`El cliente puede seguir comprando`);

}else{
        alert(`No cumple la edad requerida`)
    }


nombreCliente = prompt(`Bienvenido a Elissir bebidas!! \n Por favor ingrese nombre del cliente: `);

do {
    nombreBebida = prompt(`Bebida para ${nombreCliente} \n Ingrese su bebida `);
    precio = +prompt(`Precio = `);
    cantidad = +prompt(`Cantidad`);
    if (precio === 0 && cantidad === 0) {
        alert(`por favor ingrese un numero mayor que 0`)
    }
    fila = `${nombreBebida}     ${precio}               ${cantidad}                 $${precio * cantidad} \n`;
    ticket = ticket + fila;
    total = cantidad * precio;

    continuar = prompt(`Desea sumar otra bebida? si/no`).toLowerCase();

}
while (continuar == `si`);
alert(ticket);
ticket = ticket + `TOTAL DE LA COMPRA: $${total}`;
alert(`Gracias estimado \n ${nombreCliente} \n vuleva pronto!`);



