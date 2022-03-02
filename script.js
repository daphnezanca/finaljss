$(document).ready(function () {
  showItemsOnCart()
  calcTotal()
})

class Productos {

  constructor(id, tipo, imagePath, precio, marca, caracteristicas) {

    this.id = id;
    this.tipo = tipo;
    this.imagePath = imagePath;
    this.precio = precio;
    this.marca = marca;
    this.caracteristicas = caracteristicas;
  }
}
const stock = [{
    id: 001,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphone11.jpg',
    precio: 700,
    marca: 'APPLE',
    caracteristicas: 'Iphone 11 64GB'
  },
  {
    id: 002,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphone12.jpg',
    precio: 900,
    marca: 'APPLE',
    caracteristicas: 'Iphone 12 64GB'
  },
  {
    id: 003,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphone12pro.jpg',
    precio: 1250,
    marca: 'APPLE',
    caracteristicas: 'Iphone 12 PRO 128GB'
  },
  {
    id: 004,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphone13.jpg',
    precio: 1350,
    marca: 'APPLE',
    caracteristicas: 'Iphone 13 128GB'
  },
  {
    id: 005,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphone13pro.jpg',
    precio: 1550,
    marca: 'APPLE',
    caracteristicas: 'Iphone 13 PRO 128GB '
  },
  {
    id: 006,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphone13pro.jpg',
    precio: 1650,
    marca: 'APPLE',
    caracteristicas: 'Iphone 13 PRO MAX 256GB'
  },
  {
    id: 007,
    tipo: 'IPHONE',
    imagePath: './public/images/notebook/iphonese.jpg',
    precio: 600,
    marca: 'APPLE',
    caracteristicas: 'Iphone SE 64GB'
  },
  {
    id: 010,
    tipo: 'MACBOOK',
    imagePath: './public/images/notebook/macbookpro14.jpg',
    precio: 3050,
    marca: 'APPLE',
    caracteristicas: 'Mac PRO 14'
  },
  {
    id: 011,
    tipo: 'MACBOOK',
    imagePath: './public/images/notebook/macbookpro16.jpg',
    precio: 4050,
    marca: 'APPLE',
    caracteristicas: 'Mac PRO 16'
  },
  {
    id: 012,
    tipo: 'AURICULARES',
    imagePath: './public/images/notebook/airpods.jpg',
    precio: 300,
    marca: 'APPLE',
    caracteristicas: 'Airpods'
  },
  {
    id: 013,
    tipo: 'AURICULARES',
    imagePath: './public/images/notebook/fuentec.jpg',
    precio: 150,
    marca: 'APPLE',
    caracteristicas: 'Fuente C'
  },
  {
    id: 020,
    tipo: 'TECLADOS',
    imagePath: './public/images/notebook/earpods.jpg',
    precio: 100,
    marca: 'APPLE',
    caracteristicas: 'Earpods'
  },
  {
    id: 021,
    tipo: 'IWATCH',
    imagePath: './public/images/notebook/iwatch3.jpg',
    precio: 450,
    marca: 'APPLE',
    caracteristicas: 'Iwatch 3'
  },
  {
    id: 022,
    tipo: 'IWATCH',
    imagePath: './public/images/notebook/iwatch5.jpg',
    precio: 550,
    marca: 'APPLE',
    caracteristicas: 'Iwatch 5'
  },
  {
    id: 023,
    tipo: 'IWATCH',
    imagePath: './public/images/notebook/iwatchse.jpg',
    precio: 600,
    marca: 'APPLE',
    caracteristicas: 'Iwatch SE'
  },
  {
    id: 024,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/airtags.jpg',
    precio: 9100,
    marca: 'APPLE',
    caracteristicas: 'Airtags'
  },
  {
    id: 030,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/fuente.jpg',
    precio: 130,
    marca: 'APPLE',
    caracteristicas: 'Fuente Basica'
  },

  {
    id: 031,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/cable.jpg',
    precio: 100,
    marca: 'APPLE',
    caracteristicas: 'Cable'
  },
  {
    id: 032,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/magicmouse.jpg',
    precio: 200,
    marca: 'APPLE',
    caracteristicas: 'Magic Mouse'
  },
  {
    id: 033,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/pencil1.jpg',
    precio: 500,
    marca: 'APPLE',
    caracteristicas: 'Pencil 1'
  },
  {
    id: 034,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/pencil2.jpg',
    precio: 600,
    marca: 'APPLE',
    caracteristicas: 'Pencil 2'
  },
  {
    id: 035,
    tipo: 'ACCESORIOS',
    imagePath: './public/images/notebook/homepods.jpg',
    precio: 450,
    marca: 'APPLE',
    caracteristicas: 'Homepods'
  },
]

let producto = stock.map(item => new Productos(item.id, item.tipo, item.imagePath, item.precio, item.marca, item.caracteristicas))

// RENDERIZADO DE PRODUCTOS

for (const elemento of producto) {

  let cardNueva = document.createElement('div')
  cardNueva.innerHTML = `<div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
  <div class="card">
      <div class="inner-card"> <img src=${elemento.imagePath} class="img-fluid rounded">
          <div class="d-flex justify-content-between align-items-center mt-3 px-2">
              <h4>${elemento.marca}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
          </div>
          <div class="m-1 px-2"> <small>${elemento.caracteristicas}</small> </div>
          <div class="px-2">
              <h3 class="p-2">${elemento.precio}$</h3>
          </div>
          <div class="px-2"> <button id="${elemento.id}"class="btn btn-outline-primary px-3 agregar" onClick=agregarAlCarrito(event)>Agregar</button> </div>
      </div>
  </div>
  </div>`;

  let contenedor = document.getElementById("contenedor")

  contenedor.appendChild(cardNueva)
}

// SIDEBAR CARRITO
const btnToggle = document.getElementById('carrito1')
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');

});

const btnCerrar = document.getElementById('cerrado')
btnCerrar.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');

});


//AGREGAR AL CARRITO

function clickeado() {

  toastr.options = {
    "positionClass": "toast-bottom-right",
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",

  }
  toastr["success"]("Producto añadido al carrito")
}

function agregarAlCarrito(e) {
  clickeado();

  const productoClickeado = producto.find(item => item.id === parseInt(e.target.id))
  const cart = localStorage.getItem('MiCarrito')
  const prevCart = cart ?
    JSON.parse(cart) :
    []

  const newCart = [
    ...prevCart,
    productoClickeado
  ]

  localStorage.setItem("MiCarrito", JSON.stringify(newCart));
  showItemsOnCart()
  calcTotal()
}

//RENDERIZADO DE PRODUCTOS EN CARRITO
function showItemsOnCart() {
  const cart = JSON.parse(localStorage.getItem('MiCarrito'))
  const normalizeCart = cart ? cart : []
  $("#tbody").html(normalizeCart.map(item => buildTrItem(item)))
}

const buildTrItem = item => {
  return `<tr id=${item.id}><td>${item.marca}</td>
<td>${item.caracteristicas}</td>
<td>${item.precio}$</td>
<td><button id="${item.id}" class="btn-remover" onClick=removeItem(event)>-</button></td></tr>`
}

//REMOVER DE CARRITO
function removeItem(e) {
  const itemId = parseInt(e.target.id)
  const prevCart = JSON.parse(localStorage.getItem('MiCarrito'))
  const newCart = prevCart.filter(item => item.id !== itemId)
  localStorage.setItem("MiCarrito", JSON.stringify(newCart))
  showItemsOnCart()
  calcTotal()
}

//CALCULAR TOTAL
function calcTotal() {
  const cart = JSON.parse(localStorage.getItem('MiCarrito'));
  const total = (cart && cart.length) ?
    cart.reduce((acc, item) => {
      acc = acc + parseFloat(item.precio)
      return acc
    }, 0) :
    0
  $('#total').html(`<p>Total ${total}</p>`)

}

//BORRAR CARRITO

function vaciarCarrito() {
  localStorage.removeItem('MiCarrito')
  $('#tbody').empty()
  $('#total').html(`<p>Total 0</p>`)
}


// BARRA DE BUSQUEDA

$('#btnSearch').on("click", filtrar)

function filtrar(e) {

  e.preventDefault()

  document.getElementById("contenedor").innerHTML = '';

  let search = $('#search').val().toUpperCase()

  let filtro = producto.filter(element => element.marca == search || element.tipo == search)

  for (const element of filtro) {

    $("#contenedor").append(
      `<div> <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
<div class="card">
    <div class="inner-card"> <img src=${element.imagePath} class="img-fluid rounded">
        <div class="d-flex justify-content-between align-items-center mt-3 px-2">
            <h4>${element.marca}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
        </div>
        <div class="m-1 px-2"> <small>${element.caracteristicas}</small> </div>
        <div class="px-2">
            <h3 class="p-2">${element.precio}$</h3>
        </div>
        <div class="px-2"> <button id="${element.id}"class="btn btn-outline-primary px-3 agregar" onClick=agregarAlCarrito(event)>Agregar</button> </div>
    </div>
</div>
</div> </div>`);

  }

  if (filtro == '') {

    alert('NO SE HA ENCONTRADO NINGUN PRODUCTO')
  }

}

// FILTRO PRODUCTOS

let btnFiltro = document.getElementById('btnUno')
btnFiltro.addEventListener('click', tipoProducto)

function tipoProducto(e) {
  e.preventDefault();
  let n = 0;
  for (n = 0; n < document.fproductos.flexRadioDefault.length; n++) {

    if (document.fproductos.flexRadioDefault[n].checked) {
      break;
    }
  }

  document.getElementById("contenedor").innerHTML = '';

  let filtrar = producto.filter(element => element.tipo == document.fproductos.flexRadioDefault[n].value)

  for (const elemento of filtrar) {

    $("#contenedor").append(`<div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
    <div class="card">
        <div class="inner-card"> <img src=${elemento.imagePath} class="img-fluid rounded">
            <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                <h4>${elemento.marca}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
            </div>
            <div class="m-1 px-2"> <small>${elemento.caracteristicas}</small> </div>
            <div class="px-2">
                <h3 class="p-2">${elemento.precio}$</h3>
            </div>
            <div class="px-2"> <button id="${elemento.id}"class="btn btn-outline-primary px-3 agregar" onClick=agregarAlCarrito(event)>Agregar</button> </div>
        </div>
    </div>
    </div>`);

  }

}

function finalizarCompra() {

  const carrito = localStorage.getItem('MiCarrito')

if (carrito !== null) {

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Procesando su compra',
    showConfirmButton: false,
    timer: 2000
  })
  setTimeout(function () {
    window.location.href = "/pago.html";
  }, 1700);
}

else {
  alert('Agregue productos al carrito')
}
}


function email(){
  const datosEmail = $("#emailUsuario").val()
if (datosEmail === "") {

alert('Ingrese un email')
}
else {

  Swal.fire(
    'Suscripción registrada con exito',
    'Nos pondremos en contacto en menos de 24 hs',
    'success'
  )
}

}