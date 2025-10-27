const elAnimations = document.querySelectorAll(".animation"); // take all element that have class animation
const observer = new IntersectionObserver(
  (entris) => {
    entris.forEach((entry) => {
      entry.target.classList.toggle("appear", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

elAnimations.forEach((animation) => {
    const delay = animation.dataset.delay || 0
    animation.style.transitionDelay = `${delay}s`
    observer.observe(animation)
})