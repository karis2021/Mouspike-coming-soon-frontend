const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!ok) {
    msg.textContent = "Please enter a valid email.";
    msg.className = "form-msg error";
    emailInput.focus();
    return;
  }

  msg.textContent = "EARLY ACCESS REQUEST.";
  msg.className = "form-msg success";
  form.reset();
});