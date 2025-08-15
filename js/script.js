let slides = document.querySelectorAll('.recipe-divider');
  let nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;

  nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  });
  
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
    "🔥 Flip meat only once to keep it juicy.",
    "🪵 Add soaked wood chips for smoky flavour.",
    "⏱️ Let meat rest after cooking — don’t skip it.",
    "🧂 Salt just before grilling to avoid drying it out.",
    "🍽️ Clean the grill while it’s still warm.",
    "🥩 Room temp meat cooks more evenly.",
    "🔥 Don’t overload the braai — give meat space!"
  ];

  let currentTipIndex = -1;

  function getRandomTip(excludeIndex) {
    let index;
    do {
      index = Math.floor(Math.random() * tips.length);
    } while (index === excludeIndex);
    return [tips[index], index];
  }

  function showRandomTips() {
    let [tip1, index1] = getRandomTip(currentTipIndex);
    let [tip2, index2] = getRandomTip(index1);

    currentTipIndex = index2;

    document.getElementById("tipFront").textContent = tip1;
    document.getElementById("tipBack").textContent = tip2;

    // Flip the card every time you get new tips
    flipCard();
  }

  function flipCard() {
    let card = document.querySelector(".flip-card");
    card.classList.toggle("flipped");
  }

  // Show first tip pair on page load
  showRandomTips();


