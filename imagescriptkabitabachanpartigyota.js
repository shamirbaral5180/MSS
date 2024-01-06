const images = [
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image1.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image2.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image3.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image4.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image5.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image6.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image7.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image8.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image9.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image10.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image11.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image12.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image13.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image14.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image15.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image16.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image17.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image18.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image19.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image20.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image21.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image22.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image23.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image24.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image25.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image26.jpg",                    // Add more video sources as needed                       // Add more video sources as needed
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image27.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image28.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image29.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image30.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image31.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image32.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image33.jpg",
    "gallery/2080/2080-05-22 kabita bachan Partigyota/image34.jpg"
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
  