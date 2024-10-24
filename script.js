//criando os valores das moeda. Valores referente a data 24/10/2024!
let USD = 5.71;
let EUR = 6.17;
let GBP = 7.41;


//Otendo os elementos do formulário
let amount = document.getElementById("amount");
let currency = document.getElementById("currency");
let form = document.querySelector("form");
let footer = document.querySelector("main footer")
let descriptionFotter = document.getElementById("description")
let resultConversion = document.getElementById("result")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
  let hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
})

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
  try{
    descriptionFotter.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Calcula e exibe o resultado da conversão
    let result = amount * price;
    resultConversion.textContent = `${formatCurrencyBRL(result)}`;
    
    //Adicionando o footer para mostrar o resultado final da conversão para o usuário
    footer.classList.add("show-result");
  } catch (error) {
    //Removendo o footer caso a aplicação dê algum tipo de erro
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possivel fazer a conversão =(. Por favor tente mais tarde!")
  }
}

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

