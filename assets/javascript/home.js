// Get the trusted by element
const trustedBy = document.querySelector(".trusted-by");

// Function to add/remove the 'active' class based on scroll position
function handleScroll() {
  const scrollPosition = window.scrollY;
  const trustedByPosition = trustedBy.offsetTop;

  if (scrollPosition >= trustedByPosition - window.innerHeight / 2) {
    trustedBy.classList.add("active");
  } else {
    trustedBy.classList.remove("active");
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check for scroll position on page load
handleScroll();

function scrollCards(direction) {
  var cardContainer = document.getElementById("cardCarousel");
  cardContainer.scrollLeft += direction * 200; // Adjust the scroll distance as needed
}
$(document).ready(function () {
  // Hide all content divs initially
  $('[id^="button"]').hide();

  // Button click event
  $(".half-oven-btn").click(function () {
    // Remove 'active' class from all buttons
    $(".half-oven-btn").removeClass("active");

    // Add 'active' class to the clicked button
    $(this).addClass("active");

    // Hide all content divs
    $('[id^="button"]').hide();

    // Get the target content div based on the button's data-target attribute
    var targetContent = $("#" + $(this).data("target") + "-content");

    // Show the target content div
    targetContent.show();
  });
});

///////////////////////////////////////
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // remove the '#' from the href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 120; // Add the height of your fixed header

      const offsetTop = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});
