const quoteButton = document.getElementById('quote-button')

function fetchBardQuote() {
    fetch("https://shakespeare-quotes-gen.herokuapp.com/api/v1/quotes/single")
    .then(response => response.json())
    .then(result => buildQuoteBox(result))
    .catch(error => console.log('error', error));
}

function buildQuoteBox(result) {
    let quoteDisplay = document.getElementById('quote-display')
    quoteDisplay.textContent = `${result.quote.quote} -${result.quote.play}`
}

quoteButton.addEventListener('click', () => {
    fetchBardQuote()   
})

const translateButton = document.getElementById('translate-button')
const translationInput = document.getElementById('translation-input')

translateButton.addEventListener('click', () => {
    let input = translationInput.value
    translateToKlingon(input)
})

function translateToKlingon (input) {
    fetch('https://api.funtranslations.com/translate/klingon.json', {
        method: 'post',
        body:`${input}`
    })
        .then(response => response.json)
        .then(result =>console.log(result))
        .catch(error => console.log('error', error));
}
