const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const botonIngresar = document.getElementById("ingresar");
const divInicial = document.getElementById("divInicial");
const divSaludar = document.getElementById("divSaludar");
const divConfirmar = document.getElementById("divConfirmar");
const divCards = document.querySelector(".cards");

botonIngresar.onclick = () => {
    if (inputNombre.value || inputApellido.value) {
        const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        };
    /* console.log(usuario) */
    /* inputNombre.value = ""; */
    /* inputApellido.value = ""; */
    localStorage.setItem("infoUsuario", JSON.stringify(usuario));
    divInicial.remove();

    const saludarTitulo = document.createElement("h2");
    saludarTitulo.innerText = `Hola ${usuario.nombre}. Selecciona tus productos que deseas comprar`
    divSaludar.append(saludarTitulo);
    }
};

const productos = []
class Producto{
    constructor(id,name,price,description,image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description; 
        this.image = image;
    }
}
const producto1 = new Producto(1,"Apple",3000,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
const producto2 = new Producto(2,"HP",1500,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
const producto3 = new Producto(3,"Samsung",2000,"I5",'https://images.unsplash.com/photo-1522205955123-895f7c4e5057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcCUyMHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
const producto4 = new Producto(4,"Toshiba",2500,"Intel I7",'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80');
const producto5 = new Producto(5,"Acer",1700,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
const producto6 = new Producto(6,"Dell",3500,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'); 
const producto7 = new Producto(7,"Sony",4000,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
const producto8 = new Producto(8,"LG",2150,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
const producto9 = new Producto(9,"Xaomi",2500,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
const producto10 = new Producto(10,"Motorola",2500,"I5",'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');

console.log(JSON.stringify(productos));

const productosArray = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
];
const divProductos = document.querySelector(`#divProductos`);

  productosArray.forEach((producto) => {
    divProductos.innerHTML =
    divProductos.innerHTML +
    `
    <div id="${producto.id}" class="card cardProducto">
    <img src="${producto.image} " class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.name}</h5>
    <p class="card-text"> ${producto.description}</p> 
    <p class="card-text"> $ ${producto.price}</p>
    <button id="${producto.id}" class="btn btn-primary">Comprar</button>
    </div>
    </div>
    `;
});



const carrito = [];
const botonesComprar = document.querySelectorAll(`.btn-primary`);
/* console.log(botonesComprar); */

botonesComprar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    );

    const productoCarrito = {
      id: producto.id,
      nombre: producto.name,
      price: producto.price,
      cantidad: 1,
    };

    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id);
    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad += 1;
    }
    /* console.log(producto) */
    console.log(carrito);
  };
});


const botonFinalizar = document.querySelector(`#finalizar`)
botonFinalizar.onclick = () => {
    const totalCompra = carrito.map(prod=>prod.price*prod.cantidad).reduce((elem1,elem2)=>elem1+elem2)
    alert(`El valor total de tu compra es de $${totalCompra}`)

/* const botonFinalizar = document.createElement("h2");
    botonFinalizar.innerText = `El valor total de tu compra es de $${totalCompra}`
    divFinalizar.append(botonFinalizar); */
}