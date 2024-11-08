let lastKnownScrollPosition = 0;
let ticking = false;
let rotationY = 170;

function rotateModel(scrollPos) {
  const model = document.querySelector("#model");
  const rotationChange = (scrollPos - lastKnownScrollPosition) * 0.1;
  rotationY += rotationChange;
  model.setAttribute("rotation", `0 ${rotationY} 0`);
  lastKnownScrollPosition = scrollPos;
}

document.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      rotateModel(window.scrollY);
      ticking = false;
    });
    ticking = true;
  }
});

const allSections = document.querySelectorAll("section");
const scene = document.querySelector("a-scene");
const observerOptions = {
  root: null, // relative to the viewport
  threshold: 0.5, // 50% visibility to trigger the observer
};

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`Visible section: ${entry.target.id}`);
      if (entry.target.id === "landing") {
        scene.classList?.remove("color");
        scene.classList?.remove("hide");
      }
      if (entry.target.id === "model-text") {
        scene.classList.add("color");
        scene.classList?.remove("hide");
      }
      if (entry.target.id === "commercial" || entry.target.id === "residential" || entry.target.id === "infrastructure" || entry.target.id === "projects") {
        scene.classList.add("hide");
      }
    }
  });
}, observerOptions);

allSections.forEach((section) => observers.observe(section));
