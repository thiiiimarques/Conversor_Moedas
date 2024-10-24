//criando os valores das moedas
let USD = 4.87;
let EUR = 5.32;
let GBP = 6.08;


//Otendo os elementos do formulário
let amount = document.getElementById("amount");
let currency = document.getElementById("currency");
let form = document.querySelector("form");

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input") , () => {
  let hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
}

//captando o evento de submit no formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD,"US$");
      break;
    
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  
    default:
      break;
  }
}

// Criando a função que calcula a conversão

function convertCurrency(amount, price, symbol) {
  //return amount / price;
  console.log(amount,price,symbol);
}

