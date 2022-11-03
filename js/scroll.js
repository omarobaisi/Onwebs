const scrollButton = document.querySelector(".header-button")
const pageBottom = document.querySelector(".contact-box")

scrollButton.addEventListener("click", () => {
    console.log('scrolling');
    // pageBottom.scrollIntoView()
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});