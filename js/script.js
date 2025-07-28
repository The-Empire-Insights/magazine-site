// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }

  // ===== Search Bar Styling (Optional) =====
  const searchInput = document.querySelector('.header-actions input');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.style.borderColor = '#0073AA';
    });
    searchInput.addEventListener('blur', () => {
      searchInput.style.borderColor = '#ccc';
    });
  }

  // ===== Optional: Close nav when link clicked (on mobile) =====
  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        siteNav.classList.remove('open');
      }
    });
  });
});
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent!');
});

