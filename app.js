import { project } from "./content/project.js";

const all = (selector) => [...document.querySelectorAll(selector)];
const setText = (selector, value) => all(selector).forEach((el) => (el.textContent = value));

setText("[data-title]", project.title);
setText("[data-short-title]", project.shortTitle);
setText("[data-venue]", project.venue);
setText("[data-status]", project.status);
setText("[data-tldr]", project.tldr);
setText("[data-abstract]", project.abstract);
setText("[data-bibtex]", project.bibtex);

document.querySelector("[data-authors]").innerHTML = project.authors.map((name, i) => `<span>${name}${i < project.authors.length - 1 ? "<b>·</b>" : ""}</span>`).join("");
document.querySelector("[data-affiliations]").textContent = project.affiliations.join("  ·  ");

const icons = { paper: "↗", code: "⌘", model: "◈", poster: "▤", video: "▶" };
document.querySelector("[data-links]").innerHTML = project.links.map((link) => link.url
  ? `<a class="project-link" href="${link.url}"><i>${icons[link.icon]}</i>${link.label}</a>`
  : `<span class="project-link disabled" aria-disabled="true" title="Coming soon"><i>${icons[link.icon]}</i>${link.label}<small>soon</small></span>`).join("");

document.querySelector("[data-claims]").innerHTML = project.claims.map((claim) => `<article><span>${claim.number}</span><h3>${claim.title}</h3><p>${claim.text}</p></article>`).join("");
document.querySelector("[data-levels]").innerHTML = project.levels.map((level, i) => `<article class="level ${level.color}"><div class="level-number">0${i + 1}</div><div class="level-main"><div class="level-tags"><span>${level.tag}</span><small>${level.scope}</small></div><h3>${level.name}</h3><p>${level.description}</p><code>${level.equation}</code></div></article>`).join("");

document.querySelector("[data-highlights]").innerHTML = project.results.highlights.map((item) => `<article><div><strong>${item.value}</strong><span>${item.unit}</span></div><h3>${item.label}</h3><p>${item.detail}</p></article>`).join("");

const maxLong = Math.max(...project.results.longRetrieval.map((row) => row.average));
document.querySelector("[data-long-chart]").innerHTML = project.results.longRetrieval.map((row) => `<div class="bar-row ${row.best ? "best" : ""}"><span>${row.method}</span><div class="bar-track"><i style="width:${(row.average / maxLong) * 100}%"></i></div><strong>${row.average.toFixed(2)}</strong></div>`).join("");

document.querySelector("[data-classification]").innerHTML = project.results.classification.map((row) => `<div class="compare-row"><span>${row.dataset}</span><div class="paired-bars"><i class="goal" style="width:${row.goal}%"><b>${row.goal.toFixed(2)}</b></i><i class="ours" style="width:${row.mulclip}%"><b>${row.mulclip.toFixed(2)}</b></i></div></div>`).join("");

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add("visible");
}), { threshold: 0.12 });
all(".section-grid, .claims article, .level, .data-card, .paper-figure, .wide-figure, .insight-grid").forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 32), { passive: true });
