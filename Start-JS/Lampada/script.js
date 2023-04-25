const buttonOn = document.getElementById("clickOn")
const buttonOff = document.getElementById("clickOff")
const faseLamp = document.getElementById("fase-Lam")

lamOn = () => {
    const imgMudance = document.getElementById("fase-Lam")
    imgMudance.src = "img/ligada.jpg"

}

lamOff = () => {
    const imgMudance = document.getElementById("fase-Lam")
    imgMudance.src = "img/desligada.jpg"
}

lamQbd = () => {
    const imgMudance = document.getElementById("fase-Lam")
    imgMudance.src = "img/quebrada.jpg"
}

buttonOn.addEventListener("click", lamOn)
buttonOff.addEventListener("click", lamOff)
faseLamp.addEventListener("dblclick", lamQbd)