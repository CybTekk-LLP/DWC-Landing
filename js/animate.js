let currentSectionIndex = -1;
const sections = document.querySelectorAll("[data-animate]");
let animationData = new Array(sections.length).fill(false);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sections.forEach((item, index) => {
        if (item === entry.target) currentSectionIndex = index;
      });
      renderAnimation(currentSectionIndex);
    }
  });
};

const renderAnimation = (index) => {
  // if (animationData[index]) return;
  animationData[index] = true; // Set current section's animation to true
  if (!animationData[Math.min(index + 1, sections.length - 1)])
    sections[index].setAttribute("animate", "");
};

// Initialize the observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust threshold as needed
});

// Observe each section
sections.forEach((section) => observer.observe(section));
