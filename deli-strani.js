

const Stran = document.querySelector(".koreninaglave").id



export default {
    glava: `<div>
            <img alt="Znak strani" src="./Gradivo/deljeno/logo.svg" class="znak-strani"/>            
        </div>
        <button id="mobilni-vkljucnik-krmilke" class="mobilni-vkljucnik-krmilke" aria-controls="glavne-krmilne-vrstice"
        aria-expanded="false"><span class="sr-only">Meni</span></button>
         <nav>
            <ul id="glavne-krmilne-vrstice" class="glavna-krmilna-vrstica flex podcrtanost">
                <li class="${Stran === "dom" && "dejavno"} gumbek"><a class="bs-bela dp-sans-cond velika-zacetnica  razdalja-crk-2" href="index.html"><span aria-hidden="true">00</span>Domov</a>
                <li class="${Stran === "postaje" && "dejavno"} gumbek"><a class="bs-bela dp-sans-cond velika-zacetnica  razdalja-crk-2"  href="postaje.html"><span aria-hidden="true">01</span>Nahajališča</a>
                <li class="${Stran === "posadka" && "dejavno"} gumbek"><a class="bs-bela dp-sans-cond velika-zacetnica  razdalja-crk-2" href="posadka.html"><span aria-hidden="true">02</span>Posadka</a>
                <li class="${Stran === "ustroj" && "dejavno"} gumbek"><a class="bs-bela dp-sans-cond velika-zacetnica  razdalja-crk-2" href="ustroj.html"><span aria-hidden="true">03</span>Ustroj</a>
            </ul>
        </nav>`
}


