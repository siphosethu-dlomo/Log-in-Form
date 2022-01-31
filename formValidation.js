const inputs = document.querySelectorAll('input.form-control');

// regex patterns
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  password: /^[\w@-]{8,20}$/,
};

// validation process
function validate(field, regex) {
  if(regex.test(field.value)) {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
  } else {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
  }
  if(field.id === 'username') {
    localStorage.setItem('username', field.value);
  }
};

inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// dynamic welcome message
const username = localStorage.getItem('username');
const welcomeMessage = `<h1 class="text-center mb-5">Logged in ${username}!</h1>`;
document.querySelector('.welcome-message').innerHTML = welcomeMessage;