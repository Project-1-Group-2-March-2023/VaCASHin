// When I input a Base Currency, Conversion Currency, and Currency Amount to convert
// and press the 'Conversion' button, the Currency Amount is converted from the Base Curenncy
// to the Conversion Currency

//create array
var storageArray = []

// Input Variables
var baseCurrency = document.getElementById("startingList");
// console.log(baseCurrency)

var currencyAmount = document.getElementById("currency1");
// console.log(currencyAmount)

var conversionCurrency = document.getElementById("endingList");
// console.log(conversionCurrency)

// Button Variables
var conversionButton = document.getElementById("initiateBtn")
var clearButton = document.getElementById("clearBtn")

//Container Variables 
var exchangeCtn = document.getElementById("exchangeContainer");
var newsCtn = document.getElementById("newsContainer");

function convertCurrency() {
  // API KEY CHANGES BASED ON DEVELOPER
  var kanesExchangeApiKey = "9470f9dffac1cee9291efaaa";
  var rachelsExchangeApiKey = "97450b01cbb760880bc42f8b";
  var halimasExchangeApiKey = "224caa9c11411787d8b17b3e";
  var gilbertsExchangeApiKey = "5280590e56c65a2c9f884ca1";

  // Creating and fetching a url comprised with form elements
  var requestUrl =
    "https://v6.exchangerate-api.com/v6/" +
    rachelsExchangeApiKey +
    "/pair/" +
    baseCurrency.value +
    "/" +
    conversionCurrency.value +
    "/" +
    currencyAmount.value;

  console.log(requestUrl)

  // Returns data based on the requestUrl
  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })

    .then(function (appendExchange) {
      console.log(appendExchange);
      var currencyCnvtFrom = document.createElement("p")
      var currencyCnvtTo = document.createElement("p")
      var originalCurrencyAmt = document.createElement("p")
      var convertedCurrencyAmt = document.createElement("p")
      var exchangeRt = document.createElement("p")

      currencyCnvtFrom.textContent = "Currency Converted From: " + baseCurrency.value
      currencyCnvtTo.textContent = "Currency Converted To: " + conversionCurrency.value
      originalCurrencyAmt.textContent = "Original Currency Amount: " + currencyAmount.value
      convertedCurrencyAmt.textContent = "Converted Currency Amount: " + appendExchange.conversion_result
      exchangeRt.textContent = "Exchange Rate: " + appendExchange.conversion_rate

      exchangeCtn.appendChild(currencyCnvtFrom);
      exchangeCtn.appendChild(currencyCnvtTo);
      exchangeCtn.appendChild(originalCurrencyAmt);
      exchangeCtn.appendChild(convertedCurrencyAmt);
      exchangeCtn.appendChild(exchangeRt);
    });
}

function fetchNews() {
  // API KEY CHANGES BASED ON DEVELOPER
  var kanesNewsApiKey = "5zntd2rkE2lIMet0v3XDDKdf05SK5cHYXh4fs6x5";
  var rachelsNewsApiKey = "c0HyGSCQSadpwj8ZGImoEQFL9Hr9OwRUuvR1UhIM";
  var halimasNewsApiKey = "VLljP03pjCiv4Ud2BUYCUqexO7YUWIXRsbULzBSX";
  var gilbertsNewsApiKey = "7gcqzRT4v6mBCEHyYyZLXaHENi6aDQPmLJDsLckq";

  // Creating and fetching a url comprised with form elements
  var requestUrl =
    "https://api.thenewsapi.com/v1/news/top?api_token=" +
    halimasNewsApiKey +
    "&search=" +
    conversionCurrency.value +
    "&language=en&categories=travel&limit=3";

  console.log(requestUrl);

  // Returns data based on the requestUrl
  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })

    .then(function (appendNews) {
      console.log(appendNews);
      for (i = 0; i < appendNews.data.length; i++) {
        var title = document.createElement("p");
        var image = document.createElement("img");
        var website = document.createElement("a");

        title.textContent = appendNews.data[i].title;
        image.src = appendNews.data[i].image_url;
        website.href = appendNews.data[i].url;

        newsCtn.appendChild(title);
        newsCtn.appendChild(image);
        newsCtn.appendChild(website);
      }
    });
}

function displayMedia() {
  convertCurrency();
  fetchNews();
}

//Stringify and set key in localStorage to var storageArray array
localStorage.setItem('conversionCurrency', JSON.stringify(conversionCurrency));

const test = localStorage.getItem('conversionCurrency');

console.log("return from local storage", JSON.parse(test));

//to remove all localstorage items
localStorage.clear();

// Event that Initiates Conversion
conversionButton.addEventListener("click", displayMedia)

