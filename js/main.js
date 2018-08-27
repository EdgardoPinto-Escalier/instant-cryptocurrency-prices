// Here we instanciate the different classes.
const crypto = new cryptopricesClass();
const ui = new interfaceClass();

// Next we get the form.
const form = document.getElementById('form');
// Set an event listener when we send the form.
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Next we read the selected currency.
  const coinSelect = document.getElementById('currency');
  const selectedCoin = coinSelect.options[coinSelect.selectedIndex].value;

  // Next we read the selected cryptocurrency.
  const cryptoCurrencySelect = document.getElementById('criptocurrency');
  const cryptoSelectedCoin = cryptoCurrencySelect.options[cryptoCurrencySelect.selectedIndex].value;

  // Here we check that both fields have data.
  if(selectedCoin === '' || cryptoSelectedCoin === '') {
    console.log('We need details...');
  } else {
    console.log('Get price...');
  }
});


