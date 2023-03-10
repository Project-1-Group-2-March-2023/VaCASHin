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

    .then((data) => {
      console.log(data);
      // add data to the array
      storageArray.push(data)
      localStorage.setItem("displayMedia", JSON.stringify(storageArray));
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

    .then((data) => {
      console.log(data);
    });
}

function displayMedia() {
  convertCurrency();
  fetchNews();
}
//converting back to javascript object

const test = localStorage.getItem('displayMedia');
console.log("return from local storage", JSON.parse(test));
// convertCurrency();
// convertCurrency();


// Event that Initiates Conversion
conversionButton.addEventListener("click", displayMedia)