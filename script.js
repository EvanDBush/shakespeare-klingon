const quoteButton = document.getElementById('quote-button')
let quoteData;

function fetchBardQuote() {
    fetch("https://shakespeare-quotes-gen.herokuapp.com/api/v1/quotes/single")
    .then(response => response.json())
    .then(result => buildQuoteBox(result))
    .then(result => quoteData = result)
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

function translateToKlingon (quoteData) {
    fetch('https://api.funtranslations.com/translate/klingon.json', {
        method: 'post',
        body: JSON.parse(quoteData)
    })
        .then(response => response.json())
        .then(translation =>console.log(translation))
        .catch(error => console.log('error', error));
}

translateButton.addEventListener('click', ()=>{
    translateToKlingon()
})