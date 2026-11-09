document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Salsa Nur Maulani | Portofolio Personal`;
  }

  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = [...document.querySelectorAll('header[id], section[id], footer[id]')];

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 120;

    let currentId = 'home';
    for (const section of sections) {
      if (section.offsetTop <= scrollPosition) {
        currentId = section.getAttribute('id') || 'home';
      }
    }

    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });
  };

  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav, { passive: true });
});