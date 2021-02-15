let slideIndex = 0;

// Thumbnail image controls
const currentSlide = (n) => {
  slideIndex = n - 1;
};

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // slides.forEach((slide) => (slide.style.display = "none"));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
};

showSlides();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const showMenu = () => {
  var x = document.getElementById("top-nav");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
};
