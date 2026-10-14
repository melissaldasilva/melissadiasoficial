// Menu mobile
const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });
}

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
  });
});

// Ano atual no rodapé
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Pausa os vídeos automaticamente quando saem da tela
const sectionVideos = document.querySelectorAll('.about__video, .method__video, .course__video, .corporate__video');

if (sectionVideos.length) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.pause();
      }
    });
  }, { threshold: 0.25 });

  sectionVideos.forEach((video) => videoObserver.observe(video));

  // Ao dar play em um vídeo, pausa os outros
  sectionVideos.forEach((video) => {
    video.addEventListener('play', () => {
      sectionVideos.forEach((other) => {
        if (other !== video) other.pause();
      });
    });
  });
}
