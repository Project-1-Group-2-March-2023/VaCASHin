// When I input a Base Currency, Conversion Currency, and Currency Amount to convert
// and press the 'Conversion' button, the Currency Amount is converted from the Base Curenncy
// to the Conversion Currency

// Input Variables

// Placeholder
var baseCurrency = "USD";

// Placeholder
var currencyAmount = "10.00";

// Placeholder
var conversionCurrency = "GBP";

function convertCurrency() {
  // API KEY CHANGES BASED ON DEVELOPER
  var kanesExchangeApiKey = "9470f9dffac1cee9291efaaa";
  var rachelsExchangeApiKey = "97450b01cbb760880bc42f8b";
  var halimasExchangeApiKey = "224caa9c11411787d8b17b3e";
  var gilbertsExchangeApiKey = "5280590e56c65a2c9f884ca1";

  // Placeholder
  var requestUrl =
    "https://v6.exchangerate-api.com/v6/" +
    kanesExchangeApiKey +
    "/pair/" +
    baseCurrency +
    "/" +
    conversionCurrency +
    "/" +
    currencyAmount;

  // Returns data based on the requestUrl
  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      fetchNews();
    });
}

function fetchNews() {
  // API KEY CHANGES BASED ON DEVELOPER
  var kanesNewsApiKey = "5zntd2rkE2lIMet0v3XDDKdf05SK5cHYXh4fs6x5";
  var rachelsNewsApiKey = "c0HyGSCQSadpwj8ZGImoEQFL9Hr9OwRUuvR1UhIM";
  var halimasNewsApiKey = "VLljP03pjCiv4Ud2BUYCUqexO7YUWIXRsbULzBSX";
  var gilbertsNewsApiKey = "7gcqzRT4v6mBCEHyYyZLXaHENi6aDQPmLJDsLckq";

  var requestUrl =
    "https://api.thenewsapi.com/v1/news/top?api_token=" +
    kanesNewsApiKey +
    "&search=" +
    conversionCurrency +
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
