// Comision 49845
// Alumno: Ezequiel Cardozo Soto
// SEGUNDA pre-entrega JS
// Licoreria "Elissir Bebidas"
//ingresar nombre de la tienda
//ingresar horario
//1-Ingresar el nombre del trabajador
//2-permitir que solo el usuario mayor de Edad pueda comprar bebidas alcoholicas
// ingresar bebida// inicio del carrito de compras


const SI = `si`;
const NO = `no`;
const MAYOR_EDAD = 18;

let edadUsuario;
let nombreCliente;

class Tienda{
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;

    }
    estaAbierto(hora){
        if (((hora  >= 9) && (hora  <= 13))||((hora  >= 16) && (hora  <= 22))) {
            return true;
        }
        else{
            /* alert(`lo sentimos...estamos cerrados`); */
            return false;
        }
    }
}
const tienda1 = new Tienda("BlueLabel", "Calle JavasCript n-6");
console.log(tienda1);
const horarioTienda = 2

for (let index = 0; index < horarioTienda ; index++) {
    let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO DE ENTRADA AL NEGOCIO"));
    if(tienda1.estaAbierto(entrada)){
        alert("el sistema esta disponible  😁"+ entrada + `hs`)
    }else{
        alert("el sistema esta cerrado a esta hora 😣"+ entrada + `hs`);
    }
}






function saludar(trabajadorTienda) {
    alert(`Bienvenido ${trabajadorTienda}`);
}


let trabajadorTienda = prompt(`Estimado trabajador ingresa tu nombre`);
saludar(trabajadorTienda);

edadUsuario = parseInt(prompt(`Por favor ingrese la edad del cliente`));
if (edadUsuario >= MAYOR_EDAD) {
    alert(`El cliente puede seguir comprando`);

} else {
    alert(`No cumple la edad requerida`);
    alert(`introduzca edad valida`);
    edadUsuario = parseInt(prompt(`Por favor ingrese la edad del cliente`));
}


nombreCliente = prompt(`Bienvenido a Elissir bebidas!! \n Por favor ingrese nombre del cliente: `);


function Producto(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;

}



let nombreProducto = prompt(`Ingrese el nombre del Producto`);
let precioProducto = +prompt(`Ingrese el precio del producto`);
let marcaProducto = prompt(`Ingrese la marca del producto`);

const productoNuevo = new Producto(nombreProducto, precioProducto, marcaProducto);


function mostrarProducto(producto) {
    alert(
        ` 
        nombre:   ${producto.nombre} \n
        precio:   ${producto.precio} \n
        marca:   ${producto.marca}
        `
    )

}


mostrarProducto(productoNuevo);
mostrarProducto(producto1);

//aqui tambien implemente un array de carrito

const carrito = [ 
    { nombre: ' Johnnie Walker Blue Label', bebidaTipo: 'Whisky', precio: 310000},
    { nombre: ' Johnnie Walker Green Label', bebidaTipo: 'Whisky', precio: 210000},
    { nombre: ' Martin Miller s London Gin', bebidaTipo: 'Gin', precio: 55000},
    { nombre: ' Gin Bulldog London Dry 700 mL', bebidaTipo: 'Gin', precio: 40000},
    { nombre: ' Aperitivo Fernet Branca 750cc', bebidaTipo: 'Aperitivo', precio: 8500}
];

carrito.push({ nombre: 'Aperitivo Campari 750cc', bebidaTipo: 'Aperitivo', precio: 5500});

console.table( carrito );


for( let i=0; i<carrito.length; i++ ){
    console.log('Nombre ' +  carrito[i].nombre );
    console.log('Precio ' +  carrito[i].precio );    
}



/* alert(`Gracias estimado \n ${nombreCliente} \n vuelva pronto!`) */
