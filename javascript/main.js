const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const flechita = document.querySelector(".flechita");
const cardsConstainer = document.querySelector(".cards-container");

const barrasMenu = document.querySelector(".barritas");
const mobileMenu = document.querySelector(".menu-mobile");
const cart = document.querySelector(".cart");
const cartMobile = document.querySelector(".cart-mobile");
const order = document.querySelector(".my-order");
const productDetail = document.querySelector(".product-detail")

flechita.addEventListener("click", toggleMenu);
menuEmail.addEventListener("click", toggleMenu);
barrasMenu.addEventListener("click", barritas);
cart.addEventListener("click", shoppingCart);
cartMobile.addEventListener("click", shoppingCart);

function toggleMenu() {
  desktopMenu.classList.toggle("inactive");
}

function barritas() {
  mobileMenu.classList.toggle("inactive");
  order.classList.add("inactive");
  cardsConstainer.classList.toggle("inactive");
}

function shoppingCart() {
  order.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  cardsConstainer.classList.toggle("inactive");
}

// PRODUCT CARDS

const productList = [
  {
    name: "Camera",
    price: 320,
    img: "https://http2.mlstatic.com/D_NQ_NP_745276-MLV52320264720_112022-O.webp",
    id: 1,
    description: "A sony camera",
   },
  {
    name: "TV",
    price: 280,
    img: "https://http2.mlstatic.com/D_NQ_NP_988410-MLV52575152124_112022-W.webp",
    id: 2,
    description: "A new TV",
  },
  {
    name: "PlayStation 5",
    price: 600,
    img: "https://http2.mlstatic.com/D_NQ_NP_887928-MLV45188629838_032021-O.webp",
    id: 3,
    description: "",
  },
  {
    name: "Desktop",
    price: 300,
    img: "https://http2.mlstatic.com/D_NQ_NP_738099-MLV49532436089_032022-O.webp",
    id: 4,
    description: "",
  },
  {
    name: "Keyboard",
    price: 60,
    img: "https://http2.mlstatic.com/D_NQ_NP_799745-MLV50693244466_072022-O.webp",
    id: 5,
    description: "",
  },
  {
    name: "Mouse",
    price: 30,
    img: "https://http2.mlstatic.com/D_NQ_NP_935545-MLV43787380956_102020-O.webp",
    id: 6,
    description: "",
  },
  {
    name: "Hat",
    price: 10,
    img: "https://http2.mlstatic.com/D_NQ_NP_868146-MLV41782368839_052020-O.webp",
    id: 7,
    description: "",
  },
  {
    name: "Neckless",
    price: 8,
    img: "https://http2.mlstatic.com/D_NQ_NP_708319-MLV51755420966_092022-O.webp",
    id: 8,
    description: "",
  },
  {
    name: "Headphones",
    price: 25,
    img: "https://http2.mlstatic.com/D_NQ_NP_760753-MLV51571519729_092022-O.webp",
    id: 9,
    description: "",
  },
  {
    name: "Book",
    price: 20,
    img: "https://http2.mlstatic.com/D_NQ_NP_645385-MLV47017178168_082021-O.webp",
    id: 10,
        description: "",
  },
];

function products(arr) {
  for (product of arr) {
    const htmlCards = `<div class="product-card">
            <img src= ${product.img} onclick="change('${product.name}', '${product.price}', '${product.img}',' ${product.description}')">
            <div class="product-info">
                <div>
                    <p>$ ${product.price} </p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./Icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`;

    cardsConstainer.innerHTML += htmlCards;
  }
}

products(productList);

function change(itemName, itemPrice, itemImage, itemDescription) {
  const itemsHTML = `
          <div class="product-photo">
            <img
              src="${itemImage}"
              alt=""
            />
          </div>
          <div class="text-product">
            <p class="bold price">$ ${itemPrice}</p>
            <p class="product-name"> ${itemName}</p>
            <p class="text-description">${itemDescription}</p>
          </div>
          <div class="add-to-cart">
            <button>
              <img src="../Icons/bt_add_to_cart.svg" alt="" />Add to cart
            </button>
          </div>`;

  productDetail.innerHTML = itemsHTML;
  modal.style.display = "block";
}

// Get the button that opens the modal
var modal = document.getElementById("myModal");
// When the user clicks the button, open the modal

var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
