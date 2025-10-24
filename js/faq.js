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



const form = document.getElementById('contact-form');
const error = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || message === "") {
    error.style.display = "block";
    error.textContent = "Fill all the input";
    return;
  }

  if (!email.includes("@")){
    error.style.display = "block";
    error.textContent = "Email invalide.";
    return;
  }

  success.style.display = "block";
  success.textContent = "Message envoye avec succes";
  form.reset();
})