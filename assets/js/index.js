precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidad = document.querySelector(".cantidad")
total = document.querySelector(".valor-total")

function valorTotal(){
    var cantidadSpan = parseInt(cantidad.innerHTML);
    var valorTotal = precio * cantidadSpan;
    total.innerHTML = valorTotal;
}

function sumar(){
    cantidadSpan = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = cantidadSpan +1
    valorTotal()
    console.log("sumar")
}
function restar(){
    cantidadSpan = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = cantidadSpan -1
    valorTotal()
    console.log("restar")
}