const inputs = document.querySelectorAll('input.form-control');

// regex patterns
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  password: /^[\w@-]{8,20}$/,
};

// validaion process
function validate(field, regex) {
  if(regex.test(field.value)) {
    field.classList.add('valid');
    field.classList.remove('invalid');
  } else {
    field.classList.add('invalid');
    field.classList.remove('valid');
  }
};

// validate each input
inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
