<<<<<<< HEAD
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const imageList = document.querySelector(".slider-wrapper .img-list");
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-button" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        })
    } )

}

=======
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const imageList = document.querySelector(".slider-wrapper .img-list");
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-button" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"})
        })
    } )

}

>>>>>>> f5cc7fd07694562e0025755edd0562732c17522f
window.addEventListener("load", initSlider);