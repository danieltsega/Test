// Get the video
var video = document.getElementById("productVideo");

// Function to check if the video is in the viewport
function isVideoInView() {
  var rect = video.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Event listener for scroll event
window.addEventListener("scroll", function () {
  // Play or pause the video based on its visibility
  if (isVideoInView()) {
    video.play();
  } else {
    video.pause();
  }
});

//Larger screens
// Get the video
var videoLarge = document.getElementById("productVideo-Larger");

// Function to check if the video is in the viewport
function isVideoInViewLarger() {
  var rect = videoLarge.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Event listener for scroll event
window.addEventListener("scroll", function () {
  // Play or pause the video based on its visibility
  if (isVideoInViewLarger()) {
    videoLarge.play();
  } else {
    videoLarge.pause();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Function to handle animations when the second section comes into view
  function handleFruitIntersection(entries) {
    entries.forEach((entry) => {
      const section = entry.target;
      const image = section.querySelector("img");
      const texts = section.querySelectorAll("h2, p, span");

      if (entry.isIntersecting) {
        // Apply animations to image and texts
        image.classList.add("image-pop-in");
        texts.forEach((text) => text.classList.add("text-pop-in"));
      } else {
        // Remove animations from image and texts
        image.classList.remove("image-pop-in");
        texts.forEach((text) => text.classList.remove("text-pop-in"));
      }
    });
  }

  // Create an IntersectionObserver to observe the second section
  const observer2 = new IntersectionObserver(handleFruitIntersection, {
    threshold: 0.5, // Trigger when 10% of the section is in view
  });

  // Select the second section to observe
  const fruitSection = document.getElementById("fruit-section");

  // Start observing the second section
  observer2.observe(fruitSection);
});

document.addEventListener("DOMContentLoaded", () => {
  // Function to handle animations when the third section comes into view
  function handleProductIntersection(entries) {
    entries.forEach((entry) => {
      const section = entry.target;
      const image = section.querySelector("img");
      const texts = section.querySelectorAll("h2, p, span");

      if (entry.isIntersecting) {
        // Apply animations to image and texts
        image.classList.add("image-slide-in");
        texts.forEach((text) => text.classList.add("text-slide-in"));
      } else {
        // Remove animations from image and texts
        image.classList.remove("image-slide-in");
        texts.forEach((text) => text.classList.remove("text-slide-in"));
      }
    });
  }

  // Create an IntersectionObserver to observe the third section
  const observer3 = new IntersectionObserver(handleProductIntersection, {
    threshold: 0.5, // Trigger when 10% of the section is in view
  });

  // Select the third section to observe
  const productSection = document.getElementById("product-section");

  // Start observing the third section
  observer3.observe(productSection);
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== Hero Scroll Animation ============*/

// Get all leaf elements
const leafElements = document.querySelectorAll(".home_leaf");

// Object to store original positions and rotations of each leaf
const originalLeafStyles = {};

// Function to store original positions and rotations of each leaf
function storeOriginalStyles() {
  leafElements.forEach((leaf, index) => {
    originalLeafStyles[index] = {
      top: parseFloat(getComputedStyle(leaf).getPropertyValue("top")),
      left: parseFloat(getComputedStyle(leaf).getPropertyValue("left")),
      rotation: getComputedStyle(leaf).getPropertyValue("transform"),
    };
  });
}

// Function to handle scroll event
function handleScroll() {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Get the height of the hero section and 10% of the view height
  const heroSectionHeight = document.querySelector(".home").offsetHeight;
  const scrollTriggerPosition = heroSectionHeight * 0.1;

  // Check if the user has scrolled away from the hero section
  const scrolledAway = scrollPosition > scrollTriggerPosition;

  // Loop through each leaf element
  leafElements.forEach((leaf, index) => {
    // Get the original rotation and position of the leaf
    const { top, left, rotation } = originalLeafStyles[index];

    // Calculate the new position based on scroll direction and distance from hero section
    let newPosition = top;
    if (scrolledAway) {
      newPosition -= (scrollPosition - scrollTriggerPosition) * 0.5;
    }

    // Apply new position to the leaf with smooth transition
    leaf.style.transition = "transform 1s ease, top 1s ease";
    leaf.style.top = newPosition + "px";
    leaf.style.left = left + "px";
    leaf.style.transform = rotation;
  });
}

// Attach scroll event listener to window
window.addEventListener("scroll", handleScroll);

// Store original leaf styles when the page loads
window.addEventListener("load", storeOriginalStyles);

// Initial call to handleScroll to position leaves correctly on page load
handleScroll();
