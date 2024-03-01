window.addEventListener('load', function() {
  document.getElementById('submit').addEventListener('click', function(event) {

    const emailInput = document.getElementById('email').value;
    const FnameInput = document.getElementById('firstname').value;
    const LnameInput = document.getElementById('lastname').value;

    // Check if the checkbox is checked or not
    const isChecked = document.getElementById('age-verification').checked;

    // Prepare message to display in the popup
    let message = `Thank you for subscribing!\nName: ${FnameInput} ${LnameInput}\nEmail: ${emailInput}\n`;

    if (isChecked) {
      message += 'You will be notified with Mercedes F1 News!';
    } else {
      message += 'You will not be notified with Mercedes F1 News.';
    }

    // Show popup with the message
    alert(message);
  });
});
