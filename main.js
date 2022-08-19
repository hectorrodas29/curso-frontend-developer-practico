const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const iconoCarrito = document.querySelector(".navbar-shopping-cart");
const menuCarrito = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMobileMenu);
iconoCarrito.addEventListener("click", toggleMenuCarrito);
productDetailClose.addEventListener('click',closeProductDetail);

function toggleDesktopMenu() {
  if (!menuCarrito.classList.contains("inactive") || 
    !productDetail.classList.contains('inactive')) {
    menuCarrito.classList.add("inactive");
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!menuCarrito.classList.contains("inactive") ||
  !productDetail.classList.contains('inactive')) {
    menuCarrito.classList.add("inactive");
    productDetail.classList.add("inactive");
  }
  menuMobile.classList.toggle("inactive");
}

function toggleMenuCarrito() {
  if (
    !menuMobile.classList.contains("inactive") ||
    !desktopMenu.classList.contains("inactive") ||
    !productDetail.classList.contains('inactive')
  ) {
    menuMobile.classList.add("inactive");
    productDetail.classList.add("inactive");
  }
  menuCarrito.classList.toggle("inactive");
}

function openProductDetailAside (){
    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

var listaProductos = [];

listaProductos.push({
  name: "bike",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
  name: "TV",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
  name: "Smartphone",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
/*
 <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
         </div>
 </div>
*/

function renderProducts(newArray) {
  for (producto of newArray) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", producto.image);
    productCard.appendChild(img);
    img.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.appendChild(productInfo);

    const div1 = document.createElement("div");
    div1.classList.add("div1");
    productInfo.appendChild(div1);

    const pPrice = document.createElement("p");
    pPrice.innerText = "$" + producto.price;
    div1.appendChild(pPrice);

    const pName = document.createElement("p");
    pName.innerText = producto.name;
    div1.appendChild(pName);

    const figure = document.createElement("figure");
    productInfo.appendChild(figure);

    const img2 = document.createElement("img");
    img2.setAttribute("src", "./icons/bt_add_to_cart.svg");
    figure.appendChild(img2);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(listaProductos);
