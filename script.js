const reveals = document.querySelectorAll('.reveal');
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
