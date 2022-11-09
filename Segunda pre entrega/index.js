/* E-Commerce */
let producto = parseInt(
    prompt(
    'Selecciona el computador que deseas comprar: 1.Apple - 2.HP - 3.Samsung - 4.Toshiba'
    )
)
let seguirComprando = true
let totalCompra = 0
let decision

const productosArray = []

class NewProduct{
    constructor(id,name,price){
    this.id = id
    this.name = name;
    this.price = price;
    }
}
const apple = new NewProduct(1,'Apple',3000);
productosArray.push(apple);
const hp = new NewProduct(2,'HP',1500);
productosArray.push(hp);
const samsung = new NewProduct(3,'Samsung',2000);
productosArray.push(samsung);
const toshiba = new NewProduct(4,'Toshiba',2500);
productosArray.push(toshiba);
  /* apple.price = 3000 */

console.log(apple)
console.log(productosArray[producto-1])
console.log(samsung)
console.log(productosArray)

while (seguirComprando === true) {
/*     if (producto === apple.id) {
    totalCompra = totalCompra + apple.price
    } else if (producto === hp.id) {
    totalCompra = totalCompra + hp.price
    } else if (producto === samsung.id) {
    totalCompra = totalCompra + samsung.price
    } else if (producto === toshiba.id) {
    totalCompra = totalCompra + toshiba.price
    }
 */  
    totalCompra = totalCompra + productosArray[producto-1].price

    decision = parseInt(prompt('Desea continuar comprando? 1 - Si . 2 - En otro momento'))
    if (decision === 1) {
    producto = parseInt(
        prompt(
    'Escoge el producto que deseas comprar: 1.Apple - 2.HP - 3.Samsung - 4.Toshiba'
        )
    )
    } else {
    seguirComprando = false
    }
}  
const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compra con descuento es de dolares ${totalCompraConDescuento}`)
alert(`Felicidades, el total de tu descuento fue de dolares ${totalCompraConDescuento-totalCompra}`)
alert(`Gracias por tu compra!`)

function descuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
    descuento = 10
    } else if (valor > 1000 && valor <= 2000) {
    descuento = 20
    } else {
    descuento = 25
    }

    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
}