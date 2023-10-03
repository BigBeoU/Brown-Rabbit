const burgerMenus = document.querySelectorAll(".burger__menu");
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

const sectionsData = [
   {
      imgSrc: "./assets/images/posts/Post thumbnail-1.png",
      title: "Section 1",
      content: "Published 12/07/2021",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-2.png",
      title: "Section 2",
      content: "Published 12/07/2021.",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-3.png",
      title: "Section 3",
      content: "Published 12/07/2021.",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-4.png",
      title: "Section 4",
      content: "Published 12/07/2021.",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-1.png",
      title: "Section 5",
      content: "Published 12/07/2021",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-2.png",
      title: "Section 6",
      content: "Published 12/07/2021.",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-3.png",
      title: "Section 7",
      content: "Published 12/07/2021.",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-4.png",
      title: "Section 8",
      content: "Published 12/07/2021.",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-1.png",
      title: "Section 9",
      content: "Published 12/07/2021",
   },
   {
      imgSrc: "./assets/images/posts/Post thumbnail-2.png",
      title: "Section 10",
      content: "Published 12/07/2021.",
   },
];

let currentPage = 1;
const articlesPerPage = 2; // Adjust as per your requirement
const totalPages = Math.ceil(sectionsData.length / articlesPerPage);

const renderArticles = (page) => {
   const app = document.getElementById("articles--container");
   app.innerHTML = ""; // Clear existing content

   const startIndex = (page - 1) * articlesPerPage;
   const endIndex = startIndex + articlesPerPage;
   const sectionsToDisplay = sectionsData.slice(startIndex, endIndex);

   sectionsToDisplay.forEach((sectionData, index) => {
      const div = document.createElement("div");
      div.id = `div${index + 1}`;
      div.classList = "article show-more-article";
      div.innerHTML = `
   <img class="img-post card-img-top" src="${sectionData.imgSrc}" alt="${sectionData.title}" loading="lazy">
   <div class="post">
   <h3><b>${sectionData.title}</b></h3>
   <h5 class="card-title">${sectionData.content}</h5>
   <p class="article__items text ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod
      tempor
      invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est...p Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Minima voluptate quaerat blanditiis consequuntur ad, accusamus quasi maxime voluptatem, perferendis neque
      voluptas esse dolor rem quas porro veniam doloribus autem nostrum. Delectus, enim nisi. Quas, perspiciatis,
      temporibus voluptatem debitis porro quos quaerat corrupti vel tempore sapiente deleniti. Ad libero ipsum atque
      vel nostrum tempora, molestiae non ex, minima nam quia fugit, doloribus ea molestias in ab. Ipsum dolorem
      axime voluptatem, perferendis neque
      voluptas esse dolor rem quas porro veniam doloribus autem nostrum. Delectus, enim nisi. Quas, perspiciatis,
      temporibus voluptatem debitis porro quos quaerat corrupti vel tempore sapiente deleniti. Ad libero ipsum atque
      vel nostrum tempora, molestiae non ex, minima nam quia fugit, doloribus ea molestias in ab. Ipsum dolorem
     </p>
      <a  class="btn btn-light article__items show-more">show more</a>
   </div>
        `;
      app.appendChild(div);
   });
};

renderArticles(currentPage);

document.getElementById("nextBtn").addEventListener("click", () => {
   currentPage = (currentPage % totalPages) + 1;
   renderArticles(currentPage);
});

document.getElementById("prevBtn").addEventListener("click", () => {
   currentPage = currentPage === 1 ? totalPages : currentPage - 1;
   renderArticles(currentPage);
});

// document.querySelectorAll(".show-more").forEach((button) => {
//    button.addEventListener("click", function () {
//       var textElement = button.previousElementSibling;
//       if (!textElement) return;
//       textElement.classList.toggle("show-more-height");
//       this.textContent = textElement.classList.contains("show-more-height")
//          ? "Show Less"
//          : "Show More";
//    });
// });
const elements = [
   ...document.querySelectorAll(".show-more"),
   ...document.querySelectorAll(".show-more-article"),
];

elements.forEach((element) => {
   element.addEventListener("click", function () {
      // Checking if the clicked element has a specific class
      if (element.classList.contains("show-more")) {
         const textElement = element.previousElementSibling;
         if (!textElement) return;
         textElement.classList.toggle("show-more-height");
         element.textContent = textElement.classList.contains(
            "show-more-height",
         )
            ? "Show Less"
            : "Show More";
      }
      if (element.classList.contains("show-more-article")) {
         // Handle click event for elements with the 'article' class
         element.classList.toggle("show-more-height-article");
      }
   });
});
// Array of sponsor logo URLs
const sponsorLogos = [
   "./assets//images//sponsors/sponsor-12.png",
   "./assets//images//sponsors/sponsor-13.png",
   "./assets//images//sponsors/sponsor-14.png",
   "./assets//images//sponsors/sponsor-15.png",
   "./assets//images//sponsors/sponsor-16.png",
   "./assets//images//sponsors/sponsor-17.png",
   "./assets//images//sponsors/sponsor-18.png",
   "./assets//images//sponsors/sponsor-19.png",
   "./assets//images//sponsors/sponsor-20.png",
   "./assets//images//sponsors/sponsor-41.png",
   "./assets//images//sponsors/sponsor-40.png",
   "./assets//images//sponsors/sponsor-1.png",
   "./assets//images//sponsors/sponsor-2.png",
   "./assets//images//sponsors/sponsor-3.png",
   "./assets//images//sponsors/sponsor-4.png",
   "./assets//images//sponsors/sponsor-5.png",
   "./assets//images//sponsors/sponsor-6.png",
   "./assets//images//sponsors/sponsor-7.png",
   "./assets//images//sponsors/sponsor-8.png",
   "./assets//images//sponsors/sponsor-9.png",
   "./assets//images//sponsors/sponsor-10.png",
   "./assets//images//sponsors/sponsor-11.png",
];

const instagramFeedArr = [
   "./assets/images/instagram-feed/instagram-image-1.png",
   "./assets/images/instagram-feed/instagram-image-2.png",
   "./assets/images/instagram-feed/instagram-image-3.png",
   "./assets/images/instagram-feed/instagram-image-4.png",
   "./assets/images/instagram-feed/instagram-image-5.png",
   "./assets/images/instagram-feed/instagram-image-6.png",
   "./assets/images/instagram-feed/instagram-image-7.png",
   "./assets/images/instagram-feed/instagram-image-8.png",
   "./assets/images/instagram-feed/instagram-image-9.png",
];

const renderImage = (id, arr) => {
   const sponsorContainer = document.getElementById(id);

   // Render the sponsor logos using innerHTML and template literals
   sponsorContainer.innerHTML = arr
      .map(
         (logoUrl) => `
         <div class="col"> <img src="${logoUrl}" alt="Sponsor Logo" class="sponsor-logo"></div>
   `,
      )
      .join("");
};

renderImage("sponsor-container", sponsorLogos);
renderImage("instagram-feed", instagramFeedArr);
