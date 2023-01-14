import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import CurrencyService from "./currency-service";

//Business Logic

async function getExchange(currency) {
  CurrencyService.getExchange(currency)
  const response = await CurrencyService.getExchange(currency);
    if (response.main) {
      printElements(response, currency);
    } else {
      printError(response, currency);
    }
}

//UI Logic

function printElements(reponse, currency) {
  document.querySelector('#showResponse').innerText = `The currency exchange rate of ${currency} is ${response.conversion_rates} and the amount in US($) is ${currency * response.conversion_rates}.`;
}

function printError(error, currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency data for ${currency}: ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('usDollar').value;
  document.querySelector('#usDollar').value = null;
  getExchange(currency);
  
  window.addEventListener("load", function() {
    CurrencyService.fetchSupportedCurrencies().then(response => {
      let dropdown = document.getElementById('batchSelect');
      
    })
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
  });
}

