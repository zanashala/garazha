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

window.addEventListener("load", initSlider);