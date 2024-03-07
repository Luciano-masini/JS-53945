let nombre = prompt ("Ingrese su nombre aqui!")

let remeras = 5000;
let tazas = 2000;
let figuras = 6000;
let pines = 2500;


alert ("Bienvenidos/a " + nombre );

let pedir = prompt ("Ya sabe que es lo que va a Comprar? Ingrese SI o NO ");

if ((pedir ==="no") || (pedir==="No") || (pedir ==="NO") || (pedir ==="nO")){
    alert ("Esperemos que regrese pronto para probar nuestros productos");
} else {
    let orden = prompt ("Ingrese su : Remeras / Tazas / Figuras / Pines");


switch (orden) {
    case "remeras":
    alert ("Gracias por su pedido. Su total es de: $ " + remeras);

    break;

    case "tazas":
    alert ("Gracias por su pedido. Su total es de: $ " + tazas);
    break;

    case "figuras":
    alert ("Gracias por su pedido. Su total es de: $ " + figuras);
    break;

    case "pines":
    alert ("Gracias por su pedido. Su total es de: $ " + pines);
    break;



}
}

function agradecer (){
    alert (nombre + ", ya hemos procesado su pedido. Se encuentra en preparacion. Pronto serás contactado.")
}
agradecer ();