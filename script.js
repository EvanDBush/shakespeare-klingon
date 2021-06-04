

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

quoteDisplay.textContent = result.quote.quote
quoteDetails.textContent = result.quote.play


