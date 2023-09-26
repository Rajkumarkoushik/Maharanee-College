// Navigation admission section starts.
const navForm = document.querySelector(".nav-admission");

  function navigationButton(){
    navForm.classList.toggle("nav-admission-active");
};

// Navigation admission section Ends.

//  Back-to-top section Starts.
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTop.classList.add("back-to-top-active");
    } else {
        backToTop.classList.remove("back-to-top-active");
    }
});

//  Back-to-top section Ends.

// Pre loader section starts.
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    const fadeOut = setTimeout(() => {
        preloader.classList.add("preloader-active")
    }, 0);
});
// Pre loader section ends.