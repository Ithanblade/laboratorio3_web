//Ithan Camacho

// Variables
let Name = "Ithan Camacho";  //String
const cedula = 1752824803;  //Int
const mail = "ithan.camacho@epn.edu.ec";   //String
let userPrime = true                       //Boleano


//Datos Compuestos

let dataUser = {user: "Ithan", estado: true};      //Objeto
let UserDataFull = ["Ithan Camacho",  19, false];    //Array


let kindle = "International Version-Kindle Oasis";                     //String
let Price = "270.00";                                //String
let cantidad = 120;                                   //Int


//Propiedades
console.log(Name.toLocaleUpperCase());
console.log(kindle.toLocaleLowerCase());


//Template
console.log(`El Kindle ${kindle} tiene un precio de ${Price}: -- ${cantidad} disponibles.`);

// Cast
let Descuento = 0.5;
console.log(`El total de la compra de un kindle es de: ${+Price-(+Price*Descuento)}`);

//Operador Ternario
console.log(userPrime ? "Usuario Prime"  :  "Usuario Normal");

//Comparacion
let descuento = true;
descuento ?  console.log("Descuento aplicado")  : console.log("No hay descuento para el producto");

//Loops
const articulosDisponibles = ["Oasis", "Paperwhite", "Scribe"];
articulosDisponibles.forEach ((articulosDisponibles) => console.log(articulosDisponibles));

//Funciones
(function () {
    console.log("Funcion Anonima");         //Funcion Anonima
})

();

function getObjects() {                     //Funcion Declarada
    console.log("Tienda de Productos");
    
}
getObjects();                               

const Tarjeta = function () {               //Funcion Expresada
    console.log("Tarjeta VISA");
}

Tarjeta ();

const descuentoAplicado = () =>{ console.log("Descuento aplicado")}     //Funcion Flecha
descuentoAplicado()

const Validacion = function  (name, user) {
    console.log(`Bienvenido ${name} 
Estado del Prime: ${user}`);
}

Validacion(Name, userPrime);


//Retornos

function Information () {
    return {
        mail: "ithan.camacho@epn.edu.ec",
        id: "0012",
        Status: "Activo"
    }
}

console.log(Information());

//Objeto

const kindleOasis  = {
    id: 1414,
    marca:  "kindle",
    price: 270.00
}

console.log(`El valor del kindle es de:  ${kindleOasis.price}`);

//Destructuracion

const {id, marca, price} = kindleOasis;
console.log(marca);

//Spread

const productValidation = {
    name: "RX580", price: 99.98
}

const SendData = {...kindleOasis, ...productValidation}
console.log(SendData);




