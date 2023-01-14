import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import CurrencyService from "./currency-service";

//Business Logic

async function getExchange(amount, currency) {
  try {
    const response = await CurrencyService.getExchange(amount, currency);
    printElements(response, amount, currency);
  } catch(error) {
    printError(error);
  }
}

//UI Logic

function printElements(convertedAmount, usdAmount, currency) {
  document.querySelector('#showResponse').innerText = `The currency exchange rate of USD ${usdAmount} to ${currency} is ${convertedAmount}.`;
}

function printError(error, currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency data for ${currency}: ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.getElementById('usDollar').value;
  //document.getElementById('#usDollar').value = null;
  const currency = document.getElementById('batchSelect').value;
  getExchange(amount, currency);
}
window.addEventListener("load", function () {
  CurrencyService.fetchSupportedCurrencies().then(response => {
    let dropdown = document.getElementById('batchSelect');
    const appendable = response['supported_codes'].map(currency => {
      return `<option value = "${currency[0]}">${currency[1]}</option>`;
    })
    dropdown.innerHTML = appendable.join("")
  })
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});


