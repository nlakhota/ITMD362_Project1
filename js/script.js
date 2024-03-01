function init(){
  var emailInput = document.getElementById('email');
  var FnameInput = document.getElementById('firstname');
  var LnameInput = document.getElementById('lastname');
  const isChecked = document.getElementById('age-verification').checked;
  button.addEventListener("click", myFunction);
 

  function myFunction() {
    let message = `Thank you for subscribing!\nName: ${FnameInput} ${LnameInput}\nEmail: ${emailInput}\n`;

    if (isChecked) {
      message += 'You will be notified with Mercedes F1 News!';
    } else {
      message += 'You will not be notified with Mercedes F1 News.';
    }
    alert(message);
  }
}
window.addEventListener('load', init);
