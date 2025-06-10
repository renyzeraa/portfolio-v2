export function initContactArea() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (eventForm) {
    eventForm.preventDefault();
    const name = validateField('name', 'O campo Nome é obrigatório.');
    const email = validateEmailField();
    const message = validateField('message', 'O campo Mensagem é obrigatório.');

    if (name && email && message) {
      const formData = new FormData(form);

      setLoading(true);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          messageSuccess();
          form.reset();
          clearAllErrors();
        })
        .catch((error) => {
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  function validateField(fieldId, errorMessage) {
    const field = form.querySelector(`#${fieldId}`);
    const value = field.value.trim();

    if (fieldId === 'name' && value.split(' ').length < 2) {
      setErrorFor(field, 'Por favor, insira seu nome completo.');
      return false;
    }

    if (value === '') {
      setErrorFor(field, errorMessage);
      return false;
    } else {
      clearErrorFor(field);
      return value;
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
      return emailValue;
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

  function setLoading(isLoading) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (isLoading) {
      submitButton.disabled = true;
      submitButton.classList.add('loading');
    } else {
      submitButton.disabled = false;
      submitButton.classList.remove('loading');
    }
  }

  function messageSuccess() {
    setLoading(false);
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.classList.add('success');
    setTimeout(() => {
      submitButton.classList.remove('success');
    }, 1200);
  }
}