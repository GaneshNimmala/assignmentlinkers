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
