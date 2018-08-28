class cryptopricesClass {
 // Here we get the JSON file with the different cryptocurrencies. 
 async getCurrencyApi() {
   // Here we fetch the API
   const urlGetCurrency = await fetch('https://api.coinmarketcap.com/v1/ticker/');
   // JSON response
   const coins = await urlGetCurrency.json();

   return {
     coins
   }
 }

 async getPrices(coin, cryptocurrency) {
    const urlConversion = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${coin}`);

    const result =  await urlConversion.json();

    return {
      result
    }
 }
}