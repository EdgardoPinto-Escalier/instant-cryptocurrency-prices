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

  // Here we show or print the results.
  showResult(result, coin) {

    const oldResult = document.querySelector('#result > div');

    if(oldResult) {
      oldResult.remove();
    }

    this.showLoader();

    const tagCoin = `price_${coin}`;
    const value = result[tagCoin];
    const coinUpper = coin.toUpperCase();
    const hour = new Date(result.last_updated *1000);
    const updatedHour = `${hour.getHours()}:${hour.getMinutes()}`;
    
    let templateHTML = '';
    templateHTML += `
      <div class="card">
        <div class="card-content">
          <header class="card-header">
            <p class="title titleResult"><i class="fas fa-file-contract"></i>&nbsp; RESULTS:</p>
            <br>
          </header>
          <div class="card-content">
            <p class="subtitle"><i class="fas fa-dollar-sign"></i>&nbsp; The price of <strong>${result.name}</strong> to the currency <strong>${coinUpper}</strong> is:&nbsp; <strong>$ §§§§§§§§§§§§  +${value}</strong></p>

            <p class="subtitle"><i class="far fa-clock"></i>&nbsp; <strong>${result.name}</strong> changed last hour:&nbsp; <strong>${result.percent_change_1h} %</strong></p>

            <p class="subtitle"><i class="far fa-calendar-check"></i>&nbsp; <strong>${result.name}</strong> changed last day:&nbsp; <strong>${result.percent_change_24h} %</strong></p>

            <p class="subtitle"><i class="far fa-calendar-alt"></i>&nbsp; <strong>${result.name}</strong> changed last 7 days:&nbsp; <strong>${result.percent_change_7d} %</strong> </p>

            <p class="subtitle"><i class="far fa-bell"></i>&nbsp; Last updated at: <strong>${updatedHour} hs</strong></p>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      document.querySelector('#result').innerHTML = templateHTML;
      document.querySelector('.spinnerBlue img').remove();
    }, 3000);
  }

  // Here we show the loading image when trying to get the prices from the API.
  showLoader() {
    const loadingGif = document.createElement('img');
    loadingGif.src = 'images/spinner.gif';
    document.querySelector('.spinnerBlue').appendChild(loadingGif);
  }
}