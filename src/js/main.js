// Get all elements with the class "burger__menu"
const burgerMenus = document.querySelectorAll(".burger__menu");

// Add a click event listener to each "burger__menu" element
burgerMenus.forEach((item) => {
   item.addEventListener("click", function () {
      // Toggle the "collapsible--expanded" class on the parent element
      const parentCollapsible = item.closest(".collapsible");
      if (parentCollapsible) {
         parentCollapsible.classList.toggle("collapsible--expanded");
      }
   });
});
let currentSlide = 0;
const images = [
   "./assets/images/posts/Post thumbnail-1.png",
   "./assets/images/posts/Post thumbnail-2.png",
   "./assets/images/posts/Post thumbnail-3.png",
   "./assets/images/posts/Post thumbnail-4.png",
];

//Slice picture

function slideImage(direction) {
   const sliderImage = document.getElementById("sliderImage");

   sliderImage.style.opacity = 0;

   sliderImage.addEventListener("transitionend", function handler() {
      // Depending on direction, increment or decrement currentSlide
      if (direction === "forward") {
         currentSlide = (currentSlide + 1) % images.length;
      } else if (direction === "backward") {
         currentSlide = (currentSlide - 1 + images.length) % images.length;
      }

      sliderImage.src = images[currentSlide];
      sliderImage.style.opacity = 1;
      sliderImage.removeEventListener("transitionend", handler);
   });
}
