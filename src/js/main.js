// const collapsibles = document.querySelectorAll(".collapsible");
// const burger = document.querySelectorAll(".burger__menu");

// collapsibles.forEach((item) => {
//    console.log(item);
//    this.addEventListener("click", function () {
//       item.classList.toggle("collapsible--expanded");
//    });
// });

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
