//FINALIZAR COMPRA 
var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click', function () {
  var node;
  for (var i = 0; i < this.childNodes.length - 1; i++)
    node = this.childNodes[i];
  if (node.className === 'dropdown-select') {
    node.classList.add('visible');
    activeDropdown = node;
  };
})

window.onclick = function (e) {
  if (e.target.tagName === 'LI' && activeDropdown) {
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
      activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    } else if (e.target.innerHTML === 'American Express') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
      activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';
    } else if (e.target.innerHTML === 'Visa') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
      activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  } else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

//RENDERIZADO PRODUCTOS EN LOCAL STORAGE

function showItemsPago() {
  const cart = JSON.parse(localStorage.getItem('MiCarrito'))
  $("#tbody2").html(cart.map(item => buildTrItem2(item)))
}

const buildTrItem2 = item => {
  return `
  <p>${item.tipo}</p>
  <p> ${item.marca}</p>
  <p>${item.precio}$</p> 
`

}

function calcTotalPago() {
  const cart = JSON.parse(localStorage.getItem('MiCarrito'));
  const total = (cart && cart.length) ?
    cart.reduce((acc, item) => {
      acc = acc + parseFloat(item.precio)
      return acc
    }, 0) :
    0
  $('#total2').html(`<p>Total ${total} $</p>`)

}



//DATOS DEL COMPRADOR

class Pago {
  constructor(email, number, name, vencimiento, cvc) {

    this.email = email;
    this.number = number;
    this.name = name;
    this.vencimiento = vencimiento;
    this.cvc = cvc

  }

}


function finalizar() {

  const cliente = new Pago($('#email').val(), $('#number').val(), $('#name').val(), $('#vencimiento').val(), $('#cvc').val())

  const datos = localStorage.getItem("DatosCliente")
  const prevCart = datos ?
    JSON.parse(datos) : []

  const newCliente = [
    ...prevCart,
    cliente
  ]

  localStorage.setItem("DatosCliente", JSON.stringify(newCliente))

  Swal.fire(
    'Pago realizado con exito!',
    'Corroborá las instrucciones de retiro en tu correo',
    'success'
  )

}

showItemsPago()
calcTotalPago()