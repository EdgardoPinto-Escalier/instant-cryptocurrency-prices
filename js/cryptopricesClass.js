class cryptopricesClass {
 // Here we get the JSON file with the different cryptocurrencies. 
 async getCurrencyApi() {
   const apikey =
     "f1e546e57bc074cd434bbb7b65ab6ba6cdd826e69e26f53506098508791ef13b";
   // Here we fetch the API
   const urlGetCurrency = await fetch(
     "https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}"
   );
   // JSON response
   const coins = await urlGetCurrency.json();

   return {
     coins
   }
 }

 async getPrices(coin, cryptocurrency) {
   const urlConversion = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist/${cryptocurrency}/?convert=${coin}`);

    const result =  await urlConversion.json();

    return {
      result
    }
 }
}