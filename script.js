const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();
const form = document.getElementById("earlyAccessForm");
const emailInput = document.getElementById("email");
const msg = document.getElementById("formMsg");
const API_BASE_URL = "https://mouspike-early-access-backend.onrender.com";
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 15000); // 15s


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  if (!email) return;
  msg.textContent = "Submitting...";

try {
  const res = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    signal: controller.signal
  });
  clearTimeout(timeout);
  
  const data = await res.json();
  if (data.status === "ok") {
    msg.textContent = "✅ You're in. Welcome to Mouspike Early Access.";
    emailInput.value = "";
    return;
  }
if (data.status === "Exists") {
  msg.textContent = "⚠️ You're already on the list.";
  return;
}
msg.textContent = "❌ Something went wrong. Try again.";
} catch (err){
  console.error(err);
  msg.textContent = "❌ Backend nor reachable. Is it running?";
}
});
 const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.disabled = false;
