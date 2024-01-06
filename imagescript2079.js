const images = [
  "gallery/2079/image1.jpeg",
  "gallery/2079/image2.jpg",
  "gallery/2079/image3.jpeg",
  "gallery/2079/image4.jpeg",
  "gallery/2079/image5.jpeg",
  "gallery/2079/image6.jpeg",  
  "gallery/2079/image7.jpeg",
  "gallery/2079/image8.jpeg",
  "gallery/2079/image9.jpeg",
  "gallery/2079/image10.jpeg",
  "gallery/2079/image11.jpeg",
  "gallery/2079/image12.jpeg",
  "gallery/2079/image13.jpeg",
  "gallery/2079/image14.jpeg",  
  "gallery/2079/image15.jpeg",
  "gallery/2079/image16.jpeg",
  "gallery/2079/image17.jpeg",
  "gallery/2079/image18.jpeg",
  "gallery/2079/image19.jpeg",
  "gallery/2079/image20.jpeg",
  "gallery/2079/image21.jpeg",
  "gallery/2079/image22.jpeg",  
  "gallery/2079/image23.jpeg",
  "gallery/2079/image24.jpeg",
  "gallery/2079/image25.jpeg",
  "gallery/2079/image26.jpeg",
  "gallery/2079/image27.jpeg",
  "gallery/2079/image28.jpeg",
  "gallery/2079/image29.jpeg",
  "gallery/2079/image30.jpeg",  
  "gallery/2079/image31.jpeg",
  "gallery/2079/image32.jpeg",
  "gallery/2079/image33.jpeg",
  "gallery/2079/image34.jpeg",
  "gallery/2079/image35.jpeg",
  "gallery/2079/image36.jpeg"                        // Add more video sources as needed
];

const totalImages = images.length;
const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;
const preloadImages = [];

function preload() {
  for (let i = 0; i < totalImages; i++) {
    preloadImages[i] = new Image();
    preloadImages[i].src = images[i];
  }
}

function showImage(index) {
  imageElement.src = preloadImages[index].src;
  currentIndex = index;
}

function prevImage() {
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(prevIndex);
}

function nextImage() {
  const nextIndex = (currentIndex + 1) % totalImages;
  showImage(nextIndex);
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

preload();
showImage(currentIndex);
