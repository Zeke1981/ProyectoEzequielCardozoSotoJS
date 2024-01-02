// Comision 49845
// Alumno: Ezequiel Cardozo Soto
// Primera pre-entrega JS
// Descripcion: Ticket de compra de Licoreria "Elissir Bebidas"
//permitir que solo el usuario mayor de Edad pueda comprar bebidas alcoholicas


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

function saludar(){
    alert(`Bienvenido a Elissir Bebidas`);
}
saludar();

edadUsuario= parseInt(prompt(`Por favor ingrese la edad del cliente`));
if(edadUsuario >= MAYOR_EDAD) {
    alert(`El cliente puede seguir comprando`);
    
    
        
}else{
    alert(`No cumple la edad requerida`);
    alert(`introduzca edad valida`);
    edadUsuario= parseInt(prompt(`Por favor ingrese la edad del cliente`));
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
ticket = ticket + `TOTAL DE LA COMPRA: $${total}`;
alert(ticket);
alert(`Gracias estimado \n ${nombreCliente} \n vuelva pronto!`);



