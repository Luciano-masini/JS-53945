//   let nombre = prompt ("Ingrese su nombre aqui!")

//   let remeras = 5000;
//   let tazas = 2000;
//   let figuras = 6000;
//   let pines = 2500;


//  alert ("Bienvenidos/a " + nombre );

//   let pedir = prompt ("Ya sabe que es lo que va a Comprar? Ingrese SI o NO ");

//   if ((pedir ==="no") || (pedir==="No") || (pedir ==="NO") || (pedir ==="nO")){
//       alert ("Esperemos que regrese pronto para probar nuestros productos");
//   } else {
//       let orden = prompt ("Ingrese su : Remeras / Tazas / Figuras / Pines");


//   switch (orden) {
//       case "remeras":
//      alert ("Gracias por su pedido. Su total es de: $ " + remeras);
//      break;

//      case "tazas":
//      alert ("Gracias por su pedido. Su total es de: $ " + tazas);
//      break;

//     case "figuras":
//   alert ("Gracias por su pedido. Su total es de: $ " + figuras);
//   break;

//      case "pines":
//      alert ("Gracias por su pedido. Su total es de: $ " + pines);
//      break;
//  }
// }

// function agradecer (){
//     alert (nombre + ", ya hemos procesado su pedido. Se encuentra en preparacion. Pronto serás contactado.")
//  }
// agradecer ();


let totalCarrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let tazas = new Producto("Tazas", 2000)
let remeras = new Producto("Remeras", 5000)
let figuras = new Producto("Figuras", 6000)
let pines = new Producto("Pines", 2500)
let juegos = new Producto("Juegos", 10000)

const arrayProductos = [tazas,remeras,figuras,pines,juegos]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayProductos[0].nombre} por $${arrayProductos[0].precio}\nPulse 2 si desea llevar un ${arrayProductos[1].nombre} por $${arrayProductos[1].precio}\nPulse 3 si desea llevar un ${arrayProductos[2].nombre} por $${arrayProductos[2].precio}\nPulse 4 si desea llevar un ${arrayProductos[3].nombre} por $${arrayProductos[3].precio}\nPulse 5 si desea llevar un ${arrayProductos[4].nombre} por $${arrayProductos[4].precio}\nPulse 6 si desea filtrar por precio más bajo`))
    
    while (opciones < 1 || opciones > 6){
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayProductos[0].nombre} por $${arrayProductos[0].precio}\nPulse 2 si desea llevar un ${arrayProductos[1].nombre} por $${arrayProductos[1].precio}\nPulse 3 si desea llevar un ${arrayProductos[2].nombre} por $${arrayProductos[2].precio}\nPulse 4 si desea llevar un ${arrayProductos[3].nombre} por $${arrayProductos[3].precio}\nPulse 5 si desea llevar un ${arrayProductos[4].nombre} por $${arrayProductos[4].precio}\nPulse 6 si desea filtrar por precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayProductos[0]
        totalCarrito += arrayProductos[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayProductos[1]
        totalCarrito += arrayProductos[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayProductos[2]
        totalCarrito += arrayProductos[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayProductos[3]
        totalCarrito += arrayProductos[3].precio
    }
    else if (opciones == 5){
        productoElegido = arrayProductos[4]
        totalCarrito += arrayProductos[4].precio
    }
    else if (opciones == 6){
        arrayProductos.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayProductos[0].nombre} por $${arrayProductos[0].precio}\nPulse 2 si desea llevar un ${arrayProductos[1].nombre} por $${arrayProductos[1].precio}\nPulse 3 si desea llevar un ${arrayProductos[2].nombre} por $${arrayProductos[2].precio}\nPulse 4 si desea llevar un ${arrayProductos[3].nombre} por $${arrayProductos[3].precio}\nPulse 5 si desea llevar un ${arrayProductos[4].nombre} por $${arrayProductos[4].precio}`))
        while (opciones < 1 || opciones > 6){
            opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayProductos[0].nombre} por $${arrayProductos[0].precio}\nPulse 2 si desea llevar un ${arrayProductos[1].nombre} por $${arrayProductos[1].precio}\nPulse 3 si desea llevar un ${arrayProductos[2].nombre} por $${arrayProductos[2].precio}\nPulse 4 si desea llevar un ${arrayProductos[3].nombre} por $${arrayProductos[3].precio}\nPulse 5 si desea llevar un ${arrayProductos[4].nombre} por $${arrayProductos[4].precio}`))
        }
        if (opciones == 1){
            productoElegido = arrayProductos[0]
            totalCarrito += arrayProductos[0].precio
        }
        else if (opciones == 2){
            productoElegido = arrayProductos[1]
            totalCarrito += arrayProductos[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayProductos[2]
            totalCarrito += arrayProductos[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayProductos[3]
            totalCarrito += arrayProductos[3].precio
        }
        else if (opciones == 5){
            productoElegido = arrayProductos[4]
            totalCarrito += arrayProductos[4].precio
    }
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó al carrito, desea comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, desea pagar?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra")
            } else{
                alert("Ok, nos vemos pronto!")
            }
        }
    } else{
        let confirmacion4 = confirm("Va a seguir comprando?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Ok, nos vemos pronto!")
        }
    }
}

comprar()