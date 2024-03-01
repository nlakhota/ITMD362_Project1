function init(){
  var emailInput = document.getElementById('email').value;
  var FnameInput = document.getElementById('firstname').value;
  var LnameInput = document.getElementById('lastname').value;
  var isChecked = document.getElementById('age-verification').checked;
  var button = document.getElementById('submit');
  button.addEventListener("click", myFunction);
 

  function myFunction() {
    message = `Thank you for subscribing!\nName: ${FnameInput} ${LnameInput}\nEmail: ${emailInput}\n`;

    if (isChecked) {
      message += 'You will be notified with Mercedes F1 News!';
    } else {
      message += 'You will not be notified with Mercedes F1 News.';
    }
    alert(message);
  }
}
window.addEventListener('load', init);
