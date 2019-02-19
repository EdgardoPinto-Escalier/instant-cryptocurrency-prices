class interfaceClass {
  constructor() {
    this.init();
  }

  init() {
    this.makeSelect();
  }

  makeSelect() {
    rates.getCoinsApi().then(coins => {
      // Next we create a select with options.
      const select = document.getElementById("cryptocurrency");

      for ( const [key, value] of Object.entries(coins.coins.Data)) {

        const option = document.createElement("option");
        option.value = value.Symbol;
        option.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(option);
      }
    });
  }

  showMessage(message, classes) {
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(message));

    const divAlertMessage = document.querySelector(".alertMessage");
    divAlertMessage.appendChild(div);

    setTimeout(() => {
      document.querySelector(".alertMessage div").remove();
    }, 3000);
  }

  // Here we show or print the results.
  showResult(result, coin, crypto) {
    const oldResult = document.querySelector('#result > div');

    if(oldResult) {
      oldResult.remove();
    }

    this.showLoader();

    const dataCoin = result[crypto][coin];
    const price = dataCoin.PRICE.toFixed(2);
    const lastDay = dataCoin.CHANGE24HOUR;
    const porcentage = dataCoin.CHANGEPCTDAY.toFixed(2);
    const updated = new Date(dataCoin.LASTUPDATE * 1000).toLocaleString('en-SWE', {timeZone: 'UTC'});


    let templateHTML = "";
    templateHTML += `
      <div class="card">
        <div class="card-content">
          <header class="card-header">
            <p class="title titleResult"><i class="fas fa-file-contract"></i>&nbsp; RESULTS:</p>
            <br>
          </header>
          <div class="card-content">

            <p class="subtitle"><i class="fas fa-dollar-sign"></i>&nbsp; The price of <strong>${dataCoin.FROMSYMBOL}</strong> to the currency <strong>${dataCoin.TOSYMBOL}</strong> is:&nbsp; <strong>$&nbsp;${price}</strong></p>
       
            <p class="subtitle"><i class="far fa-clock"></i>&nbsp; <strong>${dataCoin.FROMSYMBOL}</strong> changed last hour:&nbsp; <strong>${lastDay} %</strong></p>

            <p class="subtitle"><i class="far fa-calendar-alt"></i>&nbsp; <strong>${dataCoin.FROMSYMBOL}</strong> changed last 7 days:&nbsp; <strong>${porcentage} %</strong> </p>

            <p class="subtitle"><i class="far fa-bell"></i>&nbsp; Last updated at: <strong>${updated} hs</strong></p>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      document.querySelector("#result").innerHTML = templateHTML;
      document.querySelector(".spinnerBlue img").remove();
    }, 3000);
  }

  // Here we show the loading image when trying to get the prices from the API.
  showLoader() {
    const loadingGif = document.createElement("img");
    loadingGif.src = "images/spinner.gif";
    document.querySelector(".spinnerBlue").appendChild(loadingGif);
  }
}