const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.13
const euro = 5.41
const libra = 6.08

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const moneyTextReal = document.getElementById('money-text-real')
    const moneyTextDolar = document.getElementById('money-text')
    
    moneyTextReal.innerHTML = " R$" + inputReais 
    if (select.value === "US$ Dólar americano") {
        moneyTextDolar.innerHTML = " US$" + inputReais / dolar 
    } if (select.value === "€ Euro") {
        moneyTextDolar.innerHTML = " €" + inputReais / euro
    } if (select.value === "£ Libra esterlina") {
        moneyTextDolar.innerHTML = " £" + inputReais / libra
    }

}

changeCurrency = () => {
    const textDolar = document.getElementById('text-dolar')
    const imgMudance = document.getElementById('img')

    if (select.value === 'US$ Dólar americano') {
        textDolar.innerHTML = "Dólar Americano"
        imgMudance.src = "./img/img-eua.png"
    }

    if(select.value === '€ Euro') {
        textDolar.innerHTML = "Euro"
        imgMudance.src = "./img/img-euro.png"
    }

    if(select.value === '£ Libra esterlina') {
        textDolar.innerHTML = "Libra esterlina"
        imgMudance.src = "./img/libra.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)