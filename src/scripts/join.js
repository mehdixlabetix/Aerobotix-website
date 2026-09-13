const joinForm = document.querySelector("[data-join-form]");
if (joinForm instanceof HTMLFormElement) {
  const fields = joinForm.querySelector("[data-join-fields]");
  const status = joinForm.querySelector("[data-join-status]");
  const submit = joinForm.querySelector('[type="submit"]');
  const progressBar = joinForm.querySelector("[data-join-progress]");
  const progressLabel = joinForm.querySelector("[data-join-progress-label]");
  const required = [...joinForm.querySelectorAll("[required]")];
  let sending = false;
  let pendingApplication = null;

  const updateProgress = () => {
    const complete = required.filter((input) => input.value.trim() && input.validity.valid).length;
    progressBar.value = complete;
    progressLabel.textContent = `${complete} / ${required.length} essentials`;
  };
  joinForm.addEventListener("input", updateProgress);
  joinForm.addEventListener("change", updateProgress);
  updateProgress();

  joinForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;
    required.forEach((input) => { input.value = input.value.trim(); });
    if (!joinForm.reportValidity()) return;

    const formValues = Object.fromEntries([...new FormData(joinForm)].map(([key, value]) => [key, value.trim()]));
    const values = {
      first_name: formValues.prenom,
      last_name: formValues.nom,
      email: formValues.email,
      phone: formValues.phone,
      study_level: formValues.niveau,
      field_of_study: formValues.filiere,
      facebook_url: formValues.fb,
      interests: formValues.interests,
      expectations: formValues.expectations,
    };
    const fingerprint = JSON.stringify(values);
    if (!pendingApplication || pendingApplication.fingerprint !== fingerprint) {
      pendingApplication = { id: crypto.randomUUID(), fingerprint };
    }
    sending = true;
    fields.disabled = true;
    joinForm.dataset.state = "sending";
    joinForm.setAttribute("aria-busy", "true");
    submit.textContent = "Sending your application…";
    status.textContent = "Connecting with the team…";
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/memberships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: pendingApplication.id, ...values }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error("Application not confirmed");
      joinForm.dataset.state = "success";
      status.textContent = "Application received. Thank you for taking the first step! The AeRobotiX team will contact you using the details you shared.";
      submit.textContent = "Application received ✓";
      joinForm.reset();
      fields.hidden = true;
      progressBar.value = required.length;
      progressLabel.textContent = "Application received";
      pendingApplication = null;
    } catch {
      joinForm.dataset.state = "error";
      status.textContent = "We couldn’t confirm your application. Your answers are still here. Please try again, or email aerobotix@insat.ucar.tn for help.";
      fields.disabled = false;
      submit.textContent = "Try sending again ↗";
    } finally {
      window.clearTimeout(timeout);
      sending = false;
      joinForm.removeAttribute("aria-busy");
      status.focus();
    }
  });
}

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton = document.querySelector("[data-motion-toggle]");
const caption = document.querySelector("[data-robot-caption]");
const scene = document.querySelector(".robot-scene");
let manuallyPaused = false;
let sceneVisible = true;
let pointerFrame = 0;

function syncMotion() {
  const paused = manuallyPaused || motionPreference.matches;
  document.body.classList.toggle("motion-paused", paused || document.hidden || !sceneVisible);
  motionButton.textContent = motionPreference.matches ? "Reduced motion" : paused ? "Resume motion" : "Pause motion";
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.disabled = motionPreference.matches;
}
motionButton.addEventListener("click", () => { manuallyPaused = !manuallyPaused; syncMotion(); });
motionPreference.addEventListener("change", syncMotion);
document.addEventListener("visibilitychange", syncMotion);
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => { sceneVisible = entry.isIntersecting; syncMotion(); }).observe(scene);
}
syncMotion();

window.addEventListener("pointermove", (event) => {
  if (document.body.classList.contains("motion-paused") || event.pointerType === "touch" || pointerFrame) return;
  pointerFrame = requestAnimationFrame(() => {
    const rect = scene.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / rect.width));
    const y = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / rect.height));
    scene.style.setProperty("--look-x", `${x * 7}px`);
    scene.style.setProperty("--look-y", `${y * 4}px`);
    scene.style.setProperty("--head-angle", `${x * 5}deg`);
    pointerFrame = 0;
  });
}, { passive: true });

const fieldCaptions = {
  prenom: "Every great team starts with a hello.", nom: "Nice to meet you, future teammate.",
  email: "Let’s stay connected.", phone: "One step closer to the crew.",
  niveau: "There’s a place for every stage of the journey.", filiere: "Different backgrounds. Better ideas.",
  fb: "Let’s put a face to the name.", interests: "Robots? Flight? Tell us what sparks your curiosity.",
  expectations: "Big ideas start with a little curiosity.",
};
joinForm.addEventListener("focusin", (event) => {
  if (fieldCaptions[event.target.name]) caption.textContent = fieldCaptions[event.target.name];
});
new MutationObserver(() => {
  const state = joinForm.dataset.state;
  document.body.dataset.applicationState = state;
  if (state === "sending") caption.textContent = "Your next chapter is on its way…";
  if (state === "success") caption.textContent = "Application received. See you in the workshop!";
  if (state === "error") caption.textContent = "Still here with you. Let’s try that again.";
}).observe(joinForm, { attributes: true, attributeFilter: ["data-state"] });

// A lightweight depth field: no model downloads or animation library required.
const cosmos = document.querySelector(".robot-cosmos");
const context = cosmos.getContext("2d");
const boostButton = document.querySelector("[data-robot-boost]");
let boostTimer;
let cosmosFrame = 0;
let lastFrame = 0;
let cosmosWidth = 0;
let cosmosHeight = 0;
const stars = Array.from({ length: 85 }, () => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() * 1.8 + 0.2 }));

function drawCosmos(time = 0) {
  cosmosFrame = 0;
  if (!context) return;
  const paused = document.body.classList.contains("motion-paused");
  const delta = lastFrame ? Math.min((time - lastFrame) / 1000, 0.04) : 0;
  lastFrame = time;
  context.clearRect(0, 0, cosmosWidth, cosmosHeight);
  const boosted = scene.classList.contains("is-boosting");
  const speed = boosted ? 1.2 : 0.1;
  for (const star of stars) {
    if (!paused) star.z -= delta * speed;
    if (star.z < 0.12) { star.z = 2; star.x = Math.random() * 2 - 1; star.y = Math.random() * 2 - 1; }
    const x = cosmosWidth / 2 + star.x * cosmosWidth * 0.42 / star.z;
    const y = cosmosHeight / 2 + star.y * cosmosHeight * 0.42 / star.z;
    context.globalAlpha = Math.min(0.75, 0.55 / star.z);
    context.fillStyle = "#80dcff";
    context.beginPath(); context.arc(x, y, Math.min(2, 0.8 / star.z), 0, Math.PI * 2); context.fill();
    if (boosted && !paused) {
      context.strokeStyle = "#23a9e0";
      context.beginPath(); context.moveTo(x, y); context.lineTo(x + (x - cosmosWidth / 2) * 0.09, y + (y - cosmosHeight / 2) * 0.09); context.stroke();
    }
  }
  context.globalAlpha = 1;
  if (!paused) cosmosFrame = requestAnimationFrame(drawCosmos);
}
function resizeCosmos() {
  const rect = scene.getBoundingClientRect();
  const ratio = Math.min(devicePixelRatio || 1, 2);
  cosmosWidth = rect.width; cosmosHeight = rect.height;
  cosmos.width = Math.round(rect.width * ratio); cosmos.height = Math.round(rect.height * ratio);
  context?.setTransform(ratio, 0, 0, ratio, 0, 0);
  if (!cosmosFrame) drawCosmos();
}
new ResizeObserver(resizeCosmos).observe(scene);
new MutationObserver(() => {
  if (document.body.classList.contains("motion-paused")) {
    cancelAnimationFrame(cosmosFrame); cosmosFrame = 0; lastFrame = 0; drawCosmos();
  } else if (!cosmosFrame) { lastFrame = 0; cosmosFrame = requestAnimationFrame(drawCosmos); }
}).observe(document.body, { attributes: true, attributeFilter: ["class"] });
boostButton.addEventListener("click", () => {
  if (motionPreference.matches || manuallyPaused) {
    caption.textContent = "Energy received. Ready to build together!";
    return;
  }
  scene.classList.add("is-boosting");
  boostButton.disabled = true;
  caption.textContent = "A little energy. A lot of possibility.";
  clearTimeout(boostTimer);
  boostTimer = setTimeout(() => {
    scene.classList.remove("is-boosting");
    boostButton.disabled = false;
    caption.textContent = "Your turn. Let’s build something together.";
  }, 1800);
});
