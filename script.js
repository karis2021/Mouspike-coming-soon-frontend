const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();
const form = document.getElementById("earlyAccessForm");
const emailInput = document.getElementById("email");
const msg = document.getElementById("formMsg");
const API_BASE_URL = "https://mouspike-early-access-backend.onrender.com";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  if (!email) return;
  msg.textContent = "Submited";

  try {
    const res = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

  const data = await res.json();
  const status = (data.status || "").toLowerCase();
  if (status === "ok") {
  msg.textContent = "✅ You're in. Welcome to Mouspike Early Access.";
  emailInput.value = "";
  return;
  }
  if (status === "exists") {
  msg.textContent = "⚠️ You're already on the list.";
  return;
  }
  msg.textContent = "❌ Something went wrong. Try again.";
  } catch (err){
  console.error(err);
  msg.textContent = "❌ Backend nor reachable. Is it running?";
  }
});