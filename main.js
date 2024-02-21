const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".bloc-caroussel")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1; 
        const slideActive = document.querySelector(".active");

        newIndex = calcNextSlide + [...slides].indexOf(slideActive);

        if (newIndex < 0) {
            newIndex = [...slides].length - 1;
        }

        else if (newIndex >= [...slides].length) {
            newIndex = 0;
        }
        slides[newIndex].classList.add("active");
        

        slideActive.classList.remove("active");

        console.log(newIndex)
    });
});