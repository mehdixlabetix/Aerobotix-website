const simulations = [...document.querySelectorAll("[data-simulation]")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initializeSimulation(simulation) {
  if (!(simulation instanceof HTMLCanvasElement)) return;
  const context = simulation.getContext("2d");
  if (!context) return;

  const mode = simulation.dataset.simulation || "eurobot";
  const stage = simulation.parentElement;
  let width = 0;
  let height = 0;
  let frame = 0;
  let start = performance.now();

  function resize() {
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    simulation.width = Math.round(width * ratio);
    simulation.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function roundedRectangle(x, y, w, h, radius) {
    context.beginPath();
    context.roundRect(x, y, w, h, radius);
  }

  function drawEurobot(time) {
    const progress = prefersReducedMotion.matches ? 0.38 : (((time % 12000) + 12000) % 12000) / 12000;
    const pad = Math.min(width, height) * 0.14;
    const fieldWidth = width - pad * 2;
    const fieldHeight = height - pad * 2;

    context.save();
    context.strokeStyle = "rgba(128, 220, 255, .24)";
    context.lineWidth = 1;
    roundedRectangle(pad, pad, fieldWidth, fieldHeight, 18);
    context.stroke();

    const targets = [
      [pad + fieldWidth * 0.18, pad + fieldHeight * 0.22, "A"],
      [pad + fieldWidth * 0.78, pad + fieldHeight * 0.2, "B"],
      [pad + fieldWidth * 0.7, pad + fieldHeight * 0.72, "C"],
      [pad + fieldWidth * 0.25, pad + fieldHeight * 0.78, "D"],
    ];

    targets.forEach(([x, y, label], index) => {
      const pulse = 1 + Math.sin(time / 500 + index) * 0.08;
      context.beginPath();
      context.arc(x, y, 17 * pulse, 0, Math.PI * 2);
      context.strokeStyle = index % 2 ? "rgba(238, 32, 40, .58)" : "rgba(35, 169, 224, .58)";
      context.stroke();
      context.fillStyle = "rgba(6, 8, 13, .68)";
      context.fill();
      context.fillStyle = "rgba(255, 255, 255, .55)";
      context.font = "10px Space Grotesk, sans-serif";
      context.textAlign = "center";
      context.fillText(label, x, y + 3);
    });

    const segment = (Number.isFinite(progress) ? progress : 0) * targets.length;
    const index = Math.max(0, Math.min(targets.length - 1, Math.floor(segment)));
    const nextIndex = (index + 1) % targets.length;
    const local = segment - Math.floor(segment);
    const eased = local * local * (3 - 2 * local);
    const from = targets[index];
    const to = targets[nextIndex];
    const robotX = from[0] + (to[0] - from[0]) * eased;
    const robotY = from[1] + (to[1] - from[1]) * eased;
    const angle = Math.atan2(to[1] - from[1], to[0] - from[0]);

    context.setLineDash([6, 9]);
    context.beginPath();
    targets.forEach((target, targetIndex) => {
      if (targetIndex === 0) context.moveTo(target[0], target[1]);
      else context.lineTo(target[0], target[1]);
    });
    context.closePath();
    context.strokeStyle = "rgba(255, 255, 255, .16)";
    context.stroke();
    context.setLineDash([]);

    context.save();
    context.translate(robotX, robotY);
    context.rotate(angle);
    context.fillStyle = "rgba(238, 32, 40, .9)";
    context.shadowColor = "rgba(238, 32, 40, .75)";
    context.shadowBlur = 20;
    roundedRectangle(-17, -13, 34, 26, 6);
    context.fill();
    context.shadowBlur = 0;
    context.fillStyle = "rgba(255, 255, 255, .82)";
    context.fillRect(8, -7, 12, 3);
    context.fillRect(8, 4, 12, 3);
    context.restore();

    for (let ray = -2; ray <= 2; ray += 1) {
      context.beginPath();
      context.moveTo(robotX, robotY);
      const rayAngle = angle + ray * 0.2;
      context.lineTo(robotX + Math.cos(rayAngle) * 72, robotY + Math.sin(rayAngle) * 72);
      context.strokeStyle = `rgba(128, 220, 255, ${0.16 - Math.abs(ray) * 0.025})`;
      context.stroke();
    }
    context.restore();
  }

  function roadPoint(progress, offset = 0) {
    const y = height * (1.12 - progress * 1.24);
    const center = width * 0.5 + Math.sin(progress * Math.PI * 2.1 + 0.3) * width * 0.19;
    const roadWidth = width * (0.28 - progress * 0.09);
    return { x: center + roadWidth * offset, y };
  }

  function drawNxp(time) {
    const progress = prefersReducedMotion.matches ? 0.56 : (((time % 7000) + 7000) % 7000) / 7000;

    [-1, 1].forEach((side) => {
      context.beginPath();
      for (let step = 0; step <= 90; step += 1) {
        const point = roadPoint(step / 90, side);
        if (step === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.strokeStyle = side < 0 ? "rgba(35, 169, 224, .7)" : "rgba(238, 32, 40, .62)";
      context.lineWidth = 2;
      context.shadowColor = side < 0 ? "rgba(35, 169, 224, .5)" : "rgba(238, 32, 40, .45)";
      context.shadowBlur = 10;
      context.stroke();
      context.shadowBlur = 0;
    });

    context.setLineDash([8, 13]);
    context.beginPath();
    for (let step = 0; step <= 90; step += 1) {
      const point = roadPoint(step / 90, 0);
      if (step === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    }
    context.strokeStyle = "rgba(255, 255, 255, .28)";
    context.lineWidth = 1;
    context.stroke();
    context.setLineDash([]);

    const car = roadPoint(progress, 0);
    const ahead = roadPoint(Math.min(1, progress + 0.02), 0);
    const angle = Math.atan2(ahead.y - car.y, ahead.x - car.x) + Math.PI / 2;
    context.save();
    context.translate(car.x, car.y);
    context.rotate(angle);
    context.shadowColor = "rgba(35, 169, 224, .9)";
    context.shadowBlur = 24;
    context.fillStyle = "rgba(35, 169, 224, .94)";
    roundedRectangle(-9, -15, 18, 30, 5);
    context.fill();
    context.shadowBlur = 0;
    context.fillStyle = "rgba(255, 255, 255, .9)";
    context.fillRect(-5, -10, 10, 4);
    context.fillStyle = "rgba(238, 32, 40, .95)";
    context.fillRect(-5, 8, 10, 3);
    context.restore();

    context.beginPath();
    context.arc(car.x, car.y, 38 + Math.sin(time / 260) * 3, 0, Math.PI * 2);
    context.strokeStyle = "rgba(128, 220, 255, .26)";
    context.stroke();

    const scanY = height * (0.82 - ((time % 2600) / 2600) * 0.62);
    context.beginPath();
    context.moveTo(width * 0.14, scanY);
    context.lineTo(width * 0.86, scanY);
    context.strokeStyle = "rgba(128, 220, 255, .3)";
    context.stroke();
  }

  function draw(now) {
    context.clearRect(0, 0, width, height);
    const elapsed = now - start;
    if (mode === "nxp") drawNxp(elapsed);
    else drawEurobot(elapsed);
    if (!prefersReducedMotion.matches) frame = window.requestAnimationFrame(draw);
  }

  function restart() {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
    start = performance.now();
    draw(start);
  }

  const resizeObserver = new ResizeObserver(() => {
    resize();
    if (prefersReducedMotion.matches) draw(performance.now());
  });
  if (stage) resizeObserver.observe(stage);
  resize();
  restart();

  prefersReducedMotion.addEventListener?.("change", restart);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    } else if (!document.hidden && !frame) {
      restart();
    }
  });
}

function initializeGallery() {
  const gallery = document.querySelector("[data-gallery-grid]");
  const dialog = document.querySelector("[data-archive-dialog]");
  const dialogImage = dialog?.querySelector("[data-archive-dialog-image]");
  const dialogTitle = dialog?.querySelector("[data-archive-dialog-title]");
  const dialogCaption = dialog?.querySelector("[data-archive-dialog-caption]");
  const closeButton = dialog?.querySelector("[data-close-archive]");
  let previousFocus = null;

  if (!gallery || !(dialog instanceof HTMLDialogElement) || !(dialogImage instanceof HTMLImageElement)) return;

  function closeDialog() {
    dialog.close();
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  }

  gallery.addEventListener("click", (event) => {
    const frame = event.target.closest("[data-gallery-image]");
    if (!frame) return;
    previousFocus = frame;
    dialogImage.src = frame.dataset.galleryImage || "";
    dialogImage.alt = frame.dataset.galleryAlt || "Competition moment";
    if (dialogTitle) dialogTitle.textContent = frame.dataset.galleryTag || "Competition archive";
    if (dialogCaption) dialogCaption.textContent = frame.dataset.galleryAlt || "Competition moment";
    dialog.showModal();
  });

  closeButton?.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
}

simulations.forEach(initializeSimulation);
initializeGallery();
