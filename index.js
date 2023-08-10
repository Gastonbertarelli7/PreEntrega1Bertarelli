let hacerLista = confirm("Queres hacer la lista del super?")

if (hacerLista) {
    let productos = Number(prompt("Cuantos productos queres comprar?"))


    for (let i = 1; i <= productos; i++) {
        const producto = prompt(`Producto ${i}`)
        console.log(`${i} producto: ${producto}`)
    }
} else {
    alert("Gracias por tu tiempo")

}