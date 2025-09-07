// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery img');
const closeBtn = document.querySelector('.lightbox .close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => lightbox.classList.remove('show'));

// Page load animations
window.addEventListener('load', () => {
  const logo = document.querySelector('.site-header .logo');
  const nav = document.querySelector('.nav-links');
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero-photo');
  const sections = document.querySelectorAll('.section');
  const cards = document.querySelectorAll('.cards');
  const social = document.querySelector('.social-icons');

  // Animate header
  setTimeout(()=>{ logo.style.transform='translateY(0)'; logo.style.opacity='1'; }, 300);
  setTimeout(()=>{ nav.style.transform='translateY(0)'; nav.style.opacity='1'; }, 600);

  // Animate hero
  setTimeout(()=>{ hero.style.opacity='1'; hero.style.transform='translateY(0)'; heroImg.style.transform='scale(1)'; }, 900);

  // Animate sections one by one
  sections.forEach((sec, i) => {
    setTimeout(()=>{ sec.style.opacity='1'; sec.style.transform='translateY(0)'; }, 1200 + i*300);
  });

  // Animate cards
  setTimeout(()=>{ cards.forEach(c=>{ c.style.opacity='1'; c.style.transform='translateY(0)'; }); }, 2000);

  // Animate footer social
  setTimeout(()=>{ social.style.opacity='1'; social.style.transform='translateY(0)'; }, 2500);

  // Animate gallery images
  galleryImages.forEach((img, i) => {
    setTimeout(()=>{ img.style.opacity='1'; img.style.transform='scale(1)'; img.classList.add('loaded'); }, 1800 + i*200);
  });
});
