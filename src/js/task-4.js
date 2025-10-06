const loginForm = document.querySelector(".login-form");

const handleLoginForm = (event) => {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const userInfo = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(userInfo);

  event.currentTarget.reset();
};

loginForm.addEventListener("submit", handleLoginForm);
