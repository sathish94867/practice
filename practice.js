// LOGIN
document.getElementById('login-button').addEventListener('click', e => {
  e.preventDefault();
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value.trim();
  const err = document.getElementById('login-error-message');
  if (!u || !p) { err.textContent = 'Cannot be empty'; return; }
  if (u === 'user' && p === 'password') {
    err.textContent = '';
    document.getElementById('login').style.display = 'none';
    document.getElementById('protected-content').style.display = '';
    alert('Login successful!');
  } else {
    err.textContent = 'Invalid credentials';
  }
});

// SLIDER
let slide = 0;
const imgs = document.querySelector('.slider-imgs');
const total = imgs.children.length;
document.querySelector('.prev').onclick = () => {
  slide = (slide - 1 + total) % total;
  imgs.style.transform = `translateX(-${slide * 100}%)`;
};
document.querySelector('.next').onclick = () => {
  slide = (slide + 1) % total;
  imgs.style.transform = `translateX(-${slide * 100}%)`;
};

// COMMENTS
document.getElementById('add-comment').onclick = () => {
  const name = document.getElementById('comment-name').value.trim();
  const text = document.getElementById('comment-text').value.trim();
  if (name && text) {
    const li = document.createElement('li');
    li.textContent = `${name}: ${text}`;
    document.getElementById('comment-list').appendChild(li);
    document.getElementById('comment-name').value = '';
    document.getElementById('comment-text').value = '';
  }
};

// CONTACT FORM
document.getElementById('contact-send').onclick = () => {
  alert('Message Sent!');
  [ 'contact-name','contact-email','contact-message' ]
    .forEach(id => document.getElementById(id).value = '');
};
