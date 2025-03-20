const openNav = document.querySelector(".opennav")
const closeNav = document.querySelector(".closenav")
const nav = document.querySelector(".smallnav")
const openProd = document.querySelector(".openprod")
const closeProd = document.querySelector(".closeprod")
const products = document.querySelector(".dropdown")
const smallAbout = document.querySelector(".smabout")
const smallProducts = document.querySelector(".smproducts")
const smallContact = document.querySelector(".smcontact")

openNav.addEventListener("click",() => {
    nav.style.display = "flex"
    closeNav.style.display = "block"
    openNav.style.display = "none"
});

closeNav.addEventListener("click",() => {
    nav.style.display = "none"
    closeNav.style.display = "none"
    openNav.style.display = "block"
});

openProd.addEventListener("click",() => {
    products.style.display = "grid"
});

closeProd.addEventListener("click",() => {
    products.style.display = "none"
});

smallAbout.addEventListener("click", () => {
    nav.style.display = "none"
    closeNav.style.display = "none"
    openNav.style.display = "block"
});

smallProducts.addEventListener("click", () => {
    nav.style.display = "none"
    closeNav.style.display = "none"
    openNav.style.display = "block"
});

smallContact.addEventListener("click", () => {
    nav.style.display = "none"
    closeNav.style.display = "none"
    openNav.style.display = "block"
});