class API {
  constructor(apikey) {
    this.apikey = apikey;
  }

  // Here we get all the coins.
  async getCoinsApi() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    const urlGetCoins = await fetch(url);

    // JSON response.
    const coins = await urlGetCoins.json();

    return {
      coins
    }

  }

  async getValues(coin, cryptocoin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}&api_key=${this.apikey}`;

    // Here we check the REST API
    const urlConvert = await fetch(url);

    const result = await urlConvert.json();

    return {
      result
    }
  }
}