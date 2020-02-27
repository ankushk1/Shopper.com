const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 12 +
          0.5}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};
navSlide();



function bgChanger() {
  if (this.scrollY > this.innerHeight / 1.5) {

    document.body.classList.add('p-active')

  } else {
    document.body.classList.remove('p-active')
  }
}

function bgchanger() {
  if (this.scrollY > this.innerHeight) {

    document.body.classList.remove('p-active')
  }
}
window.addEventListener('scroll', bgChanger);
window.addEventListener('scroll', bgchanger);


