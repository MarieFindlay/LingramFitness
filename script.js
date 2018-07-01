const aboutSection = document.getElementById("aboutSection");
const PTSection = document.getElementById("PTSection");
const classesSection = document.getElementById("classesSection");
const getInTouchSection = document.getElementById("getInTouchSection");

function scrollSection(sectionName) {
  sectionName.scrollIntoView({ behavior: "smooth", block: "start" });
}

function aboutScroll() {
  scrollSection(aboutSection);
}

function PTScroll() {
  scrollSection(PTSection);
}

function classesScroll() {
  scrollSection(classesSection);
}

function getInTouchScroll() {
  scrollSection(getInTouchSection);
}

document.querySelector(".aboutMeButton").addEventListener("click", aboutScroll);

document
  .querySelector(".personalTrainingButton")
  .addEventListener("click", PTScroll);

document
  .querySelector(".classesButton")
  .addEventListener("click", classesScroll);

document
  .querySelector(".getInTouchButton")
  .addEventListener("click", getInTouchScroll);
