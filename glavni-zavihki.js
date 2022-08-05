import DeliStrani from './deli-strani.js'

const Koreninaglave = document.querySelector(".koreninaglave")
let Seznamprikazan = false


//Glava
Koreninaglave.innerHTML = DeliStrani.glava
const Krmilna = document.getElementById("glavne-krmilne-vrstice")
const Gumb = document.getElementById("mobilni-vkljucnik-krmilke")


Gumb.addEventListener('click', () => {
    if (Seznamprikazan === false) {
        Gumb.setAttribute("aria-expanded", true)
        Seznamprikazan = true
        Krmilna.classList.add("prikaznazaj")
        Gumb.style.backgroundImage = "url('./Gradivo/deljeno/icon-close.svg')"
    }else if (Seznamprikazan === true) {
        Gumb.setAttribute("aria-expanded", false)
        Seznamprikazan = false
        Krmilna.classList.remove("prikaznazaj")
        Gumb.style.backgroundImage = "url('./Gradivo/deljeno/icon-hamburger.svg')"
    }
})

