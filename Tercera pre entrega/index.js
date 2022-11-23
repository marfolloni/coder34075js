
class Producto {
    constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    }
  }
  const producto1 = new Producto(1, "Apple", 3000);
  const producto2 = new Producto(2, "HP", 1500);
  const producto3 = new Producto(3, "Samsung", 2000);
  const producto4 = new Producto(4, "Toshiba", 2500);
  const producto5 = new Producto(5, "Acer", 1700);
  const producto6 = new Producto(6, "Dell", 3500);
  const producto7 = new Producto(7, "Sony", 4000);
  const producto8 = new Producto(8, "LG", 2150);
  const producto9 = new Producto(9, "Xaomi", 2500);
  const producto10 = new Producto(10, "Motorola", 2500);

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
]
  const divProductos = document.querySelector(`#divProductos`)

  productosArray.forEach(producto => {
    divProductos.innerHTML = divProductos.innerHTML + `
    <div id="${producto.id}" class="card cardProducto">
    <div class="card-body">
    <h5 class="card-title">${producto.name}</h5>
    <p class="card-text"> $ ${producto.price}</p>
    <button id="${producto.id}" class="btn btn-primary">Comprar</button>
    </div>
    </div>
    `
  })

  const carrito = []
  const botonesComprar = document.querySelectorAll(`.btn-primary`)
  console.log(botonesComprar)

botonesComprar.forEach(boton=>{
    boton.onclick = () => {
        const producto = productosArray.find(prod=>prod.id===parseInt(boton.id))
        
        const productoCarrito = {
            id: producto.id,
            nombre: producto.name,
            price: producto.price,
            cantidad: 1
        }

        const indexCarrito = carrito.findIndex(prod=>prod.id === producto.id)
        if(indexCarrito === -1){
            carrito.push(productoCarrito)
        } else { 
            carrito[indexCarrito].cantidad += 1
        }
        /* console.log(producto) */
        console.log(carrito)
    }

})