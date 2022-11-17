//declaro mi array de productos
const productos = [
    { nombre: "galletas de avena", precio: 250 },
    { nombre: "jugo de arandanos", precio: 300 },
    { nombre: "levadura de cerveza", precio: 150 },
    { nombre: "galletas sin tacc", precio: 390 },
];

let carrito = []

let seleccion = prompt("Bienvenido a kefi Almacen Natural. ¿Estas buscando algun producto? \n SI \n NO ").toLowerCase();

while (seleccion != "si" && seleccion != "no") {
    alert ("Por favor selecciona una opciòn valida")
    seleccion  = prompt("¿Estas buscando algun producto?").toLowerCase();
}

if (seleccion == "si"){
    alert("Nuestros productos son")
    let todosProductos = productos.map((producto) => producto.nombre + " " +  "$ " + producto.precio  );
    alert(todosProductos.join(" - "))

    
}else if (seleccion == "no"){
    alert("Hasta Pronto!")
}
while (seleccion != "no"){
    let producto = prompt("Agrega un producto al carrito")
    let precio = 0

    if (producto == "galletas de avena" || producto == "jugo de arandanos" || producto == "levadura de cerveza" || producto == "galletas sin tacc") {
      switch (producto) {
        case "galletas de avena":
          precio = 250;
          break;
        case "jugo de arandanos":
          precio = 300;
          break;
        case "levadura de cerveza":
           precio = 150;
            break;
        case "galletas sin tacc":
          precio = 390;
           break;
           default:
               break;
      }  
      let unidades = parseInt(prompt("¿Cuantas unidades deseas comprar?"))
      carrito.push ({producto, unidades, precio})
      console.log(carrito)
    } else {
        alert("producto inexistente")
    }
    seleccion = prompt("Queres agregar otro producto a tu carrito? \n SI \n NO ").toLowerCase();
    while (seleccion === "no"){
        alert("Gracias por tu compra!")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
              total por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;  
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0) 
console.log(` El total de su compra es: ${total}`)