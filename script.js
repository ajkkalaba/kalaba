// ---------------------
// Smooth scroll function
// ---------------------
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ---------------------
// Lightbox functionality
// ---------------------
const images = Array.from(document.querySelectorAll(".gallery img"));
let currentIndex = 0;

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const leftArrow = document.querySelector(".lightbox .arrow.left");
const rightArrow = document.querySelector(".lightbox .arrow.right");

// Open lightbox
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightbox.style.display = "block";
  setTimeout(() => lightbox.classList.add("show"), 10); // fade/zoom in
}

// Show image with fade animation
function showImage(index) {
  lightboxImg.classList.remove("fade-in");    // reset animation
  void lightboxImg.offsetWidth;               // trigger reflow
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.classList.add("fade-in");       // trigger fade-in
}

// Add click event to each gallery image
images.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Close lightbox (X button)
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 400); // match CSS transition
});

// Close lightbox if clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 400);
  }
});

// Left/Right arrow navigation with fade
leftArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  showImage((currentIndex - 1 + images.length) % images.length);
});

rightArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  showImage((currentIndex + 1) % images.length);
});

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded'); // fade in when loaded
  });
  if (img.complete) img.classList.add('loaded'); // for cached images
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});
