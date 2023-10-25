const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { elements } = event.currentTarget;

  if (elements.password.value === "" || elements.email.value === "") {
    return alert("всі поля повинні бути заповнені!!");
  }
  const formData = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(formData);

  event.currentTarget.reset();
}
