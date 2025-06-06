export function initContactArea() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isNameValid = validateField('name', 'O campo Nome é obrigatório.');
    const isEmailValid = validateEmailField();
    const isMessageValid = validateField('message', 'O campo Mensagem é obrigatório.');

    if (isNameValid && isEmailValid && isMessageValid) {
      form.reset(); // Limpa o formulário
      clearAllErrors(); // Limpa todas as mensagens de erro
    }
  });

  function validateField(fieldId, errorMessage) {
    const field = form.querySelector(`#${fieldId}`);
    const value = field.value.trim();

    if (value === '') {
      setErrorFor(field, errorMessage);
      return false;
    } else {
      clearErrorFor(field);
      return true;
    }
  }

  function validateEmailField() {
    const emailField = form.querySelector('#email');
    const emailValue = emailField.value.trim();

    if (emailValue === '') {
      setErrorFor(emailField, 'O campo Email é obrigatório.');
      return false;
    } else if (!isEmailValid(emailValue)) {
      setErrorFor(emailField, 'Por favor, insira um email válido.');
      return false;
    } else {
      clearErrorFor(emailField);
      return true;
    }
  }

  function setErrorFor(field, message) {
    const formGroup = field.parentElement;
    const errorMessageElement = formGroup.querySelector('.error-message');

    field.classList.add('invalid');
    errorMessageElement.textContent = message;
  }

  function clearErrorFor(field) {
    const formGroup = field.parentElement;
    const errorMessageElement = formGroup.querySelector('.error-message');

    field.classList.remove('invalid');
    errorMessageElement.textContent = '';
  }

  function clearAllErrors() {
    const errorFields = form.querySelectorAll('.invalid');
    errorFields.forEach(field => clearErrorFor(field));
  }

  function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}