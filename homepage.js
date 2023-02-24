let images = document.getElementById("image-slider").getElementsByTagName("img");
let current = 0;

function nextImage() {
  images[current].classList.remove("show");
  current = (current + 1) % images.length;
  images[current].classList.add("show");
  setTimeout(nextImage, 3500);
}

nextImage();