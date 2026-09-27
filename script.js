const PLAY_STORE_URL = "#"; // TODO: später durch die echte Google-Play-URL ersetzen

document.querySelectorAll('[data-play-link]').forEach(link => {
  link.href = PLAY_STORE_URL;
  if (PLAY_STORE_URL === '#') {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Google-Play-Link ist noch nicht eingetragen. Öffne script.js und ersetze PLAY_STORE_URL.');
    });
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(Boolean(open)));
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
