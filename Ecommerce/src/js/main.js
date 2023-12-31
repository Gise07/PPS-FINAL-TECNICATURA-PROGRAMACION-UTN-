import { products } from "./products.js";

const contenedorTarjeta = document.querySelector(".fila-productos");
//const seccionProductos = document.querySelector(".fila-productos");


function createTarjetaProductoInicio(products) {
    products.forEach(product => { 
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
           <img src="${product.image}" alt="${product.description}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <span class="precio">$${product.price}</span>
            <button data-product-id="${product.id}">Añadir al carrito</button> 
        `;
        contenedorTarjeta.appendChild(nuevoProducto);

        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(product));
        
    });
}

const loadSection = (section) => {
    contenedorTarjeta.innerHTML = "";
    products.forEach(product => {
        if (product.category === section) {
            createTarjetaProductoInicio([product]);
        }
    });
}

// Boton inicio
const btnInicio = document.getElementById("btn-inicio");
btnInicio.addEventListener("click", () => {
  location.reload();
});



const btnPantalonmujer= document.querySelector(".btn-Pantalonmujer");
const btnPantalonhombre = document.querySelector(".btn-Pantalonhombre");
const btnRemerahombre = document.querySelector(".btn-Remerahombre");
const btnRemeramujer = document.querySelector(".btn-Remeramujer");
const btnAccesorios = document.querySelector(".btn-Accesorios");

// Destacados
const btnMujeresDestacado = document.querySelector(".btn-mujeres-destacado");
const btnHombresDestacado = document.querySelector(".btn-hombres-destacado");
const btnCinturonesDestacado = document.querySelector(".btn-cinturones-destacado");


btnPantalonmujer.addEventListener("click", (e) => {
    loadSection('Pantalonmujer');
});

btnRemerahombre.addEventListener("click", (e) => {
    loadSection('Remerahombre');
});

btnPantalonhombre.addEventListener("click", (e) => {
    loadSection('Pantalonhombre');
});

btnRemeramujer.addEventListener("click", (e) => {
    loadSection('Remeramujer');
});

btnAccesorios.addEventListener("click", (e) => {
    loadSection('Accesorios');
})

// Destacados

btnMujeresDestacado.addEventListener("click", (e) => {
    loadSection('MujerDestacado'); 
});

btnHombresDestacado.addEventListener("click", (e) => {
    loadSection('HombreDestacado'); 
});

btnCinturonesDestacado.addEventListener("click", (e) => {
    loadSection('Cinturones'); 
});




//loggin boton activar 

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});



// Agregar event listener al botón "Sing up" en el formulario de registro
document.querySelector("#show-register").addEventListener("click", function () {
  openRegisterForm();
});

// Función para abrir el formulario de registro
function openRegisterForm() {
  var registerPopup = document.querySelector("#registerPopup");
  registerPopup.classList.add("active");
}


document.querySelector("#registerPopup .close-btn").addEventListener("click", function () {
    document.querySelector("#registerPopup").classList.remove("active");
});

// Agregar event listener al botón "Back to Login" en el formulario de registro
document.querySelector("#showLoginFromRegister").addEventListener("click", function () {
  var registerPopup = document.querySelector("#registerPopup");
  registerPopup.classList.remove("active");
  openLoginForm();
});

fetch('/api/user/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
    if (data.redirect) {
        window.location.href = data.redirect;
    } else {
        // Maneja otras respuestas o realiza otras acciones
    }
})
.catch(error => {
    console.error('Error:', error);
});