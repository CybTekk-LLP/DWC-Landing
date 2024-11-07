let lastKnownScrollPosition = 0;
let ticking = false;
let rotationY = 180;

function rotateModel(scrollPos) {
  const model = document.querySelector("#model");
  const rotationChange = (scrollPos - lastKnownScrollPosition) * 0.05;
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

const sections = document.querySelectorAll("section");
const scene = document.querySelector("a-scene");
const observerOptions = {
  root: null, // relative to the viewport
  threshold: 0.5, // 50% visibility to trigger the observer
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`Visible section: ${entry.target.id}`);
      if (entry.target.id === "one") {
        scene.classList?.remove("color");
        scene.classList?.remove("hide");
      }
      if (entry.target.id === "two") {
        scene.classList.add("color");
        scene.classList?.remove("hide");
      }
      if (entry.target.id === "three") {
        scene.classList.add("hide");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));
