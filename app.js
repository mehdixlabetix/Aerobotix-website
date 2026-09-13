document.documentElement.classList.add("js");

const CLOUDINARY_TEAM = "https://res.cloudinary.com/dtwmihpq4/image/upload/f_auto,q_auto,w_700";
const CLOUDINARY_CLUB = "https://res.cloudinary.com/dbdfckq5e/image/upload/f_auto,q_auto,w_760";
const REEL_URL =
  "https://res.cloudinary.com/dbdfckq5e/video/upload/q_auto/auo8mygp5zv90rextntz.mp4";

const team = [
  {
    name: "Sami Bahlous",
    role: "President",
    image: "v1727725118/1_e3rxs1.png",
    group: "Executive board",
  },
  {
    name: "Lina Hamad",
    role: "Administrative Vice President",
    image: "v1727725119/2_bar5hy.png",
    group: "Executive board",
  },
  {
    name: "Fayez Zouari",
    role: "Technical Vice President",
    image: "v1727725118/3_kukvc5.png",
    group: "Executive board",
  },
  {
    name: "Rayen Bouafif",
    role: "Training Manager",
    image: "v1727725122/6_nz8gyv.png",
    group: "Management team",
  },
  {
    name: "Marwen Dhifi",
    role: "Training Manager",
    image: "v1727725127/9_mmmhkn.png",
    group: "Management team",
  },
  {
    name: "Abdelkarim Salah",
    role: "Training Manager",
    image: "v1727725119/7_ev17do.png",
    group: "Management team",
  },
  {
    name: "Mohamed Zouaghi",
    role: "Projects Manager",
    image: "v1727725125/8_yv1ywd.png",
    group: "Management team",
  },
  {
    name: "Amine BelhajAmor",
    role: "Aeronautics Manager",
    image: "v1727725126/14_n72byw.png",
    group: "Management team",
  },
  {
    name: "Med Hedi Zadem",
    role: "Logistics Manager",
    image: "v1727725127/13_itirom.png",
    group: "Management team",
  },
  {
    name: "Zeyneb Ben Abdallah",
    role: "Human Resources Manager",
    image: "v1727725125/4_mq804n.png",
    group: "Management team",
  },
  {
    name: "Aicha Guidara",
    role: "Media Manager",
    image: "v1727725122/5_adnfq6.png",
    group: "Management team",
  },
  {
    name: "Meriem Slim",
    role: "Sponsoring Manager",
    image: "v1727725120/10_m3ykf5.png",
    group: "Support team",
  },
  {
    name: "Nour Halouani",
    role: "Treasurer",
    image: "v1727725123/12_nuekiw.png",
    group: "Support team",
  },
  {
    name: "Maryem Besbes",
    role: "External Relations Manager",
    image: "v1727725122/11_lvhgyl.png",
    group: "Support team",
  },
];

const hiddenCloudMemories = new Set([6, 7, 9]);
const cloudMemories = Array.from({ length: 16 }, (_, index) => index + 1)
  .filter((number) => !hiddenCloudMemories.has(number))
  .map((number) => ({
    src: `${CLOUDINARY_CLUB}/aero/aero${number}`,
    alt: `AeRobotiX club moment ${number}`,
    label: "AeRobotiX",
  }));

const localMemories = [
  ["aeronautics.jpg", "Aeronautics in motion", "Aeronautics"],
  ["anniversary.jpg", "AeRobotiX anniversary", "Anniversary"],
  ["barhoum sfaihi.jpg", "Barhoum Sfaihi event", "Barhoum Sfaihi"],
  ["glidercup.jpg", "Glider Cup", "Glider Cup"],
  ["greencup1.jpg", "Green Cup — team moment", "Green Cup"],
  ["greencup2.jpg", "Green Cup — competition day", "Green Cup"],
  ["ramadan.jpg", "Ramadan gathering", "Ramadan"],
  ["saroukh.jpg", "Rocket project", "Rocket Project"],
  ["team-building.jpg", "Team-building session", "Team Building"],
  ["team_building_2.jpg", "Team-building session", "Team Building"],
].map(([file, alt, label]) => ({
  src: `./memories/${encodeURIComponent(file)}`,
  alt,
  label,
}));

const memories = [...cloudMemories, ...localMemories];

const achievementGroups = [
  {
    key: "eurobot",
    title: "Eurobot",
    kicker: "European robotics competition",
    summary: "1st in national qualifications. 5th worldwide at the Eurobot finals in 2022 and 2026.",
    folder: "Eurobot",
    photos: [
      ["eurobot 2026.jpg", "Eurobot 2026 — 5th place worldwide", "5TH WORLDWIDE / 2026"],
      ["euroo.jpg", "Eurobot international finals", "FINALS"],
      ["eurooo.jpg", "Eurobot international finals", "FINALS"],
      ["2nd place euro.jpg", "2nd place in the Eurobot qualification phase", "2ND / QUALIFICATIONS"],
      ["1st place in the national qualifications Eurobot.jpg", "1st place in the Eurobot national qualifications", "1ST / NATIONAL QUALIFICATIONS"],
      ["1st place in the national qualifications Eurobot 2.jpg", "1st place in the Eurobot national qualifications", "1ST / NATIONAL QUALIFICATIONS"],
      ["the national qualifications eurobot taswira jame3eya.jpg", "Eurobot national qualifications team photo", "TEAM / QUALIFICATIONS"],
      ["equipe.jpeg", "Eurobot team photo", "TEAM / EUROBOT"],
      ["game round .jpeg", "Eurobot game round", "ARENA / MATCH"],
      ["game round finale.png", "Eurobot final game round", "ARENA / FINAL"],
    ],
  },
  {
    key: "nxp-cup",
    title: "NXP Cup",
    kicker: "Autonomous driving challenge",
    summary: "National qualifications: 1st place in 2025; 1st and 2nd place in 2026. Explore our national and international archive.",
    folder: "NXP Cup",
    photos: [
      ["team 1st place nxp cup.jpg", "Team — 1st place at the NXP Cup", "TEAM / 1ST"],
      ["team 2nd place nxp cup.jpg", "Team — 2nd place at the NXP Cup", "TEAM / 2ND"],
      ["team 2nd place nxp cup (2).jpg", "Team — 2nd place at the NXP Cup", "TEAM / 2ND"],
      ["1st place nxp cup.jpg", "1st place at the NXP Cup", "1ST PLACE"],
      ["1st place nxp cup (2).jpg", "1st place at the NXP Cup", "1ST PLACE"],
      ["1st place nxp cup (3).jpg", "1st place at the NXP Cup", "1ST PLACE"],
      ["1st place at the international stage of the NXP Cup.jpg", "1st place at the international stage of the NXP Cup", "1ST / INTERNATIONAL"],
      ["2nd place nxp cup.jpg", "2nd place at the NXP Cup", "2ND PLACE"],
      ["2nd place nxp cup (2).jpg", "2nd place at the NXP Cup", "2ND PLACE"],
      ["2nd place nxp cup (3).jpg", "2nd place at the NXP Cup", "2ND PLACE"],
      ["2nd place nxp cup (4).jpg", "2nd place at the NXP Cup", "2ND PLACE"],
      ["2nd place international stage of the NXP Cup.jpg", "2nd place at the international stage of the NXP Cup", "2ND / INTERNATIONAL"],
    ],
  },
  {
    key: "aerospina",
    title: "Aerospina",
    kicker: "Aviation and innovation challenges",
    summary: "Polyclub, Planneur, and the people who made it happen.",
    folder: "Aerospina",
    photos: [
      ["1st place Polyclub Challenge aerospina.jpg", "1st place — Polyclub Challenge", "1ST / POLYCLUB"],
      ["2nd place Planneur Challenge aerospina.jpg", "2nd place — Planneur Challenge", "2ND / PLANNEUR"],
      ["taswira jame3eya aerospina.jpg", "Aerospina team photo", "TEAM / AEROSPINA"],
    ],
  },
  {
    key: "aeroday",
    title: "Aeroday",
    kicker: "National aeronautics event",
    summary: "CAD and aeromodelism challenges at the future of flight.",
    folder: "Aeroday",
    photos: [
      ["1st Place CAO Challenge aeroday.jpg", "1st place — CAO Challenge", "1ST / CAO"],
      ["2nd Place Aeromodelism Challenge aeroday.jpg", "2nd place — Aeromodelism Challenge", "2ND / AEROMODELISM"],
    ],
  },
  {
    key: "fnct",
    title: "FNCT Hackathon 2026",
    kicker: "Civic technology challenge",
    summary: "A first-place finish at the national communes hackathon.",
    folder: "FNCT Hackathon 2026",
    photos: [
      ["1st place at FNCT (Fédération Nationale des Communes Tunisiennes) Hackathon 2026.jpg", "1st place — FNCT Hackathon 2026", "1ST / HACKATHON"],
      ["1st place FNCT (Fédération Nationale des Communes Tunisiennes) Hackathon 2026 (2).jpg", "FNCT Hackathon 2026 team photo", "TEAM / HACKATHON"],
    ],
  },
  {
    key: "line-follower",
    title: "Line Follower",
    kicker: "Autonomous robotics",
    summary: "Fast decisions, precise control, and podium finishes.",
    folder: "Line Follower",
    photos: [
      ["first place line follower ensi.jpg", "1st place — ENSI Line Follower", "1ST PLACE"],
      ["second place line follower ensi.jpg", "2nd place — ENSI Line Follower", "2ND PLACE"],
    ],
  },
  {
    key: "autonome",
    title: "Autonome ENSI",
    kicker: "Autonomous systems",
    summary: "Engineering a machine that can make its own way.",
    folder: "Autonome ENSI",
    photos: [
      ["first place autonome ensi.jpg", "1st place — Autonome ENSI", "1ST PLACE"],
      ["robot dmax.jpg", "Dmax autonomous robot project", "PROJECT / DMAX"],
    ],
  },
  {
    key: "robocup",
    title: "Robocup ENSI",
    kicker: "Robotics competition",
    summary: "Team play, perception, and robots in motion.",
    folder: "Robocup ENSI",
    photos: [["robocup ensi.jpg", "Robocup ENSI team", "ROBOCUP / ENSI"]],
  },
  {
    key: "robots-leagues",
    title: "Robots Leagues 3.0",
    kicker: "ESSTHS line follower",
    summary: "Third place at Robots Leagues 3.0 in ESSTHS.",
    folder: "Robots Leagues 3.0 - ESSTHS",
    photos: [["third place line follower Robots Leagues 3.0 at ESSTHS.jpg", "3rd place — Robots Leagues 3.0 at ESSTHS", "3RD PLACE"]],
  },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function renderTeam() {
  const roster = document.querySelector("[data-team-grid]");
  if (!roster) return;

  const fragment = document.createDocumentFragment();
  const groups = [...new Set(team.map((person) => person.group))];
  let personIndex = 0;

  groups.forEach((groupName, groupIndex) => {
    const members = team.filter((person) => person.group === groupName);
    const section = document.createElement("section");
    section.className = `team-group team-group-${groupIndex}`;
    section.setAttribute("aria-labelledby", `team-group-${groupIndex}`);

    const heading = document.createElement("div");
    heading.className = "team-group-heading reveal";
    heading.dataset.reveal = "";

    const label = document.createElement("p");
    label.id = `team-group-${groupIndex}`;
    label.textContent = groupName;

    const count = document.createElement("span");
    count.textContent = `${String(members.length).padStart(2, "0")} members`;
    heading.append(label, count);

    const grid = document.createElement("div");
    grid.className = `team-grid${groupIndex === 0 ? " team-grid-featured" : ""}`;

    members.forEach((person, index) => {
      const article = document.createElement("article");
      article.className = `person-card${groupIndex === 0 && index === 0 ? " person-card-lead" : ""}`;
      article.dataset.reveal = "";
      article.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);

      const image = document.createElement("img");
      image.src = `${CLOUDINARY_TEAM}/${person.image}`;
      image.alt = person.name;
      image.loading = personIndex < 3 ? "eager" : "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        image.remove();
        article.classList.add("image-unavailable");
      });

      const meta = document.createElement("div");
      meta.className = "person-meta";

      const number = document.createElement("span");
      number.textContent = String(personIndex + 1).padStart(2, "0");

      const name = document.createElement("h3");
      name.textContent = person.name;

      const role = document.createElement("p");
      role.textContent = person.role;

      meta.append(number, name, role);
      article.append(image, meta);
      grid.append(article);
      personIndex += 1;
    });

    section.append(heading, grid);
    fragment.append(section);
  });

  roster.append(fragment);
}

function renderMemories() {
  const track = document.querySelector("[data-gallery-track]");
  if (!track) return;

  [...memories, ...memories].forEach((memory, index) => {
    const figure = document.createElement("figure");
    figure.className = "memory-card";
    if (index >= memories.length) figure.setAttribute("aria-hidden", "true");

    const image = document.createElement("img");
    image.src = memory.src;
    image.alt = index >= memories.length ? "" : memory.alt;
    image.loading = "lazy";
    image.decoding = "async";

    const label = document.createElement("span");
    label.textContent = memory.label;

    figure.append(image, label);
    track.append(figure);
  });
}

function achievementAsset(folder, file) {
  return `./comps/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

function renderAchievements() {
  const filters = document.querySelector("[data-achievement-filters]");
  const groups = document.querySelector("[data-achievement-groups]");
  const count = document.querySelector("[data-achievement-count]");
  if (!filters || !groups || !count) return;

  const totalPhotos = achievementGroups.reduce((total, group) => total + group.photos.length, 0);
  let activeKey = "all";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "achievement-filter is-active";
  allButton.dataset.filter = "all";
  allButton.textContent = "All tracks";
  filters.append(allButton);

  achievementGroups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "achievement-filter";
    button.dataset.filter = group.key;
    button.textContent = group.title;
    filters.append(button);

    const article = document.createElement("article");
    article.className = "achievement-group reveal is-revealed";
    article.dataset.achievementGroup = group.key;
    article.dataset.reveal = "";

    const heading = document.createElement("div");
    heading.className = "achievement-group-heading";
    const headingCopy = document.createElement("div");
    const kicker = document.createElement("p");
    kicker.className = "eyebrow";
    kicker.textContent = group.kicker;
    const title = document.createElement("h3");
    title.textContent = group.title;
    headingCopy.append(kicker, title);
    const summary = document.createElement("p");
    summary.textContent = group.summary;
    heading.append(headingCopy, summary);

    const rail = document.createElement("div");
    rail.className = "achievement-rail";
    group.photos.forEach(([file, caption, tag], index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "achievement-photo";
      card.dataset.tilt = "";
      card.dataset.file = file;
      card.dataset.folder = group.folder;
      card.dataset.caption = caption;
      card.dataset.tag = tag;
      card.style.setProperty("--photo-index", index);
      card.setAttribute("aria-label", `Open ${caption}`);

      const image = document.createElement("img");
      image.src = achievementAsset(group.folder, file);
      image.alt = caption;
      image.loading = index < 2 ? "eager" : "lazy";
      image.decoding = "async";

      const overlay = document.createElement("span");
      overlay.className = "achievement-photo-overlay";
      const tagLabel = document.createElement("small");
      tagLabel.textContent = tag;
      const captionLabel = document.createElement("strong");
      captionLabel.textContent = caption;
      const openLabel = document.createElement("span");
      openLabel.className = "achievement-photo-open";
      openLabel.textContent = "View ↗";
      overlay.append(tagLabel, captionLabel, openLabel);
      card.append(image, overlay);
      rail.append(card);
    });

    article.append(heading, rail);
    groups.append(article);
  });

  [...groups.children].forEach((group) => {
    const duplicate = group.cloneNode(true);
    duplicate.dataset.duplicate = "true";
    duplicate.setAttribute("aria-hidden", "true");
    duplicate.removeAttribute("data-reveal");
    duplicate.querySelectorAll("button").forEach((button) => button.setAttribute("tabindex", "-1"));
    groups.append(duplicate);
  });

  function updateArchive(nextKey) {
    activeKey = nextKey;
    groups.classList.toggle("is-filtered", activeKey !== "all");
    filters.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === activeKey);
    });
    groups.querySelectorAll("[data-achievement-group]").forEach((group) => {
      const visible = activeKey === "all" ||
        (group.dataset.achievementGroup === activeKey && !group.dataset.duplicate);
      group.hidden = !visible;
      if (visible) {
        group.classList.remove("archive-pop");
        requestAnimationFrame(() => group.classList.add("archive-pop"));
      }
    });
    const visibleCount = activeKey === "all"
      ? totalPhotos
      : achievementGroups.find((group) => group.key === activeKey)?.photos.length || 0;
    count.textContent = `${String(visibleCount).padStart(2, "0")} frames / ${activeKey === "all" ? "all tracks" : achievementGroups.find((group) => group.key === activeKey)?.title}`;
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (button) updateArchive(button.dataset.filter);
  });
  updateArchive(activeKey);
}

renderTeam();
renderMemories();
renderAchievements();

document.querySelectorAll("[data-delay]").forEach((element) => {
  element.style.setProperty("--reveal-delay", `${element.dataset.delay}ms`);
});

function initializeReveals() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5%" },
  );

  elements.forEach((element) => observer.observe(element));
}

initializeReveals();


const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
let scrollFrame = 0;

function updateScrollUi() {
  scrollFrame = 0;
  const y = window.scrollY;
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ratio = Math.min(1, y / scrollable);
  header?.classList.toggle("is-scrolled", y > 32);
  if (progress) progress.style.transform = `scaleX(${ratio})`;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateScrollUi);
  },
  { passive: true },
);
updateScrollUi();

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const observedSections = navLinks
  .filter((link) => link.getAttribute("href")?.startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { threshold: [0.2, 0.45, 0.7], rootMargin: "-15% 0px -60%" },
  );
  observedSections.forEach((section) => sectionObserver.observe(section));
}

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
let menuPreviousFocus = null;

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileMenu.setAttribute("aria-hidden", String(!open));
  mobileMenu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);

  if (open) {
    menuPreviousFocus = document.activeElement;
    mobileMenu.querySelector("a")?.focus();
  } else if (menuPreviousFocus instanceof HTMLElement) {
    menuPreviousFocus.focus();
  }
}

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }

  if (
    event.key === "Tab" &&
    mobileMenu?.classList.contains("is-open") &&
    menuToggle
  ) {
    const focusable = [
      ...mobileMenu.querySelectorAll("a[href], button:not([disabled])"),
      menuToggle,
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function initializeTilt() {
  if (reduceMotion.matches || !window.matchMedia("(hover: hover)").matches) return;

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${x * 5}deg`);
      card.style.setProperty("--tilt-y", `${y * -5}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function initializeMagneticButtons() {
  if (reduceMotion.matches || !window.matchMedia("(hover: hover)").matches) return;

  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.09}px, ${y * 0.12}px)`;
    });
    element.addEventListener("pointerleave", () => {
      element.style.transform = "translate(0, 0)";
    });
  });
}

initializeTilt();
initializeMagneticButtons();

if (!reduceMotion.matches && window.matchMedia("(hover: hover)").matches) {
  let auraFrame = 0;
  window.addEventListener(
    "pointermove",
    (event) => {
      if (auraFrame) return;
      auraFrame = window.requestAnimationFrame(() => {
        auraFrame = 0;
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    },
    { passive: true },
  );
}

const reelDialog = document.querySelector("[data-reel-dialog]");
const reelVideo = document.querySelector("[data-reel-video]");
const openReel = document.querySelector("[data-open-reel]");
const closeReel = document.querySelector("[data-close-reel]");

function closeReelDialog() {
  if (!(reelDialog instanceof HTMLDialogElement)) return;
  reelVideo?.pause();
  reelDialog.close();
  openReel?.focus();
}

openReel?.addEventListener("click", () => {
  if (!(reelDialog instanceof HTMLDialogElement) || !(reelVideo instanceof HTMLVideoElement)) {
    window.open(REEL_URL, "_blank", "noopener,noreferrer");
    return;
  }
  if (!reelVideo.src) reelVideo.src = REEL_URL;
  reelDialog.showModal();
  reelVideo.play().catch(() => undefined);
});

closeReel?.addEventListener("click", closeReelDialog);
reelDialog?.addEventListener("click", (event) => {
  if (event.target === reelDialog) closeReelDialog();
});
reelDialog?.addEventListener("close", () => reelVideo?.pause());

const archiveDialog = document.querySelector("[data-archive-dialog]");
const archiveDialogImage = document.querySelector("[data-archive-dialog-image]");
const archiveDialogTitle = document.querySelector("[data-archive-dialog-title]");
const archiveDialogCaption = document.querySelector("[data-archive-dialog-caption]");
const closeArchive = document.querySelector("[data-close-archive]");

function closeArchiveDialog() {
  if (!(archiveDialog instanceof HTMLDialogElement)) return;
  archiveDialog.close();
}

document.querySelector("[data-achievement-groups]")?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-folder][data-file]");
  if (!card || !(archiveDialog instanceof HTMLDialogElement)) return;

  const folder = card.dataset.folder || "";
  const file = card.dataset.file || "";
  const caption = card.dataset.caption || "Achievement frame";
  archiveDialogImage.src = achievementAsset(folder, file);
  archiveDialogImage.alt = caption;
  archiveDialogTitle.textContent = card.dataset.tag || "Achievement frame";
  archiveDialogCaption.textContent = caption;
  archiveDialog.showModal();
});

closeArchive?.addEventListener("click", closeArchiveDialog);
archiveDialog?.addEventListener("click", (event) => {
  if (event.target === archiveDialog) closeArchiveDialog();
});

document.querySelector("[data-back-to-top]")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

function initializeNetwork() {
  const canvas = document.querySelector("#network-canvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let frame = 0;
  let points = [];
  const mouse = { x: -1000, y: -1000 };

  function makePoints() {
    const count = width < 720 ? 22 : Math.min(58, Math.floor(width / 28));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      radius: Math.random() * 1.1 + 0.45,
    }));
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    makePoints();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;

      const mouseDistance = Math.hypot(point.x - mouse.x, point.y - mouse.y);
      if (mouseDistance < 120 && mouseDistance > 0) {
        point.x += ((point.x - mouse.x) / mouseDistance) * 0.35;
        point.y += ((point.y - mouse.y) / mouseDistance) * 0.35;
      }

      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fillStyle = index % 7 === 0 ? "rgba(238,32,40,.55)" : "rgba(128,220,255,.38)";
      context.fill();

      for (let otherIndex = index + 1; otherIndex < points.length; otherIndex += 1) {
        const other = points[otherIndex];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance > 115) continue;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(88, 164, 205, ${0.11 * (1 - distance / 115)})`;
        context.lineWidth = 0.6;
        context.stroke();
      }
    });

    frame = window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener(
    "pointermove",
    (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    },
    { passive: true },
  );
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    } else if (!document.hidden && !frame && !reduceMotion.matches) {
      draw();
    }
  });

  resize();
  if (reduceMotion.matches) drawStaticNetwork(context, points, width, height);
  else draw();
}

function drawStaticNetwork(context, points, width, height) {
  context.clearRect(0, 0, width, height);
  points.forEach((point) => {
    context.beginPath();
    context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(128,220,255,.3)";
    context.fill();
  });
}

initializeNetwork();
