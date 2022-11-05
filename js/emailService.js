const flash = function() {
    const flashContainer = document.querySelector(".flash-container")
    const flashMessage = document.querySelector(".flash-message")
    // flashMessage.textContent = message
    flashContainer.classList.add("show-flash");
    setTimeout(function() {
        flashContainer.classList.remove("show-flash");
    }, 2000)
}

const sendEmail = function(name, email, subject, message) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "omr.obasi28@gmail.com",
        Password : "2D9AB8760DB7402344DFFB70838BE930C046",
        To : "onwebs.sup@gmail.com",
        From : "aviadmasasa@gmail.com",
        Subject : "onwebs, " + subject,
        Body : 
        `
        From ${name}, 
        ${message}, sender email: ${email}
        `
    }).then(
      message => flash()
    )
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