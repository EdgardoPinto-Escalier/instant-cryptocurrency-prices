class interfaceClass {
  constructor() {
    this.init();
  }

  init() {
    this.makeSelect();
  }

  makeSelect() {
    crypto.getCurrencyApi()
      .then(coins => {
        // Next we create a select with options.
        const fixCoins = coins.coins;
        const select = document.getElementById('criptocurrency');

        // Next we make the select from the REST API.
        fixCoins.forEach(coin => {
          // include the ID and the value.
          const option = document.createElement('option');
          option.value = coin.id;
          option.appendChild(document.createTextNode(coin.name));
          select.appendChild(option);
        })
      })
  }

  showMessage(message, classes) {
    const div = document.createElement('div');
    div.className = classes;
    div.appendChild(document.createTextNode(message));

    const divAlertMessage = document.querySelector('.alertMessage');
    divAlertMessage.appendChild(div);

    setTimeout(() => {
      document.querySelector('.alertMessage div').remove();
    }, 3000);
  }
}