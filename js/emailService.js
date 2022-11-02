const sendEmail = function(name, email, subject, message) {
    
}

const fetchEmailInfo = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    const inputs = document.querySelectorAll('#name, #email, #subject, #message');
    inputs.forEach(input => {
        input.value = '';
    });
    sendEmail(name, email, subject, message);
}