

let result;

function fetchBardQuote() {
    fetch("https://shakespeare-quotes-gen.herokuapp.com/api/v1/quotes/single")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const quoteButton = document.getElementById('quote-button')
const quoteDisplay = document.getElementById('quote-display')
const quoteDetails = document.getElementById('quote-details')

quoteButton.addEventListener('click', () => {
    fetchBardQuote()
    
})

// quoteDisplay.textContent = result.quote.quote
// quoteDetails.textContent = result.quote.play

const translateButton = document.getElementById('translate-button')
const translationInput = document.getElementById('translation-input')

translateButton.addEventListener('click', () => {
    let input = translationInput.value
    translateToKlingon(input)
})


function translateToKlingon (input) {
    fetch('https://api.funtranslations.com/translate/klingon.json', {
        method: 'post',
        body: JSON.stringify(input)
    })
        .then(response => response.json)
        .then(result =>console.log(result))
        .catch(error => console.log('error', error));
}
