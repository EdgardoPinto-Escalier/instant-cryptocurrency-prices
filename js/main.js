// Here we instanciate the different classes.
const rates = new API("f1e546e57bc074cd434bbb7b65ab6ba6cdd826e69e26f53506098508791ef13b");
const ui = new interfaceClass();

rates.getCoinsApi();

// Next we get the form.
const form = document.getElementById('form');
// Set an event listener when we send the form.
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Next we read the selected currency.
  const coinSelect = document.getElementById('currency');
  const selectedCoin = coinSelect.options[coinSelect.selectedIndex].value;

  // Next we read the selected cryptocurrency.
  const cryptoCurrencySelect = document.getElementById('cryptocurrency');
  const cryptoSelectedCoin = cryptoCurrencySelect.options[cryptoCurrencySelect.selectedIndex].value;

  // Here we check that both fields have data.
  if(selectedCoin === '' || cryptoSelectedCoin === '') {
    ui.showMessage('You need to select both fields', 'notification is-danger');
  } else {
    rates.getValues(selectedCoin, cryptoSelectedCoin)
      .then(data => {
        ui.showResult(data.result.RAW, selectedCoin, cryptoSelectedCoin);

      })
  }
});


