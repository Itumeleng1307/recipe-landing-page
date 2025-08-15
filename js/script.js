let slides = document.querySelectorAll('.recipe-divider');
let typewriter = new Typewriter('#recipe-typewriter', {
  autoStart: true,
  loop: false,
  delay: 20,
});

typewriter
  .typeString("Where Smoke Meets Flavour. It's more than a meal, it's a vibe!")
  .pauseFor(500)
  .typeString("<br>Grilled meats, spicy sides, and good times shared around the fire.")
  .pauseFor(500)
  .typeString("<br>Authentic South African flame culture, served hot.")
  .start();
  let tips = [
