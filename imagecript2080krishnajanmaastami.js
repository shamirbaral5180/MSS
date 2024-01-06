const images = [
    "gallery/2080/krishna janma astami 2080/image1.jpeg",
    "gallery/2080/krishna janma astami 2080/image2.jpeg",
    "gallery/2080/krishna janma astami 2080/image3.jpeg",
    "gallery/2080/krishna janma astami 2080/image4.jpeg",
    "gallery/2080/krishna janma astami 2080/image5.jpeg",
    "gallery/2080/krishna janma astami 2080/image6.jpeg",
    "gallery/2080/krishna janma astami 2080/image7.jpeg",
    "gallery/2080/krishna janma astami 2080/image8.jpeg",
    "gallery/2080/krishna janma astami 2080/image9.jpeg",
    "gallery/2080/krishna janma astami 2080/image10.jpeg",
    "gallery/2080/krishna janma astami 2080/image11.jpeg",
    "gallery/2080/krishna janma astami 2080/image12.jpeg",
    "gallery/2080/krishna janma astami 2080/image13.jpeg",
    "gallery/2080/krishna janma astami 2080/image14.jpeg",
    "gallery/2080/krishna janma astami 2080/image15.jpeg"                    // Add more video sources as needed
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
  