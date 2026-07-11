const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    console.log(window.scrollY);

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const cartButton = document.getElementById("cart-button");
const cartContainer = document.getElementById("cart-container");
const overlay = document.getElementById("overlay");

cartButton.addEventListener("click", function() {
    cartContainer.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function() {
    cartContainer.classList.remove("active");
    overlay.classList.remove("active");
});

fetch('https://dummyjson.com/products/category/beauty')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const contenedor = document.getElementsByClassName("products-container");
        data.products.forEach(producto => {
            const productoCard = `
                <article class="product">
                    <img src="${producto.images[0]}" class="product-img" alt="${producto.title}">
                    <div class="product-info">
                        <p class="product-brand">${producto.brand}</p>
                        <h3 class="product-title">${producto.title}</h3>
                        <div class="product-container__price-button">
                            <p class="product-price">$${producto.price}</p>
                            <button class="addToCart" data-id="${producto.id}" data-name="${producto.title}" data-price="${producto.price}">+</button>
                        </div>
                    </div>
                </article>`;
            contenedor[0].innerHTML += productoCard;
        });

        var addToCartButtons = document.getElementsByClassName('addToCart');
        for (var i = 0; i < addToCartButtons.length; i++) {
            addToCartButtons[i].addEventListener('click', addProduct);
        }
    })
    .catch(error => {
        console.error('Error en la comunicación con la API:', error);
    });

document.addEventListener('DOMContentLoaded', function () {
    loadCart();
});

function addProduct(event) {
    var product = {
        id: event.target.getAttribute('data-id'),
        name: event.target.getAttribute('data-name'),
        price: event.target.getAttribute('data-price')
    }

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Producto agregado al carrito!");
    loadCart();
}

function loadCart() {
    var cartList = document.getElementById("cart-container-list");
    cartList.innerHTML = "";

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var cartEmpty = document.getElementById("cart-container-empty");

    var counter = document.getElementById("cart-counter");
    counter.textContent = cart.length;

    if (cart.length > 0) {
        counter.textContent = cart.length;
        counter.style.display = "flex";
        cartEmpty.textContent = "";
    } else {
        counter.style.display = "none";
        cartEmpty.textContent = "Aún no agregaste productos a tu pedido";
    }

    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
        var li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(li);
    }
}

var clearBtn = document.getElementById("cart-button-clear");
clearBtn.addEventListener("click", clearCart);

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}