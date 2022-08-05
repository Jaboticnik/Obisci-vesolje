import podatki from "./podatki.js";

let Izbrano = {
    postaje:0,
    posadka: 0,
    ustroj: 0,
}



//Skupne preslikave
function Osvezi(Gumbi, Izbrano) {
    Gumbi[Izbrano].setAttribute("aria-selected", true)
    Gumbi[Izbrano].classList.add("dejavno")
}

const Nastavitevdogodkov = (Drzalecgumbov, Gumbi, Izbranost, Nastavivsebino, Vrsta) => {
//Pritisk tipke
    Drzalecgumbov.addEventListener('keydown', (pritisk) => {
        PritiskGumba(Gumbi, Nastavivsebino, Vrsta,1, "Tipkovnica", pritisk.keyCode)
    })

//Pritisk z misko
    for (let i = 0; i < Gumbi.length; i++) {
        Gumbi[i].addEventListener('click', () => {
            PritiskGumba(Gumbi, Nastavivsebino, Vrsta, i)
        })
    }
}

function PritiskGumba(Gumbi, Nastavivsebino, Vrsta, i = 0, Nacin = "Pritisk", gumb = 0) {
    if (Vrsta === "postaje") {
        if (Nacin !== "Pritisk") {
            if (gumb === 37) {
                Gumbi[Izbrano.postaje].setAttribute("aria-selected", false)
                Gumbi[Izbrano.postaje].classList.remove("dejavno")
                Izbrano.postaje > 0 ? Izbrano.postaje = Izbrano.postaje - 1 : Izbrano.postaje = Gumbi.length - 1
                Gumbi[Izbrano.postaje].focus()
                Nastavivsebino()
                Osvezi(Gumbi, Izbrano.postaje)
            } else if (gumb === 39) {
                Gumbi[Izbrano.postaje].setAttribute("aria-selected", false)
                Gumbi[Izbrano.postaje].classList.remove("dejavno")
                Izbrano.postaje> 2 ? Izbrano.postaje = 0 : Izbrano.postaje++
                Gumbi[Izbrano.postaje].focus()
                Nastavivsebino()
                Osvezi(Gumbi, Izbrano.postaje)
            }
        } else if (Nacin === "Pritisk") {
            Gumbi[Izbrano.postaje].setAttribute("aria-selected", false)
            Gumbi[Izbrano.postaje].classList.remove("dejavno")
            Izbrano.postaje = i
            Nastavivsebino()
            Osvezi(Gumbi, Izbrano.postaje)
        }
    }else if (Vrsta === "posadka") {
        if (Nacin !== "Pritisk") {
            if (gumb === 37) {
                Gumbi[Izbrano.posadka].setAttribute("aria-selected", false)
                Gumbi[Izbrano.posadka].classList.remove("dejavno")
                Izbrano.posadka > 0 ? Izbrano.posadka = Izbrano.posadka - 1 : Izbrano.posadka = Gumbi.length - 1
                Gumbi[Izbrano.posadka].focus()
                Nastavivsebino()
                Osvezi(Gumbi, Izbrano.posadka)
            } else if (gumb === 39) {
                Gumbi[Izbrano.posadka].setAttribute("aria-selected", false)
                Gumbi[Izbrano.posadka].classList.remove("dejavno")
                Izbrano.posadka > 2 ? Izbrano.posadka = 0 : Izbrano.posadka++
                Gumbi[Izbrano.posadka].focus()
                Nastavivsebino()
                Osvezi(Gumbi, Izbrano.posadka)
            }
        } else if (Nacin === "Pritisk") {
            Gumbi[Izbrano.posadka].setAttribute("aria-selected", false)
            Gumbi[Izbrano.posadka].classList.remove("dejavno")
            Izbrano.posadka = i
            Nastavivsebino()
            Osvezi(Gumbi, Izbrano.posadka)
        }
    }else if (Vrsta === "ustroj") {
        if (Nacin !== "Pritisk") {
            if (gumb === 37) {
                Gumbi[Izbrano.ustroj].setAttribute("aria-selected", false)
                Gumbi[Izbrano.ustroj].classList.remove("dejavno")
                Izbrano.ustroj > 0 ? Izbrano.ustroj = Izbrano.ustroj - 1 : Izbrano.ustroj = Gumbi.length - 1
                Gumbi[Izbrano.ustroj].focus()
                Nastavivsebino()
                Osvezi(Gumbi, Izbrano.ustroj)
            } else if (gumb === 39) {
                Gumbi[Izbrano.ustroj].setAttribute("aria-selected", false)
                Gumbi[Izbrano.ustroj].classList.remove("dejavno")
                Izbrano.ustroj > 1 ? Izbrano.ustroj = 0 : Izbrano.ustroj++
                Gumbi[Izbrano.ustroj].focus()
                Nastavivsebino()
                Osvezi(Gumbi, Izbrano.ustroj)
            }
        } else if (Nacin === "Pritisk") {
            Gumbi[Izbrano.ustroj].setAttribute("aria-selected", false)
            Gumbi[Izbrano.ustroj].classList.remove("dejavno")
            Izbrano.ustroj = i
            Nastavivsebino()
            Osvezi(Gumbi, Izbrano.ustroj)
        }
    }
}
//KONEC Skupnih preslikav



if (document.querySelector('body').className === "postaje") {
/*POSTAJE*/

//Vsebina
const Ime = document.querySelector(".postaje-podatki > h2")
const Opis = document.querySelector(".postaje-podatki > .besedilo")
const Razdalja = document.querySelector(".postaje-podatki > .postaje-znamenitosti .postaje-razdalja")
const Pot = document.querySelector(".postaje-podatki > .postaje-znamenitosti .postaje-pot")
const Slikawebp = document.querySelector(".gridslika > source")
const Slikapng = document.querySelector(".gridslika > img")

// Zavihki
const Gumbi = document.querySelectorAll(".gumbi > .gumbek")
const Drzalecgumbov = document.getElementById("gumbizavihek")

const Nastavivsebino = () => {
    CssUreditev()

    Ime.innerHTML = podatki.postaje[Izbrano.postaje].ime
    Opis.innerHTML = podatki.postaje[Izbrano.postaje].opis
    Razdalja.innerHTML = podatki.postaje[Izbrano.postaje].razdalja
    Pot.innerHTML = podatki.postaje[Izbrano.postaje].pot
    Slikapng.src = podatki.postaje[Izbrano.postaje].slike.png
    Slikawebp.srcset = podatki.postaje[Izbrano.postaje].slike.webp
}

Nastavitevdogodkov(Drzalecgumbov, Gumbi, Izbrano.postaje, Nastavivsebino, "postaje")

function CssUreditev() {
    podatki.postaje[Izbrano.postaje].ime === "Evropa" ? Ime.style.fontSize = "var(--vp-750)" : Ime.style.fontSize = "var(--vp-800)"
    if (podatki.postaje[Izbrano.postaje].ime === "Mars") {
        Razdalja.style.fontSize = "1.6rem"
        Pot.style.fontSize = "1.6rem"
    }else {
        Razdalja.style.fontSize = "1.75rem"
        Pot.style.fontSize = "1.75rem"
    }
}

//Prvic nastavljanje Lune
Nastavivsebino()

} else if (document.querySelector('body').className === "posadka") {
    /*POSADKA*/

    // Vsebina
    const Vloga = document.querySelector('.podrobnosti-posadke > header > h2')
    const Ime = document.querySelector('.podrobnosti-posadke > header > p')
    const Opis = document.querySelector('.podrobnosti-posadke > .besedilo')
    const Slikawebp = document.querySelector(".gridslika > source")
    const Slikapng = document.querySelector(".gridslika > img")

    // Zavihki
    const Gumbi = document.querySelectorAll(".pikice > button")
    const Drzalecgumbov = document.getElementById("drzalecpikic")

    const Nastavivsebino = () => {
        Vloga.innerHTML = podatki.posadka[Izbrano.posadka].vloga
        Ime.innerHTML = podatki.posadka[Izbrano.posadka].ime
        Opis.innerHTML = podatki.posadka[Izbrano.posadka].opis
        Slikapng.src = podatki.posadka[Izbrano.posadka].slike.png
        Slikawebp.srcset = podatki.posadka[Izbrano.posadka].slike.webp
    }

    Nastavitevdogodkov(Drzalecgumbov, Gumbi,  Izbrano.posadka, Nastavivsebino, "posadka")

    Nastavivsebino()
} else if (document.querySelector('body').className === "ustroj") {
    /*POSADKA*/

    // Vsebina
    const Naslov = document.querySelector('.podrobnosti-ustroja > header > p')
    const Opis = document.querySelector('.podrobnosti-ustroja > .besedilo')
    const VodoravnaSlika  = document.querySelector(".gridslika > img")
    const NavpicnaSlika = document.querySelector("style")

    // Zavihki
    const Gumbi = document.querySelectorAll(".stevila > button")
    const Drzalecgumbov = document.getElementById("drzalecstevil")

    const Nastavivsebino = () => {
        Naslov.innerHTML = podatki.ustroj[Izbrano.ustroj].ime
        Opis.innerHTML = podatki.ustroj[Izbrano.ustroj].opis
        VodoravnaSlika.srcset = podatki.ustroj[Izbrano.ustroj].slike.vodoravno
        NavpicnaSlika.innerHTML = `@media (min-width: 50em) {
            .grid-zbiralnik--ustroj > .gridslika {
                content: url(${podatki.ustroj[Izbrano.ustroj].slike.navpicno});
            }
        }`
    }

    Nastavitevdogodkov(Drzalecgumbov, Gumbi, Izbrano.ustroj, Nastavivsebino, "ustroj")

    Nastavivsebino()
}

