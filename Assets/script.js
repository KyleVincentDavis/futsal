// Add 'scroll' class to body on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.body.classList.add('scroll');
    } else {
      document.body.classList.remove('scroll');
    }
  });
  