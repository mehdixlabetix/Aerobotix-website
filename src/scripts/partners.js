const partnerForm = document.querySelector("[data-partner-form]");
const partnerFields = document.querySelector("[data-partner-fields]");
const partnerStatus = document.querySelector("[data-partner-status]");
const partnerSubmit = partnerForm.querySelector('[type="submit"]');
let sending = false;
let pendingRequest = null;

partnerFields.disabled = false;
partnerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (sending) return;
  partnerForm.querySelectorAll("input,textarea").forEach((input) => { input.value = input.value.trim(); });
  if (!partnerForm.reportValidity()) return;

  const values = Object.fromEntries(new FormData(partnerForm));
  const fingerprint = JSON.stringify(values);
  if (!pendingRequest || pendingRequest.fingerprint !== fingerprint) {
    pendingRequest = { id: crypto.randomUUID(), fingerprint };
  }

  sending = true;
  partnerFields.disabled = true;
  partnerForm.dataset.state = "sending";
  partnerForm.setAttribute("aria-busy", "true");
  partnerSubmit.textContent = "Sending your request…";
  partnerStatus.textContent = "Connecting with the team…";

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch("/api/partnerships", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: pendingRequest.id, ...values }),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error("Request not confirmed");

    partnerForm.dataset.state = "success";
    partnerStatus.textContent = "Partnership request received. Thank you! The AeRobotiX team will contact you soon.";
    partnerSubmit.textContent = "Request received ✓";
    partnerForm.reset();
    partnerFields.hidden = true;
    pendingRequest = null;
  } catch {
    partnerForm.dataset.state = "error";
    partnerStatus.textContent = "We couldn’t confirm your request. Your answers are still here. Please try again or contact us by email.";
    partnerFields.disabled = false;
    partnerSubmit.textContent = "Try sending again ↗";
  } finally {
    window.clearTimeout(timeout);
    sending = false;
    partnerForm.removeAttribute("aria-busy");
    partnerStatus.focus();
  }
});
