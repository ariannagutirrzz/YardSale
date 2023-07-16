const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const flechita = document.querySelector(".flechita");

const barrasMenu = document.querySelector(".barritas");
const mobileMenu = document.querySelector(".menu-mobile");
const cart = document.querySelector(".cart");
const order = document.querySelector(".my-order");

const cardsConstainer = document.querySelector(".cards-container")

flechita.addEventListener("click", toggleMenu);
menuEmail.addEventListener("click", toggleMenu);
barrasMenu.addEventListener("click", barritas);
cart.addEventListener("click", cartShopping);

function toggleMenu() {
  desktopMenu.classList.toggle("inactive");
}

function barritas() {
  mobileMenu.classList.toggle("inactive");
  order.classList.add("inactive");
  cardsConstainer.classList.add("inactive")
}

function cartShopping() {
  order.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
}

// PRODUCT CARDS

const productList = [
  {
    name: "Camera",
    price: 120,
    img: "https://images.pexels.com/photos/16840121/pexels-photo-16840121/free-photo-of-camera-lying-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "TV",
    price: 280,
    img: "https://images.pexels.com/photos/16840121/pexels-photo-16840121/free-photo-of-camera-lying-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "PlayStation 5",
    price: 600,
    img: "https://images.pexels.com/photos/16840121/pexels-photo-16840121/free-photo-of-camera-lying-among-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

function products (arr) {
    for(product of arr) {
        const htmlCards = `<div class="product-card">
            <img src= ${product.img}>
            <div class="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./Icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`
    
        const cardsConstainer = document.querySelector(".cards-container");
        cardsConstainer.innerHTML += htmlCards;
    
    };
}

products(productList);