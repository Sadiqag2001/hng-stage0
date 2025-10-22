
  document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
  const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
  const messageError = document.querySelector('[data-testid="test-contact-error-message"]');
  const successMsg = document.querySelector('[data-testid="test-contact-success"]');

  [nameError, emailError, messageError, successMsg].forEach(el => el.classList.add("hidden"));

  if (name.value.trim() === "") {
    nameError.classList.remove("hidden");
    valid = false;
  }

  if (!email.value.includes("@")) {
    emailError.classList.remove("hidden");
    valid = false;
  }

  if (message.value.trim().length < 10) {
    messageError.classList.remove("hidden");
    valid = false;
  }

  if (valid) {
    successMsg.classList.remove("hidden");
    document.getElementById("contactForm").reset();
  }
});
