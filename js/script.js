window.onload = function() {
    const form = document.getElementById('f1_form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);

            let message = 'Thanks for subscribing!\n';
            for (let pair of formData.entries()) {
                message += `${pair[0]}: ${pair[1]}\n`;
            }
			
			const isChecked = document.getElementById('age-verification').checked;
			if (isChecked) {
				message += 'You will be notified with the latest Mercedes F1 News!';
			} else {
				message += 'You will not be notified with the latest Mercedes F1 News.';
			}
	
            console.log(message)
            alert(message);
        });
    }
};
