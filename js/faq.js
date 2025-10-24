// Menu
const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// FAQ QUESTIONS

document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

document.querySelectorAll('.footer-title').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.classList.toggle('active');
  })
})




